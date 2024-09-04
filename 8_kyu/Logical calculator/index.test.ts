import { logicalCalc } from './index';

describe('Tests', () => {
    it('logicalCalc', () => {
        expect(logicalCalc([true, true, true, false], 'AND')).toBe(false);
        expect(logicalCalc([true, true, true, false], 'OR')).toBe(true);
        expect(logicalCalc([true, true, true, false], 'XOR')).toBe(true);
        expect(logicalCalc([true, true, false, false], 'AND')).toBe(false);
        expect(logicalCalc([true, true, false, false], 'OR')).toBe(true);
        expect(logicalCalc([true, true, false, false], 'XOR')).toBe(false);
        expect(logicalCalc([true, false, false, false], 'AND')).toBe(false);
        expect(logicalCalc([true, false, false, false], 'OR')).toBe(true);
        expect(logicalCalc([true, false, false, false], 'XOR')).toBe(true);
    });
});
