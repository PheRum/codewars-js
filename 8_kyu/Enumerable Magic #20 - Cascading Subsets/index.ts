export function eachCons(arr: number[], n: number): number[][] {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        res.push(arr.slice(i, i + n));
    }

    return res.filter((e) => e.length === n);
}
