export function toCsvText(array: number[][]): string {
    const output: string[] = [];

    for (let sub of array) {
        output.push(sub.join(","));
    }

    return output.join("\n");
}
