import { DNAtoRNA } from './index';

describe('Tests', () => {
    it('example', () => {
        expect(DNAtoRNA('TTTT')).toBe('UUUU');
        expect(DNAtoRNA('GCAT')).toBe('GCAU');
        expect(DNAtoRNA('GACCGCCGCC')).toBe('GACCGCCGCC');
    });
});
