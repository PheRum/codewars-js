import { well } from "./index";

describe("Tests", () => {
    it("example", () => {
        expect(well(["bad", "bad", "bad"])).toBe("Fail!");
        expect(well(["good", "bad", "bad", "bad", "bad"])).toBe("Publish!");
        expect(well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"])).toBe("I smell a series!");
    });
});
