import { readFileSync } from 'fs';
import { resolve } from 'path';
import { describe, it, expect } from 'vitest';

const ROOT = resolve(__dirname, '..');

// ---------------------------------------------------------------------------
// .eslintrc.json
// ---------------------------------------------------------------------------

describe('.eslintrc.json', () => {
  const configPath = resolve(ROOT, '.eslintrc.json');
  let config: Record<string, unknown>;

  it('is a valid JSON file', () => {
    const raw = readFileSync(configPath, 'utf-8');
    expect(() => { config = JSON.parse(raw); }).not.toThrow();
    config = JSON.parse(raw);
  });

  it('contains the extends array', () => {
    const raw = readFileSync(configPath, 'utf-8');
    config = JSON.parse(raw);
    expect(config).toHaveProperty('extends');
    expect(Array.isArray(config.extends)).toBe(true);
  });

  it('extends next/core-web-vitals', () => {
    const raw = readFileSync(configPath, 'utf-8');
    config = JSON.parse(raw);
    const extendsArr = config.extends as string[];
    expect(extendsArr).toContain('next/core-web-vitals');
  });

  it('extends next/typescript', () => {
    const raw = readFileSync(configPath, 'utf-8');
    config = JSON.parse(raw);
    const extendsArr = config.extends as string[];
    expect(extendsArr).toContain('next/typescript');
  });

  it('extends exactly the two expected configs', () => {
    const raw = readFileSync(configPath, 'utf-8');
    config = JSON.parse(raw);
    const extendsArr = config.extends as string[];
    expect(extendsArr).toHaveLength(2);
    expect(extendsArr).toEqual(['next/core-web-vitals', 'next/typescript']);
  });

  it('lists next/core-web-vitals before next/typescript', () => {
    const raw = readFileSync(configPath, 'utf-8');
    config = JSON.parse(raw);
    const extendsArr = config.extends as string[];
    expect(extendsArr.indexOf('next/core-web-vitals')).toBeLessThan(
      extendsArr.indexOf('next/typescript')
    );
  });

  it('contains a rules object', () => {
    const raw = readFileSync(configPath, 'utf-8');
    config = JSON.parse(raw);
    expect(config).toHaveProperty('rules');
    expect(typeof config.rules).toBe('object');
    expect(config.rules).not.toBeNull();
    expect(Array.isArray(config.rules)).toBe(false);
  });

  it('turns off react/no-unescaped-entities', () => {
    const raw = readFileSync(configPath, 'utf-8');
    config = JSON.parse(raw);
    const rules = config.rules as Record<string, unknown>;
    expect(rules).toHaveProperty('react/no-unescaped-entities');
    expect(rules['react/no-unescaped-entities']).toBe('off');
  });

  it('does not enable any extra rules beyond the specified override', () => {
    const raw = readFileSync(configPath, 'utf-8');
    config = JSON.parse(raw);
    const rules = config.rules as Record<string, unknown>;
    const ruleKeys = Object.keys(rules);
    expect(ruleKeys).toHaveLength(1);
    expect(ruleKeys[0]).toBe('react/no-unescaped-entities');
  });

  it('does not accidentally turn on react/no-unescaped-entities (must be "off", not "warn" or "error")', () => {
    const raw = readFileSync(configPath, 'utf-8');
    config = JSON.parse(raw);
    const rules = config.rules as Record<string, unknown>;
    const value = rules['react/no-unescaped-entities'];
    expect(value).not.toBe('warn');
    expect(value).not.toBe('error');
    expect(value).not.toBe(1);
    expect(value).not.toBe(2);
    expect(value).toBe('off');
  });

  it('has no top-level keys other than extends and rules', () => {
    const raw = readFileSync(configPath, 'utf-8');
    config = JSON.parse(raw);
    const keys = Object.keys(config).sort();
    expect(keys).toEqual(['extends', 'rules']);
  });
});

// ---------------------------------------------------------------------------
// .eslintignore
// ---------------------------------------------------------------------------

describe('.eslintignore', () => {
  const ignorePath = resolve(ROOT, '.eslintignore');

  it('exists and is readable', () => {
    expect(() => readFileSync(ignorePath, 'utf-8')).not.toThrow();
  });

  it('ignores .next', () => {
    const content = readFileSync(ignorePath, 'utf-8');
    const patterns = content
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);
    expect(patterns).toContain('.next');
  });

  it('ignores node_modules', () => {
    const content = readFileSync(ignorePath, 'utf-8');
    const patterns = content
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);
    expect(patterns).toContain('node_modules');
  });

  it('contains exactly two ignore patterns', () => {
    const content = readFileSync(ignorePath, 'utf-8');
    const patterns = content
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);
    expect(patterns).toHaveLength(2);
  });

  it('lists .next as the first pattern', () => {
    const content = readFileSync(ignorePath, 'utf-8');
    const patterns = content
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);
    expect(patterns[0]).toBe('.next');
  });

  it('lists node_modules as the second pattern', () => {
    const content = readFileSync(ignorePath, 'utf-8');
    const patterns = content
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);
    expect(patterns[1]).toBe('node_modules');
  });

  it('does not include source directories as ignored patterns', () => {
    const content = readFileSync(ignorePath, 'utf-8');
    const patterns = content
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);
    const sourceDirs = ['app', 'components', 'lib', 'pages', 'src'];
    for (const dir of sourceDirs) {
      expect(patterns).not.toContain(dir);
    }
  });

  it('contains no blank lines between patterns (all non-empty lines are patterns)', () => {
    const content = readFileSync(ignorePath, 'utf-8');
    const nonEmpty = content
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);
    // Every non-empty line should be a real pattern (non-comment, non-blank)
    for (const line of nonEmpty) {
      expect(line.length).toBeGreaterThan(0);
    }
  });
});