export function multipleOfIndex(array: number[]): number[] {
    const numbers: number[] = [];

    array.forEach((num, index) => {
        if (num % index === 0 || num === 0) {
            numbers.push(num);
        }
    });

    return numbers;
}
