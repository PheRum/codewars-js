import { goals } from './index';

describe('Tests', () => {
    it('goals', () => {
        expect(goals(0, 0, 0)).toBe(0);
        expect(goals(43, 10, 5)).toBe(58);
    });
});
