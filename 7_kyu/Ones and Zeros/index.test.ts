import { binaryArrayToNumber } from './index';

describe('Tests', () => {
    it('binaryArrayToNumber', () => {
        expect(binaryArrayToNumber([0, 0, 0, 1])).toBe(1);
        expect(binaryArrayToNumber([0, 0, 1, 0])).toBe(2);
        expect(binaryArrayToNumber([1, 1, 1, 1])).toBe(15);
        expect(binaryArrayToNumber([0, 1, 1, 0])).toBe(6);
    });
});
