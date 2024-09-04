import { consonantCount } from './index';

describe('Tests', () => {
    function dotest(input: string, expected: number) {
        let actual = consonantCount(input);
        expect(actual).toBe(expected);
    }

    it('Empty string', () => {
        dotest('', 0);
    });

    it('Only vowels', () => {
        dotest('aeiouAEIOU', 0);
        dotest('aaa', 0);
    });

    it('Only consonants', () => {
        dotest('bcdfghjklmnpqrstvwxyz', 21);
        dotest('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ', 42);
    });

    it("Test with 'Y'", () => {
        dotest('y', 1);
        dotest('Y', 1);
    });

    it('Regex \\w trap', () => {
        dotest('01234567890_', 0);
    });

    it('Special characters', () => {
        dotest(' ^&$#', 0);
    });

    it('Full  alphabet', () => {
        dotest('aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#', 42);
    });
});
