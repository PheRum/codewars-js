export function feast(beast: string, dish: string) {
    return beast.charAt(0) + beast.charAt(beast.length - 1) === dish.charAt(0) + dish.charAt(dish.length - 1);
}
