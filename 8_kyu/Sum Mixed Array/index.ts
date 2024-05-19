export function sumMix(x: (string | number)[]): number {
    return x.map((el) => Number(el)).reduce((acc, cur) => acc + cur, 0);
}
