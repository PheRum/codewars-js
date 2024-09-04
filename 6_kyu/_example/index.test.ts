import { example } from './index';

describe('Tests', () => {
    it('example', () => {
        expect(example(1, 1)).toBe(2);
        expect(example(1, 1)).toEqual(2);
    });
});
