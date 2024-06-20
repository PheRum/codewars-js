import { howMuchILoveYou } from "./index";

describe("Tests", () => {
    it("example", () => {
        expect(howMuchILoveYou(7)).toBe("I love you");
        expect(howMuchILoveYou(3)).toBe("a lot");
        expect(howMuchILoveYou(6)).toBe("not at all");
    });
});
