import { cubeChecker } from './index';

describe('Tests', () => {
    it('cubeChecker', () => {
        expect(cubeChecker(56.3, 1)).toBe(false);
        expect(cubeChecker(-1, 2)).toBe(false);
        expect(cubeChecker(8, 3)).toBe(false);
        expect(cubeChecker(8, 2)).toBe(true);
        expect(cubeChecker(-8, -2)).toBe(false);
        expect(cubeChecker(0, 0)).toBe(false);
        expect(cubeChecker(1, 5)).toBe(false);
        expect(cubeChecker(125, 5)).toBe(true);
        expect(cubeChecker(125, -5)).toBe(false);
    });
});
