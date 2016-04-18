function replaceSelection(replaceText) {
	var input = $(document.activeElement);
	if ((input.is('input') && input.attr('type') == 'text') || input.is('textarea')) {
		//input.val(input.val().substring(0, input.selectionStart) + replaceText + input.val().substring(input.selectionEnd));
		input.selection('replace', {text: replaceText});
	}
}
function replaceScratch(replaceText) {
	var input = $(document.forms['post']['body']);
	if ((input.is('input') && input.attr('type') == 'text') || input.is('textarea')) {
		//input.val(input.val().substring(0, input.selectionStart) + replaceText + input.val().substring(input.selectionEnd));
		input.selection('replace', {text: replaceText});
	}
}
if(window.location.href.substring(0, 30) == "http://scratch.mit.edu/discuss") {
//$(".markItUpContainer .markItUpHeader > ul").append('<li class="markItUpSeparator">---------------</li><li class="markItUpButton markItUpDropMenu markItUpTextTools"><a href="" title="TextTools - WIP">TextTools - WIP</a><ul><li class="markItUpButton"><a href="" title="Rainbow" class="markItUpRainbow">Rainbow - BBCode</a></li><li class="markItUpButton"><a href="#" title="Flipped" class="markItUpFlip">Flipped</a></li><li class="markItUpButton"><a href="#" title="Reversed" class="markItUpReverse">Reversed</a></li></ul></li>');
//$(".markItUpTextTools > a").css("background-image", "url(" + chrome.extension.getURL("icons/icon_16.png") + ")");
//$(".markItUpRainbow").css("background-image", "url(" + chrome.extension.getURL("icons/icon_rainbow.png") + ")");
//$(".markItUpFlip").css("background-image", "url(" + chrome.extension.getURL("icons/icon_flip.png") + ")");
//$(".markItUpReverse").css("background-image", "url(" + chrome.extension.getURL("icons/icon_reverse.png") + ")");
//$(".markItUpTextTools > a").click(function(e) {
//    e.preventDefault();
//});
//$(".markItUpRainbow").click(function(e) {
//    e.preventDefault();
//    var textarea = document.forms['post']['body'];
//    replaceScratch(rainbowBBCode($(textarea).selection()));
//});
//$(".markItUpFlip").click();
//$(".markItUpReverse").click();
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
			case 'bubble':
				replaceSelection(bubble($(document.activeElement).selection()));
				break;
		}
	});
