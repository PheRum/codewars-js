import { hexHash } from "./index";

describe("Tests", () => {
    it("Yo", function () {
        expect(hexHash("Yo")).toBe(20);
    });
    it("Hello, World!", function () {
        expect(hexHash("Hello, World!")).toBe(91);
    });
    it("Forty4Three", function () {
        expect(hexHash("Forty4Three")).toBe(113);
    });
});
