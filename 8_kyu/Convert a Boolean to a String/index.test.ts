import { booleanToString } from './index';

describe('Tests', () => {
    it('When we pass in true, we want the string "true" as output', () => {
        expect(booleanToString(true)).toBe('true');
    });

    it('When we pass in false, we want the string "false" as output', () => {
        expect(booleanToString(false)).toBe('false');
    });
});
