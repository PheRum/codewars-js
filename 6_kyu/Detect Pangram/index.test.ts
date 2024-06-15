import { isPangram } from "./index";

describe("Tests", () => {
    it("example", () => {
        expect(isPangram("The quick brown fox jumps over the lazy dog.")).toBe(true);
        expect(isPangram("This is not a pangram.")).toBe(false);
    });
});
