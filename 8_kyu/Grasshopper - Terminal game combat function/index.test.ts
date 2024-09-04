import { combat } from './index';

describe('Tests', () => {
    it('combat', () => {
        expect(combat(100, 5)).toBe(95);
        expect(combat(92, 8)).toBe(84);
        expect(combat(20, 30)).toBe(0);
    });
});
