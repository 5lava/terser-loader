<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]
[![size][size]][size-url]

# terser-loader

Terser loader for webpack

## Getting Started

To begin, you'll need to install `terser-loader`:

* Using yarn:
```console
yarn add --dev terser-loader
```
* Using npm:
```console
npm install terser-loader --save-dev
```

Then add the loader to your `webpack` config. For example:

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /.js$/,
        use: ['file-loader', 'terser-loader'],
      },
    ],
  },
};
```

Another example:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /.js$/,
        use: [
          {
            loader: 'file-loader',
          },
          {
            loader: 'terser-loader',
            options: {
              stripTrailingSemicolon: true,
              terserOptions: {
                minify: {
                  mangle: false,
                },
                output: {
                  inline_script: true,
                },
              },
            },
          },
        ],
      },
    ],
  },
};
```


## Options

### `terserOptions`

Optional, type: `object`, default: `{}`

See [Terser API Reference](https://github.com/terser/terser#api-reference) for details. `terserOptions` as passed to Terser API as is.

### `stripTrailingSemicolon`

Optional, type: `boolean`, default: `false`

By default, terser'ed output ends with `;`. It's generally a good idea if you plan on concatenating produced scripts into a bundle at a later stage. Otherwise, you can safely remove `;` by setting `stripTrailingSemicolon` to `true` and save yet another byte.  


## License

[MIT](./LICENSE)

[npm]: https://img.shields.io/npm/v/terser-loader.svg
[npm-url]: https://npmjs.com/package/terser-loader
[node]: https://img.shields.io/node/v/terser-loader.svg
[node-url]: https://nodejs.org
[deps]: https://david-dm.org/webpack-contrib/terser-loader.svg
[deps-url]: https://david-dm.org/webpack-contrib/terser-loader
[size]: https://packagephobia.now.sh/badge?p=terser-loader
[size-url]: https://packagephobia.now.sh/result?p=terser-loader
