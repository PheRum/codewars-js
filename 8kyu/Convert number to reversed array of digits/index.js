function digitize(n) {
    return String(n).split('').reverse().map(num => Number(num));
}
