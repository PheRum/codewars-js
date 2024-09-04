export function uniqueInOrder(iterable: string | (string | number)[]): (string | number)[] {
    const items = typeof iterable === 'object' ? iterable : iterable.split('');

    return items.filter((_, index, array) => array[index] !== array[index + 1]);
}
