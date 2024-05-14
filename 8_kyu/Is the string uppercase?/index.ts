interface String {
    isUpperCase(): boolean;
}

String.prototype.isUpperCase = function () {
    return this.toString() === this.toUpperCase();
};
