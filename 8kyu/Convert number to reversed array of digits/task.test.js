describe('Tests', () => {
    it('deepEqual', () => {
        expect(digitize(35231)).toEqual([1, 3, 2, 5, 3]);
        expect(digitize(0)).toEqual([0]);
    });
});
