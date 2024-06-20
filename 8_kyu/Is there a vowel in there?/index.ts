export function isVow(numbers: number[]): (string | number)[] {
    return numbers.map((x) => (/[aeiou]/.test(String.fromCharCode(x)) ? String.fromCharCode(x) : x));
}
