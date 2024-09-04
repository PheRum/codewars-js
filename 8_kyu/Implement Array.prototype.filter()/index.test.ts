import './index';

describe('Tests', () => {
    it('Array.prototype.filter', () => {
        expect([1, 2, 3, 4].filter((num) => num > 3)).toEqual([4]);
    });
});
