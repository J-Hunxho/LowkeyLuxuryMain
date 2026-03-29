/**
 * Tests for services/geminiService.ts
 *
 * The PR introduced VITE_GEMINI_API_KEY as the sole environment variable for
 * the application.  geminiService.ts reads that variable via
 * `import.meta.env.VITE_GEMINI_API_KEY` and gates all Gemini functionality
 * behind its presence.  These tests verify that behaviour.
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import type { GeminiChatSession } from '../services/geminiService';

// ── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Import geminiService fresh after import.meta.env has been set.
 * vi.resetModules() clears the module registry so the module-level
 * `API_KEY` constant is re-evaluated on the next import().
 */
async function importService() {
  const mod = await import('../services/geminiService');
  return mod;
}

// ── createChatSession ────────────────────────────────────────────────────────

describe('createChatSession', () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.resetModules();
  });

  it('returns null when VITE_GEMINI_API_KEY is not set', async () => {
    vi.stubEnv('VITE_GEMINI_API_KEY', '');
    vi.resetModules();
    const { createChatSession } = await importService();
    const session = createChatSession();
    expect(session).toBeNull();
  });

  it('returns null when VITE_GEMINI_API_KEY is whitespace only', async () => {
    vi.stubEnv('VITE_GEMINI_API_KEY', '   ');
    vi.resetModules();
    const { createChatSession } = await importService();
    const session = createChatSession();
    expect(session).toBeNull();
  });

  it('returns a session object when VITE_GEMINI_API_KEY is set', async () => {
    vi.stubEnv('VITE_GEMINI_API_KEY', 'test-api-key-12345');
    vi.resetModules();
    const { createChatSession } = await importService();
    const session = createChatSession();
    expect(session).not.toBeNull();
    expect(session).toHaveProperty('history');
  });

  it('returns a session with an empty history array', async () => {
    vi.stubEnv('VITE_GEMINI_API_KEY', 'test-api-key-12345');
    vi.resetModules();
    const { createChatSession } = await importService();
    const session = createChatSession();
    expect(session!.history).toEqual([]);
  });

  it('each call returns an independent session object', async () => {
    vi.stubEnv('VITE_GEMINI_API_KEY', 'test-api-key-12345');
    vi.resetModules();
    const { createChatSession } = await importService();
    const sessionA = createChatSession();
    const sessionB = createChatSession();
    expect(sessionA).not.toBe(sessionB);
  });
});

// ── sendMessageToGemini ──────────────────────────────────────────────────────

describe('sendMessageToGemini', () => {
  beforeEach(async () => {
    vi.stubEnv('VITE_GEMINI_API_KEY', 'test-api-key-12345');
    vi.resetModules();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.resetModules();
    vi.restoreAllMocks();
  });

  it('returns a configuration error string when chat session is null', async () => {
    const { sendMessageToGemini } = await importService();
    const result = await sendMessageToGemini(null, 'Hello');
    expect(result).toContain('VITE_GEMINI_API_KEY');
    expect(result.toLowerCase()).toMatch(/config|error|not set/i);
  });

  it('returns the configuration error string without calling fetch when chat is null', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const { sendMessageToGemini } = await importService();
    await sendMessageToGemini(null, 'Hello');
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it('adds the user message to chat history before calling the API', async () => {
    const { createChatSession, sendMessageToGemini } = await importService();

    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        candidates: [{ content: { parts: [{ text: 'Acknowledged.' }] } }],
      }),
    } as Response);

    const session = createChatSession()!;
    await sendMessageToGemini(session, 'What is your pricing model?');

    expect(session.history.some((entry) => entry.role === 'user')).toBe(true);
    expect(session.history.find((e) => e.role === 'user')?.parts[0].text).toBe(
      'What is your pricing model?'
    );
  });

  it('appends the model reply to chat history on a successful response', async () => {
    const { createChatSession, sendMessageToGemini } = await importService();

    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        candidates: [{ content: { parts: [{ text: 'Strategic pricing follows.' }] } }],
      }),
    } as Response);

    const session = createChatSession()!;
    await sendMessageToGemini(session, 'Tell me about pricing.');

    expect(session.history.some((e) => e.role === 'model')).toBe(true);
    expect(session.history.find((e) => e.role === 'model')?.parts[0].text).toBe(
      'Strategic pricing follows.'
    );
  });

  it('returns the model text from a successful API response', async () => {
    const { createChatSession, sendMessageToGemini } = await importService();

    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        candidates: [{ content: { parts: [{ text: 'Delivered on time.' }] } }],
      }),
    } as Response);

    const session = createChatSession()!;
    const result = await sendMessageToGemini(session, 'When?');
    expect(result).toBe('Delivered on time.');
  });

  it('returns a fallback message when the API responds with an error status', async () => {
    const { createChatSession, sendMessageToGemini } = await importService();

    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
      ok: false,
      status: 403,
      text: async () => 'Forbidden',
    } as Response);

    const session = createChatSession()!;
    const result = await sendMessageToGemini(session, 'Any question');
    expect(result).toBeTruthy();
    expect(typeof result).toBe('string');
    // Should not surface raw HTTP error details to the caller
    expect(result).not.toContain('403');
  });

  it('returns a fallback message when fetch throws a network error', async () => {
    const { createChatSession, sendMessageToGemini } = await importService();

    vi.spyOn(globalThis, 'fetch').mockRejectedValueOnce(new Error('Network failure'));

    const session = createChatSession()!;
    const result = await sendMessageToGemini(session, 'Any question');
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
    expect(result).not.toContain('Network failure');
  });

  it('returns the fallback text when the API payload has no candidates', async () => {
    const { createChatSession, sendMessageToGemini } = await importService();

    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: async () => ({ candidates: [] }),
    } as Response);

    const session = createChatSession()!;
    const result = await sendMessageToGemini(session, 'Question');
    expect(result).toBeTruthy();
    expect(typeof result).toBe('string');
  });

  it('returns the fallback text when candidate text is whitespace only', async () => {
    const { createChatSession, sendMessageToGemini } = await importService();

    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        candidates: [{ content: { parts: [{ text: '   ' }] } }],
      }),
    } as Response);

    const session = createChatSession()!;
    const result = await sendMessageToGemini(session, 'Question');
    // A whitespace-only response should fall back to the apologetic message
    expect(result.trim()).not.toBe('');
    expect(result).toMatch(/apologize|cannot|lapse/i);
  });

  it('builds the request URL using the API key from VITE_GEMINI_API_KEY', async () => {
    const { createChatSession, sendMessageToGemini } = await importService();

    let capturedUrl = '';
    vi.spyOn(globalThis, 'fetch').mockImplementationOnce(async (url) => {
      capturedUrl = String(url);
      return {
        ok: true,
        json: async () => ({
          candidates: [{ content: { parts: [{ text: 'ok' }] } }],
        }),
      } as Response;
    });

    const session = createChatSession()!;
    await sendMessageToGemini(session, 'Hi');

    expect(capturedUrl).toContain('test-api-key-12345');
    expect(capturedUrl).toContain('generativelanguage.googleapis.com');
  });

  it('accumulates conversation history across multiple turns', async () => {
    const { createChatSession, sendMessageToGemini } = await importService();

    vi.spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          candidates: [{ content: { parts: [{ text: 'First answer.' }] } }],
        }),
      } as Response)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          candidates: [{ content: { parts: [{ text: 'Second answer.' }] } }],
        }),
      } as Response);

    const session = createChatSession()!;
    await sendMessageToGemini(session, 'First question');
    await sendMessageToGemini(session, 'Second question');

    // user + model × 2 = 4 entries
    expect(session.history).toHaveLength(4);
    expect(session.history[0].role).toBe('user');
    expect(session.history[1].role).toBe('model');
    expect(session.history[2].role).toBe('user');
    expect(session.history[3].role).toBe('model');
  });
});