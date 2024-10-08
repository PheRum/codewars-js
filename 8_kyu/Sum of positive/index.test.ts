import { positiveSum } from './index';

describe('Tests', () => {
    it('positiveSum', () => {
        expect(positiveSum([1, 2, 3, 4, 5])).toBe(15);
        expect(positiveSum([1, -2, 3, 4, 5])).toBe(13);
        expect(positiveSum([])).toBe(0);
        expect(positiveSum([-1, -2, -3, -4, -5])).toBe(0);
        expect(positiveSum([-1, 2, 3, 4, -5])).toBe(9);
    });
});
