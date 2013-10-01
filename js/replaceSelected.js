function replaceSelection(replaceText) {
	var input = $(document.activeElement);
	if ((input.is('input') && input.attr('type') == 'text') || input.is('textarea')) {
		//input.val(input.val().substring(0, input.selectionStart) + replaceText + input.val().substring(input.selectionEnd));
		input.selection('replace', {text: replaceText});
	}
}