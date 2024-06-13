export function solution(start: number, finish: number): number {
    const diff = finish - start;

    return Math.floor(diff / 3) + (diff % 3);
}
