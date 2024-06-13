export function removeSmallest(numbers: number[]): number[] {
    const min = Math.min(...numbers);
    const idx = numbers.findIndex((n) => n === min);

    return numbers.filter((n, i) => i !== idx);
}
