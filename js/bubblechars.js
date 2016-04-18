var bubbleChars = new Array(
		// Lower case
		'a', 'ⓐ',
		'b', 'ⓑ',
		'c', 'ⓒ',
		'd', 'ⓓ',
		'e', 'ⓔ',
		'f', 'ⓕ',
		'g', 'ⓖ',
		'h', 'ⓗ',
		'i', 'ⓘ',
		'j', 'ⓙ',
		'k', 'ⓚ',
		'l', 'ⓛ',
		'm', 'ⓜ',
		'n', 'ⓝ',
		'o', 'ⓞ',
		'p', 'ⓟ',
		'q', 'ⓠ',
		'r', 'ⓡ',
		's', 'ⓢ',
		't', 'ⓣ',
		'u', 'ⓤ',
		'v', 'ⓥ',
		'w', 'ⓦ',
		'x', 'ⓧ',
		'y', 'ⓨ',
		'z', 'ⓩ',

		// Upper case
		'A', 'Ⓐ',
		'B', 'Ⓑ',
		'C', 'Ⓒ',
		'D', 'Ⓓ',
		'E', 'Ⓔ',
		'F', 'Ⓕ',
		'G', 'Ⓖ',
		'H', 'Ⓗ',
		'I', 'Ⓘ',
		'J', 'Ⓙ',
		'K', 'Ⓚ',
		'L', 'Ⓛ',
		'M', 'Ⓜ',
		'N', 'Ⓝ',
		'O', 'Ⓞ',
		'P', 'Ⓟ',
		'Q', 'Ⓠ',
		'R', 'Ⓡ',
		'S', 'Ⓢ',
		'T', 'Ⓣ',
		'U', 'Ⓤ',
		'V', 'Ⓥ',
		'W', 'Ⓦ',
		'X', 'Ⓧ',
		'Y', 'Ⓨ',
		'Z', 'Ⓩ'
	);

window.getBubble = function(chr) {
	var i = bubbleChars.indexOf(chr);
	if (i == -1 || i % 2 == 1) {
		return chr;
	}
	return bubbleChars[i+1];
}