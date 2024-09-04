import { sumArray } from './index';

describe('Tests', () => {
    it('example', () => {
        expect(sumArray(null)).toBe(0);
        expect(sumArray([])).toBe(0);
        expect(sumArray([3])).toBe(0);
        expect(sumArray([3, 5])).toBe(0);
        expect(sumArray([6, 2, 1, 8, 10])).toBe(16);
        expect(sumArray([0, 1, 6, 10, 10])).toBe(17);
        expect(sumArray([-6, -20, -1, -10, -12])).toBe(-28);
        expect(sumArray([-6, 20, -1, 10, -12])).toBe(3);
    });
});
