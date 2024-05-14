export function powersOfTwo(n: number): number[] {
    const result: number[] = [];
    let i = 0;

    while (i <= n) {
        result.push(Math.pow(2, i));
        i++;
    }

    return result;
}
