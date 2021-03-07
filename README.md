# esnode-jest-consumer

This repo demonstrates how to start using Jest using esnode-jest. esnode-jest as the most minimal implementation needed
to connect Jest to esbuild.

Original [esnode-jest](https://github.com/zaydek/esnode-jest) repo here. This repo simply provides a starter example.

## Installation

```sh
npm add --dev @zaydek/esnode-jest

# Or

npm i --save-dev @zaydek/esnode-jest
```

The only other step to get started is created a `.babel.config.js` file at the root of your directory. If you’re curious
why, you can learn more in the [implementation details](#implementation-details) section.

It should look like this:

```js
// babel.config.js
module.exports = require("@zaydek/esnode-jest")
```

If you prefer to write a standard Jest configuration file, you may do so. The file `@zaydek/esnode-jest` references
looks like this, so you may use this instead or customize for your use case.

<!-- prettier-ignore -->
```js
// https://jestjs.io/docs/en/getting-started#using-typescript
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
}
```

Then create a TypeScript and TypeScript test file to start:

```ts
// greet.ts
export default function greet(who: string): string {
	return `Hello, ${who}!`
}
```

```ts
// greet.test.ts
import greet from "./greet"

test("", () => {
	expect(greet("world")).toBe("Hello, world!")
})
```

Then on the command-line, run `./node_modules/.bin/jest` and you should see your test run and pass.

## Implementation details

How this works: files are transpiled on demand by esbuild but Jest uses Babel internally for the test files. So your
source files (e.g. `source.ts`) are transformed by esbuild whereas your test files (e.g. `source.test.ts`) are
transformed by Babel. From what I understand, Babel is essential for `.test.ts` files but that’s it.
