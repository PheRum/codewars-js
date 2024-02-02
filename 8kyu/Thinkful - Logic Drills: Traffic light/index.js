function updateLight(current) {
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
