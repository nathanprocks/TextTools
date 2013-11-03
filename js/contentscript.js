function replaceSelection(replaceText) {
	var input = $(document.activeElement);
	if ((input.is('input') && input.attr('type') == 'text') || input.is('textarea')) {
		//input.val(input.val().substring(0, input.selectionStart) + replaceText + input.val().substring(input.selectionEnd));
		input.selection('replace', {text: replaceText});
	}
}
if(window.location.href.substring(0, 30) == "http://scratch.mit.edu/discuss") {
$(".markItUpContainer .markItUpHeader > ul").append('<li class="markItUpSeparator">---------------</li><li class="markItUpButton markItUpDropMenu markItUpTextTools"><a href="#" title="TextTools - WIP">TextTools - WIP</a><ul><li class="markItUpButton"><a href="#" title="Rainbow">Rainbow - BBCode</a></li><li class="markItUpButton"><a href="#" title="Flipped">Flipped</a></li><li class="markItUpButton"><a href="#" title="Reversed">Reversed</a></li></ul></li>');
$(".markItUpTextTools a").css("background-image", "url(" + chrome.extension.getURL("icon_16.png") + ")");
//Uncomment above to add button to scratch forum post editor. WIP - will add more later
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
