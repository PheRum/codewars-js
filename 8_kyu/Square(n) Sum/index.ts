export function squareSum(numbers: number[]): number {
    return numbers.reduce((a, b) => a + Math.pow(b, 2), 0);
}
