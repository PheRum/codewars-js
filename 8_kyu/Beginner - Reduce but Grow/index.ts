export function grow(x: number[]): number {
    return x.reduce((prev, cur) => prev * cur, 1);
}
