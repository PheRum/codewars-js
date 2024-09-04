import { findAverage } from './index';

describe('Tests', () => {
    it('should return the average', function () {
        expect(findAverage([1])).toBe(1);
        expect(findAverage([1, 3, 5, 7])).toBe(4);
    });
});
