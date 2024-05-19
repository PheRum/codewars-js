export function findAverage(nums: number[]): number {
    const sum = nums.reduce((acc, cur) => acc + cur, 0);

    return sum / nums.length;
}
