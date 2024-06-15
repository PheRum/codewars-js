export function countSheeps(arrayOfSheep: (boolean | null | undefined)[]): number {
    return arrayOfSheep.filter(Boolean).length;
}
