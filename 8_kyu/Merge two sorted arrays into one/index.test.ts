import { mergeArrays } from './index';

describe('Tests', () => {
    it('test', () => {
        expect(mergeArrays([1, 2, 3, 4], [5, 6, 7, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
        expect(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        expect(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12])).toEqual([1, 2, 3, 4, 5, 7, 9, 10, 11, 12]);
    });
});
