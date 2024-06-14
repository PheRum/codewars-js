export function reverseSeq(n: number): number[] {
    let numbers = [];

    while (n > 0) {
        numbers.push(n);
        n--;
    }

    return numbers;
}
