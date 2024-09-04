import { bmi } from './index';

describe('Tests', () => {
    it('example', () => {
        expect(bmi(80, 1.8)).toBe('Normal');
    });
});
