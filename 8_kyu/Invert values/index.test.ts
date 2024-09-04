import { invert } from './index';

describe('Tests', () => {
    it('invert', () => {
        expect(invert([1, 2, 3, 4, 5])).toEqual([-1, -2, -3, -4, -5]);
        expect(invert([1, -2, 3, -4, 5])).toEqual([-1, 2, -3, 4, -5]);
        expect(invert([])).toEqual([]);
        expect(invert([0])).toEqual([-0]);
    });
});
