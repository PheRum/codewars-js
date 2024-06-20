export function stairsIn20(stairs: number[][]): number {
    let sum = 0;

    stairs.forEach((stair) => (sum += stair.reduce((acc, cur) => acc + cur, 0)));

    return sum * 20;
}
