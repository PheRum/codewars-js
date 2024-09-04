export function digitize(n: number) {
    return String(n)
        .split('')
        .reverse()
        .map((num) => Number(num));
}
