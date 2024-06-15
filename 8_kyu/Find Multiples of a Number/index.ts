export function findMultiples(integer: number, limit: number): number[] {
    const numbers: number[] = [];

    for (let i = integer; i <= limit; i += integer) {
        if (i % integer === 0) {
            numbers.push(i);
        }
    }

    return numbers;
}
