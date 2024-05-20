import { firstNonConsecutive } from "./index";

describe("Tests", () => {
    it("a simple example", function () {
        const first = firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]);
        expect(first).toBe(6);
    });

    it("all sequential", function () {
        const first = firstNonConsecutive([1, 2, 3, 4]);
        expect(first).toBe(null);
    });
});
