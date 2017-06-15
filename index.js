'use strict';
module.exports = input => {
	const el = document.createElement('textarea');

	el.value = input;

	// Prevent keyboard from showing on mobile
	el.setAttribute('readonly', '');

	el.style.contain = 'strict';
	el.style.position = 'absolute';
	el.style.left = '-9999px';
	el.style.fontSize = '12pt'; // Prevent zooming on iOS

	const selection = getSelection();
	const originalRange = selection.getRangeAt(0);

	document.body.appendChild(el);
	el.select();

	let success = false;
	try {
		success = document.execCommand('copy');
	} catch (err) {}

	document.body.removeChild(el);

	selection.removeAllRanges();
	selection.addRange(originalRange);

	return success;
};
