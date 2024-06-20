export function onlyDuplicates(str: string): string {
    const array: string[] = str.split("");
    const hashTable: { [key: string]: number } = {};

    array.forEach((item) => {
        if (hashTable[item]) {
            hashTable[item]++;
        } else {
            hashTable[item] = 1;
        }
    });

    const dublicates = array.filter((item) => hashTable[item] > 1);

    return dublicates.join("");
}
