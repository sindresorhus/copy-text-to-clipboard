# copy-text-to-clipboard [![Build Status](https://travis-ci.org/sindresorhus/copy-text-to-clipboard.svg?branch=master)](https://travis-ci.org/sindresorhus/copy-text-to-clipboard)

> Copy text to the clipboard in modern browsers *(0.2 kB)*

[Try it out!](https://jsfiddle.net/sindresorhus/6406v3pf/)


## Comparison

- This module: **0.2 kB**
- [`clipboard.js`](https://github.com/zenorocha/clipboard.js): 3.4 kB


## Install

```
$ npm install copy-text-to-clipboard
```


## Usage

```js
const copy = require('copy-text-to-clipboard');

button.addEventListener('click', () => {
	copy('🦄🌈');
});
```


## API

### copy(text, options?)

Copy `text` to the clipboard.

Returns a `boolean` of whether it succeeded to copy the text.

Must be called in response to a user gesture event, like `click` or `keyup`.

### Options

- `target`: Optionally specify a DOM element (`document.body` by default) where the temporary, behind-the-scenes `textarea` should be appended. Specify this in cases where you need to stay within a focus trap, like in a modal.

## Related

- [clipboardy](https://github.com/sindresorhus/clipboardy) - Access the system clipboard (copy/paste) in Node.js
