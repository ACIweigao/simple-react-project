import { format } from '../utils/format.js';

describe('test format module', () => {
  test('test format function', () => {
    expect(format('a')).toBe('a');
  });
});
