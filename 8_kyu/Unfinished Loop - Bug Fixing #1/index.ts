export function createArray(number: number): number[] {
    let newArray = [];

    for (let counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }

    return newArray;
}
