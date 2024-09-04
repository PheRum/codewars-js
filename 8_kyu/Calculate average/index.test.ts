import { findAverage } from './index';

describe('Tests', () => {
    it('example', () => {
        expect(findAverage([1, 1, 1])).toBe(1);
        expect(findAverage([1, 2, 3])).toBe(2);
        expect(findAverage([1, 2, 3, 4])).toBe(2.5);
    });
});
