import { isReallyNaN } from './index';

describe('Tests', () => {
    it('example', () => {
        expect(isReallyNaN(37)).toBe(false);
        expect(isReallyNaN('37')).toBe(false);
        expect(isReallyNaN(NaN)).toBe(true);
        expect(isReallyNaN(undefined)).toBe(false);
    });
});
