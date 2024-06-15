export function canEscape(walls: number[][]): boolean {
    for (let i = 0; i < walls.length; i++) {
        if (Math.min(...walls[i]) - i < 2) {
            return false;
        }
    }

    return true;
}
