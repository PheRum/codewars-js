export function countPositivesSumNegatives(input: number[]): number[] {
    let positive = 0;
    let negative: number[] = [];

    if (!input) {
        return [];
    }

    input.forEach((item) => {
        if (item > 0) {
            positive++;
        }

        if (item < 0) {
            negative.push(item);
        }
    });

    const result = [positive, negative.reduce((acc, cur) => acc + cur, 0)];

    return result[0] + result[1] ? result : [];
}
