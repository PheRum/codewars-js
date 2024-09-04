import { arr2bin } from './index';

describe('Tests', () => {
    it('example', () => {
        expect(arr2bin([1, 2])).toBe('11');
        expect(arr2bin([1, 2, 3, 4, 5])).toBe('1111');
        expect(arr2bin([1, 10, 100, 1000])).toBe('10001010111');
        expect(arr2bin([null])).toBe('0');
        expect(arr2bin([true, true, false, 15])).toBe('1111');
    });
});
