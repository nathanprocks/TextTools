function reverse(e) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {textTool: 'reverse'});
	});
};

function flip(e) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {textTool: 'flip'});
	});
};

function rainbowBBCode(e) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {textTool: 'rainbowBBCode'});
	});
};

function rainbowHTML(e) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {textTool: 'rainbowHTML'});
	});
};

chrome.contextMenus.create({
	'title': 'Reverse selection',
	'contexts': ['editable'],
	'onclick': reverse
});

chrome.contextMenus.create({
	'title': 'Flip selection',
	'contexts': ['editable'],
	'onclick': flip
});

chrome.contextMenus.create({
	'title': 'Rainbowify - Forum',
	'contexts': ['editable'],
	'onclick': rainbowBBCode
});

chrome.contextMenus.create({
	'title': 'Rainbowify - HTML',
	'contexts': ['editable'],
	'onclick': rainbowHTML
});