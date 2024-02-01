function positiveSum(arr) {
    return arr.filter(n => n > 0).reduce((prev, cur) => prev + cur, 0);
}
