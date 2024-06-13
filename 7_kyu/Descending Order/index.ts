export function descendingOrder(n: number): number {
    const numbers = String(n)
        .split("")
        .map((n) => +n)
        .sort((a, b) => b - a);

    return parseInt(numbers.join(""));
}
