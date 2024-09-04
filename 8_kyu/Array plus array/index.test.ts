import { arrayPlusArray } from './index';

describe('Tests', () => {
    it('example', () => {
        expect(arrayPlusArray([1, 2, 3], [4, 5, 6])).toBe(21);
        expect(arrayPlusArray([-1, -2, -3], [-4, -5, -6])).toBe(-21);
        expect(arrayPlusArray([0, 0, 0], [4, 5, 6])).toBe(15);
        expect(arrayPlusArray([100, 200, 300], [400, 500, 600])).toBe(2100);
    });
});
