type WellType = 'good' | 'bad';

export function well(x: WellType[]) {
    const good = x.filter((n) => n === 'good').length;

    if (good && good <= 2) {
        return 'Publish!';
    }
    if (good > 2) {
        return 'I smell a series!';
    }
    return 'Fail!';
}
