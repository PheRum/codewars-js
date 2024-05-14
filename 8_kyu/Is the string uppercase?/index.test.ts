interface String {
    isUpperCase(): boolean;
}

String.prototype.isUpperCase = function () {
    return this.toString() === this.toUpperCase();
};

describe("Tests", () => {
    it("example", () => {
        expect("c".isUpperCase()).toBe(false);
        expect("C".isUpperCase()).toBe(true);
        expect("hello I AM DONALD".isUpperCase()).toBe(false);
        expect("HELLO I AM DONALD".isUpperCase()).toBe(true);
        expect("ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase()).toBe(false);
        expect("ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase()).toBe(true);
    });
});
