export function findAverage(array: number[]): number {
    if (array.length) {
        const sum = array.reduce((acc, cur) => acc + cur, 0);

        return sum / array.length;
    }

    return 0;
}
