import { grow } from './index';

describe('Tests', () => {
    it('example', () => {
        expect(grow([1, 2, 3])).toBe(6);
        expect(grow([4, 1, 1, 1, 4])).toBe(16);
        expect(grow([2, 2, 2, 2, 2, 2])).toBe(64);
    });
});
