export function combat(health: number, damage: number): number {
    const result = health - damage;

    return result > 0 ? result : 0;
}
