export function sumOfDifferences(arr: number[]): number {
    arr.sort((a, b) => b - a);

    let sum = 0;

    for (let i = 0; i < arr.length - 1; ++i) {
        sum += arr[i] - arr[i + 1];
    }

    return sum;
}
