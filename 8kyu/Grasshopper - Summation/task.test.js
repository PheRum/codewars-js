describe('Tests', () => {
    it('should return the correct total', function () {
        expect(summation(1)).toBe(1);
        expect(summation(2)).toBe(3);
        expect(summation(8)).toBe(36);
    });
});
