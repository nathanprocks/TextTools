function replaceSelection(replaceText) {
	var input = $(document.activeElement);
	if ((input.is('input') && input.attr('type') == 'text') || input.is('textarea')) {
		//input.val(input.val().substring(0, input.selectionStart) + replaceText + input.val().substring(input.selectionEnd));
		input.selection('replace', {text: replaceText});
	}
}
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		switch (request.textTool) {
			case 'reverse':
				replaceSelection(reverse($(document.activeElement).selection()));
				break;
			case 'flip':
				replaceSelection(flip($(document.activeElement).selection()));
				break;
			case 'rainbowBBCode':
				replaceSelection(rainbowBBCode($(document.activeElement).selection()));
				break;
			case 'rainbowHTML':
				replaceSelection(rainbowHTML($(document.activeElement).selection()));
				break;
		}
	});