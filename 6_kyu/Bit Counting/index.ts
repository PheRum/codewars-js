export function countBits(n: number): number {
    const numbers = n
        .toString(2)
        .split('')
        .filter((n) => n === '1');

    return numbers.length;
}
