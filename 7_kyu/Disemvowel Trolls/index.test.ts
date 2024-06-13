import { disemvowel } from "./index";

describe("Tests", () => {
    it("example", () => {
        expect(disemvowel("This website is for losers LOL!")).toBe("Ths wbst s fr lsrs LL!");
        expect(disemvowel("No offense but,\nYour writing is among the worst I've ever read")).toBe(
            "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
        );
        expect(disemvowel("What are you, a communist?")).toBe("Wht r y,  cmmnst?");
    });
});
