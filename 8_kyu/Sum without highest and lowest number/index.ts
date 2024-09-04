export function sumArray(values: number[] | null): number {
    if (!values?.length) {
        return 0;
    }

    const maxIndex = values.indexOf(Math.max(...values));
    const minIndex = values.indexOf(Math.min(...values));

    const result = values.filter((_, index) => ![maxIndex, minIndex].includes(index)).reduce((acc, cur) => acc + cur, 0);

    return result ? result : 0;
}
