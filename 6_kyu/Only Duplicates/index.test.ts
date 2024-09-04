import { onlyDuplicates } from './index';

describe('Tests', () => {
    it('example', () => {
        expect(onlyDuplicates('abccdefee')).toBe('cceee');
        expect(onlyDuplicates('hello')).toBe('ll');
        expect(onlyDuplicates('colloquial')).toBe('ollol');
        expect(onlyDuplicates('foundersandcoders')).toBe('ondersndoders');
    });
});
