describe('Tests', () => {
    it('sum', () => {
        expect(sum([])).toBe(0);
        expect(sum([1, 5.2, 4, 0, -1])).toBe(9.2);
    });
});
