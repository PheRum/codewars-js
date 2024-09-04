import { multiply } from './index';

describe('Tests', () => {
    it('multiply', () => {
        expect(multiply(10)).toBe(250);
        expect(multiply(5)).toBe(25);
        expect(multiply(200)).toBe(25000);
        expect(multiply(0)).toBe(0);
        expect(multiply(-2)).toBe(-10);
    });
});
