# jest-practice

a simple npm example using jest for testing

https://jestjs.io/docs/getting-started

```bash
$ yarn add --dev jest babel-jest @babel/core @babel/preset-env
```

```bash
// babel.config.js
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

## Run esm using babel

```bash
$ yarn add --dev babel-node
```

```bash
$ npx babel-node --presets @babel/preset-env ${filename}
```
