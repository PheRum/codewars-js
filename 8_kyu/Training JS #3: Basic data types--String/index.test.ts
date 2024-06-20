import { Dad, Bee, banana } from "./index";

describe("Tests", () => {
    it("example", () => {
        expect(Dad()).toBe("Dad");
        expect(Bee()).toBe("Bee");
        expect(banana()).toBe("banana");
    });
});
