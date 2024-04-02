import { feast } from "./index";

describe('Tests', () => {
    it('feast', () => {
        expect(feast("great blue heron", "garlic naan")).toBe(true);
        expect(feast("chickadee", "chocolate cake")).toBe(true);
        expect(feast("brown bear", "bear claw")).toBe(false);
    });
});
