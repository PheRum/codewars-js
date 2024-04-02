import { opposite } from "./index";

describe('Tests', () => {
    it('should return -1', () => {
        expect(opposite(1)).toBe(-1);
    });
    it('should return 0', () => {
        expect(opposite(0)).toBe(0);
    });
    it('should return -4.25', () => {
        expect(opposite(4.25)).toBe(-4.25);
    });
    it('should return -3.3333333', () => {
        expect(opposite(3.3333333)).toBe(-3.3333333);
    });
    it('should return 12525220.3325', () => {
        expect(opposite(-12525220.3325)).toBe(12525220.3325);
    });
    it('should return 5', () => {
        expect(opposite(-5)).toBe(5);
    });
});
