declare const copyTextToClipboard: {
	/**
	Copy text to the clipboard.

	Must be called in response to a user gesture event, like `click` or `keyup`.

	@param text - The text to copy to clipboard.
	@returns Whether it succeeded to copy the text.

	@example
	```
	import copy = require('copy-text-to-clipboard');

	button.addEventListener('click', () => {
		copy('🦄🌈');
	});
	```
	*/
	(text: string): boolean;

	// TODO: Remove this for the next major release, refactor the whole definition to:
	// declare function copyTextToClipboard(text: string): boolean;
	// export = copyTextToClipboard;
	default: typeof copyTextToClipboard;
};

export = copyTextToClipboard;
