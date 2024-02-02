describe('Tests', () => {
    it('example', () => {
        expect(updateLight("green")).toBe("yellow");
        expect(updateLight("yellow")).toBe("red");
        expect(updateLight("red")).toBe("green");
    });
});
