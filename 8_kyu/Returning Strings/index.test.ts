import { greet } from './index';

describe('Tests', () => {
    it('Testing for fixed tests', () => {
        expect(greet('Ryan')).toBe('Hello, Ryan how are you doing today?');
        expect(greet('Shingles')).toBe('Hello, Shingles how are you doing today?');
    });
});
