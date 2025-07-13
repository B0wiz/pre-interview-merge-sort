import { merge } from '../src/merge';

describe('merge()', () => {
  it('merges three sorted arrays into ascending order', () => {
    const c1 = [1, 3, 5];
    const c2 = [7, 4, 2]; // descending
    const c3 = [6, 8, 10];
    const result = merge(c1, c2, c3);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 10]);
  });

  it('handles empty arrays', () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1, 2, 3], [], [])).toEqual([1, 2, 3]);
    expect(merge([], [3, 2, 1], [])).toEqual([1, 2, 3]);
  });

  it('handles duplicates', () => {
    const result = merge([1, 2, 3], [3, 2, 1], [2, 3, 4]);
    expect(result).toEqual([1, 1, 2, 2, 2, 3, 3, 3, 4]);
  });

  it('handles single element arrays', () => {
    const result = merge([2], [3], [1]);
    expect(result).toEqual([1, 2, 3]);
  });

  it('handles arrays with negative numbers', () => {
    const result = merge([-3, -1, 2], [4, 0, -2], [-5, 1, 3]);
    expect(result).toEqual([-5, -3, -2, -1, 0, 1, 2, 3, 4]);
  });

  it('handles arrays with diffrent lengths', () => {
    const c1 = [1, 3];
    const c2 = [5, 4, 2];
    const c3 = [6, 8, 10, 12];
    const result = merge(c1, c2, c3);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 8, 10, 12]);
  });
});