import { sumOfDifferences } from './index';

describe('Tests', () => {
    it('example', () => {
        expect(sumOfDifferences([1, 2, 10])).toBe(9);
        expect(sumOfDifferences([-3, -2, -1])).toBe(2);
    });
});
