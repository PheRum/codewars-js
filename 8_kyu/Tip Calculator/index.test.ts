import { calculateTip } from './index';

describe('Tests', () => {
    it('calculateTip', () => {
        expect(calculateTip(20, 'Excellent')).toBe(4);
        expect(calculateTip(26.95, 'good')).toBe(3);
    });
});
