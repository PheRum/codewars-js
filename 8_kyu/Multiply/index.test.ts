import { multiply } from './index';

describe('Tests', () => {
    it('multiply', () => {
        expect(multiply(1, 1)).toBe(1);
        expect(multiply(2, 3)).toBe(6);
        expect(multiply(3, 5)).toBe(15);
        expect(multiply(5, 0)).toBe(0);
        expect(multiply(0, 5)).toBe(0);
        expect(multiply(0, 0)).toBe(0);
    });
});
