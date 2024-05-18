export function persistence(num: number): number {
    let i = 0;
    while (num.toString().length !== 1) {
        num = num
            .toString()
            .split("")
            .map((l) => +l)
            .reduce((a, b) => a * b);
        i++;
    }
    return i;
}
