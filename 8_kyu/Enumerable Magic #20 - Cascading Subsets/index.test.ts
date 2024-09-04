import { eachCons } from './index';

describe('Tests', () => {
    const lst = [3, 5, 8, 13];

    it('Should return cascading lists of 1 element', function () {
        expect(eachCons(lst, 1)).toEqual([[3], [5], [8], [13]]);
    });

    it('Should return cascading lists of 2 element', function () {
        expect(eachCons(lst, 2)).toEqual([
            [3, 5],
            [5, 8],
            [8, 13],
        ]);
    });

    it('Should return cascading lists of 3 element', function () {
        expect(eachCons(lst, 3)).toEqual([
            [3, 5, 8],
            [5, 8, 13],
        ]);
    });

    it('Empty list should return an empty list', function () {
        expect(eachCons([], 3)).toEqual([]);
    });
});
