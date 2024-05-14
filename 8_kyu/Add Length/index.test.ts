import { addLength } from "./index";

describe("Tests", () => {
    it("addLength", () => {
        expect(addLength("apple ban")).toEqual(["apple 5", "ban 3"]);
        expect(addLength("you will win")).toEqual(["you 3", "will 4", "win 3"]);
    });
});
