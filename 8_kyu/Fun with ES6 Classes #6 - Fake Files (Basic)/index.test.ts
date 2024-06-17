import File from "./index";

describe("Tests", () => {
    it("should work for the example provided by the Kata author", function () {
        const example = new File("example.txt", "An example file");
        expect(example.fullName).toBe("example.txt");
        expect(example.filename).toBe("example");
        expect(example.extension).toBe("txt");
        example.fullName = "modified.txt";

        expect(example.fullName).not.toBe("modified.txt");
        expect(example.fullName).toBe("example.txt");
        example.filename = "hacked";

        expect(example.filename).not.toBe("hacked");
        expect(example.filename).toBe("example");
        example.extension = "locky";

        expect(example.extension).not.toBe("locky");
        expect(example.extension).toBe("txt");
        expect(example.getContents()).toBe("An example file");
        example.write("Hello World");
        expect(example.getContents()).toBe("An example file\nHello World");
        example.write("This is an example file provided to you by the Kata author");
        expect(example.getContents()).toBe(
            "An example file\nHello World\nThis is an example file provided to you by the Kata author"
        );
        example.write("This example file is used as an example test case.");
        expect(example.getContents()).toBe(
            "An example file\nHello World\nThis is an example file provided to you by the Kata author\nThis example file is used as an example test case."
        );
        expect(example.gets()).toBe("An example file");
        expect(example.gets()).toBe("Hello World");
        expect(example.gets()).toBe("This is an example file provided to you by the Kata author");
        expect(example.gets()).toBe("This example file is used as an example test case.");
        expect(example.gets()).toBe(undefined);
        expect(example.gets()).toBe(undefined);
        expect(example.gets()).toBe(undefined);
        expect(example.getc()).toBe("A");
        expect(example.getc()).toBe("n");
        expect(example.getc()).toBe(" ");
        expect(example.getc()).toBe("e");
        expect(example.getc()).toBe("x");
        expect(example.getc()).toBe("a");
        expect(example.getc()).toBe("m");
        expect(example.getc()).toBe("p");
        expect(example.getc()).toBe("l");
        expect(example.getc()).toBe("e");
        for (let i = 0; i < 1000; i++) {
            example.getc();
        }
        expect(example.getc()).toBe(undefined);
        expect(example.getc()).toBe(undefined);
        expect(example.getc()).toBe(undefined);
    });
});
