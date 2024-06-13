export function alternate(
    n: number,
    firstValue: string | boolean,
    secondValue: string | boolean
): (string | boolean)[] {
    let result: any = [];

    if (n === 0) {
        return result;
    }

    for (let i = 1; i <= n; i++) {
        const condition = i % 2 ? firstValue : secondValue;
        result.push(condition);
    }

    return result;
}
