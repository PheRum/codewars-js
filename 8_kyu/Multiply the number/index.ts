export function multiply(number: number) {
    return number * Math.pow(5, Math.abs(number).toString().length);
}
