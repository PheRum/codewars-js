import { monkeyCount } from './index';

describe('Tests', () => {
    it('Testing for 5', () => {
        expect(monkeyCount(5)).toEqual([1, 2, 3, 4, 5]);
    });
    it('Testing for 3', () => {
        expect(monkeyCount(3)).toEqual([1, 2, 3]);
    });
    it('Testing for 9', () => {
        expect(monkeyCount(9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    it('Testing for 10', () => {
        expect(monkeyCount(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    it('Testing for 20', () => {
        expect(monkeyCount(20)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    });
});
