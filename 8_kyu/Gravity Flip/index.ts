export function flip(d: string, a: number[]): number[] {
    // @ts-ignore
    return a.sort((first, second) => {
        if (d === 'R') {
            return first - second;
        }
        if (d === 'L') {
            return second - first;
        }
    });
}
