export function minMinMax(array: number[]): number[] {
    const range = (start: number, end: number) => new Array(end - start + 1).fill(undefined).map((_, i) => i + start);

    const smallest = Math.min(...array);
    const largest = Math.max(...array);

    const minimumArr = range(smallest, largest).filter((n) => ![...array, smallest, largest].includes(n));

    const minimumAbsent = Math.min(...minimumArr);

    return [smallest, minimumAbsent, largest];
}
