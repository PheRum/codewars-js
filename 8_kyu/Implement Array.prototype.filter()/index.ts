Array.prototype.filter = function (func: Function) {
    const filtered = [];

    for (let i = 0; i < this.length; i++) {
        if (func(this[i])) {
            filtered.push(this[i]);
        }
    }

    return filtered;
};
