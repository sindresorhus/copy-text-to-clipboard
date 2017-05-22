'use strict';
module.exports = input => {
	let success = false;

  //check for support (http://caniuse.com/#feat=document-execcommand)
	if (document.execCommand) {
		const el = document.createElement('textarea');

		el.value = input;

		// Prevent keyboard from showing on mobile
		el.setAttribute('readonly', '');

		el.style.contain = 'strict';
		el.style.all = 'unset';
		el.style.position = 'absolute';
		el.style.left = '-9999px';
		el.style.fontSize = '12pt'; // Prevent zooming on iOS

		document.body.appendChild(el);
		el.select();

		try {
			success = document.execCommand('copy');
		} catch (err) {}

		document.body.removeChild(el);
	}

	return success;
};
