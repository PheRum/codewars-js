export function gooseFilter(birds: string[]) {
    const geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];

    return birds.filter((country) => !geese.includes(country));
}
