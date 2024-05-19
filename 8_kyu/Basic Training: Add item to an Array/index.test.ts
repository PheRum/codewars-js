import { websites } from "./index";

describe("Tests", () => {
    it('Should contain "codewars"', () => {
        expect(websites[0]).toBe("codewars");
    });
    it("Should only contain 1 item", () => {
        expect(websites.length).toBe(1);
    });
});
