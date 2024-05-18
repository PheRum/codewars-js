export function warnTheSheep(queue: string[]) {
    if (queue[queue.length - 1] === "wolf") {
        return "Pls go away and stop eating my sheep";
    }

    const index = queue.findIndex((n) => n === "wolf");
    return `Oi! Sheep number ${queue.length - index - 1}! You are about to be eaten by a wolf!`;
}
