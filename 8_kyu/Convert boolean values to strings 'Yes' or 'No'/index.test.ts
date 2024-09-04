import { boolToWord } from './index';

describe('Tests', () => {
    it('boolToWord', () => {
        expect(boolToWord(true)).toBe('Yes');
        expect(boolToWord(false)).toBe('No');
    });
});
