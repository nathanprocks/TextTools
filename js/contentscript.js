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