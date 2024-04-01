import { max, min } from "./index";

describe('Tests', () => {
    it('min', () => {
        expect(min([-52, 56, 30, 29, -54, 0, -110])).toBe(-110);
        expect(min([42, 54, 65, 87, 0])).toBe(0);
    });

    it('max', () => {
        expect(max([4, 6, 2, 1, 9, 63, -134, 566])).toBe(566);
        expect(max([5])).toBe(5);
    });
});
