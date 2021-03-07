import greet from "./greet"

test("", () => {
	expect(greet("world")).toBe("Hello, world!")
})
