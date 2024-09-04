import { evenOrOdd } from './index';

describe('Tests', () => {
    it("evenOrOdd(1) should return 'Odd'", function () {
        expect(evenOrOdd(1)).toBe('Odd');
    });
    it("evenOrOdd(2) should return 'Even'", function () {
        expect(evenOrOdd(2)).toBe('Even');
    });
    it("evenOrOdd(-1) should return 'Odd'", function () {
        expect(evenOrOdd(-1)).toBe('Odd');
    });
    it("evenOrOdd(-2) should return 'Even'", function () {
        expect(evenOrOdd(-2)).toBe('Even');
    });
    it("evenOrOdd(0) should return 'Even'", function () {
        expect(evenOrOdd(0)).toBe('Even');
    });
});
