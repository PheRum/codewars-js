describe('Tests', () => {
    it('updateLight', () => {
        expect(updateLight("green")).toBe("yellow");
        expect(updateLight("yellow")).toBe("red");
        expect(updateLight("red")).toBe("green");
    });
});
