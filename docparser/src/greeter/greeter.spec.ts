import {Greeter} from "./greeter";

describe("Greeter", () => {
    describe("greet", () => {
        it("returns Hello World", () => {
            // Arrange
            let greeter = new Greeter("World");

            // Act
            let result = greeter.greet();

            // Assert
            expect(result).toEqual("Hello World");
        });
    });
});
