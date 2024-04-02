export function updateLight(current: string) {
    let color;

    switch (current) {
    case 'green':
        color = 'yellow';
        break;

    case 'yellow':
        color = 'red';
        break;

    case 'red':
        color = 'green';
        break;
    }

    return color;
}
