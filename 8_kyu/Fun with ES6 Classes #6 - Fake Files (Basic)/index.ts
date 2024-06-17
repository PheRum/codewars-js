class File {
    _fullName: string;
    _contents: string;
    _readLines: string[];
    _readIndex: number;
    _charIndex: number;

    constructor(fullName: string, contents: string) {
        this._fullName = fullName;
        this._contents = contents;
        this._readLines = contents.split("\n");
        this._readIndex = 0;
        this._charIndex = 0;
    }

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        // Do nothing, name cannot be changed
    }

    get filename(): string {
        return this._fullName.split(".").slice(0, -1).join(".");
    }

    set filename(newName: string) {
        // Do nothing, name cannot be changed
    }

    get extension(): string {
        const array = this._fullName.split(".");
        return array[array.length - 1];
    }

    set extension(newExt: string) {
        // Do nothing, extension cannot be changed
    }

    getContents(): string {
        return this._contents;
    }

    write(data: string): void {
        if (this._contents) {
            this._contents += `\n${data}`;
        } else {
            this._contents = data;
        }
        this._readLines = this._contents.split("\n");
    }

    gets(): string | undefined {
        if (this._readIndex < this._readLines.length) {
            return this._readLines[this._readIndex++];
        }
        return undefined;
    }

    getc(): string | undefined {
        if (this._charIndex < this._contents.length) {
            return this._contents[this._charIndex++];
        }
        return undefined;
    }
}

export default File;
