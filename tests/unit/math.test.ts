import { describe, it, expect } from 'vitest';
import { add, subtract } from '../../src/utils/math';

describe('Math utilities', () => {
  it('adds numbers correctly', () => {
    expect(add(1, 1)).toBe(2);
  });

  it('subtracts numbers correctly', () => {
    expect(subtract(5, 2)).toBe(3);
  });
});
