/*
 *	This section is from
 *	http://rainbowcoding.com/how-to-create-rainbow-text-in-html-css-javascript/
 */
function color_from_hue(hue) {
	var h = hue/60;
	var c = 255;
	var x = (1 - Math.abs(h%2 - 1))*255;
	var color;

	var i = Math.floor(h);
	if (i == 0) color = rgb_to_hex(c, x, 0);
	else if (i == 1) color = rgb_to_hex(x, c, 0);
	else if (i == 2) color = rgb_to_hex(0, c, x);
	else if (i == 3) color = rgb_to_hex(0, x, c);
	else if (i == 4) color = rgb_to_hex(x, 0, c);
	else color = rgb_to_hex(c, 0, x);

	return color;
}
 
function rgb_to_hex(red, green, blue)
{
  var h = ((red << 16) | (green << 8) | (blue)).toString(16);
  // add the beginning zeros
  while (h.length < 6) h = '0' + h;
  return '#' + h;
}
/*
 *	End of section
 */

function reverse(text) {
	return Array.from(text).reverse().join('');
}

function flip(text) {
	return Array.from(text).map(function(c){return getFlipped(c)}).reverse().join('');
}

function rainbow(text) {
	if ($('[name=codetype]:checked').val() == 'HTML')
		return rainbowHTML(text);
	else
		return rainbowBBCode(text);
}

function bubble(text) {
	return Array.from(text).map(function(c){return getBubble(c)}).join('');
}

function rainbowHTML(text) {
	/*
	 *	This section is based on
	 *	http://rainbowcoding.com/how-to-create-rainbow-text-in-html-css-javascript/
	 */
	var originaltext = text;
	var rainbowtext = '';
	var hue=0;
	var step=0;

	// hue is 360 degrees
	if (originaltext.length > 0)
		step = 360 / (originaltext.length);

	// iterate the whole 360 degrees
	for (var i = 0; i < originaltext.length; i++)
	{
		rainbowtext = rainbowtext + '<span style="color:' + color_from_hue(hue) + '">' + originaltext.charAt(i) + '</span>';
		hue += step;
	}
	/*
	 *	End of section
	 */

	return rainbowtext;
}

function rainbowBBCode(text) { 
	/*
	 *	This section is based on
	 *	http://rainbowcoding.com/how-to-create-rainbow-text-in-html-css-javascript/
	 */
	var originaltext = text;
	var rainbowtext = '';
	var hue=0;
	var step=0;

	// hue is 360 degrees
	if (originaltext.length > 0)
		step = 360 / (originaltext.length);

	// iterate the whole 360 degrees
	for (var i = 0; i < originaltext.length; i++)
	{
		rainbowtext = rainbowtext + '[color=' + color_from_hue(hue) + ']' + originaltext.charAt(i) + '[/color]';
		hue += step;
	}
	/*
	 *	End of section
	 */

	return rainbowtext;
}

$(document).ready(function(){
	$('#text-normal').keyup(function() {
		switch (window.location.pathname) {
			case '/tools/reverse.html':
				$('#text-reversed').val(reverse($('#text-normal').val()));
				break;
			case '/tools/flip.html':
				$('#text-flipped').val(flip($('#text-normal').val()));
				break;
			case '/tools/rainbow.html':
				$('.rainbowview').html(rainbowHTML($('#text-normal').val()));
				$('#text-rainbow').val(rainbow($('#text-normal').val()));
				break;
			case '/tools/bubble.html':
				$('#text-bubble').val(bubble($('#text-normal').val()));
				break;
		}
	});

	$('[name=codetype]').click(function() {
		$('#text-rainbow').val(rainbow($('#text-normal').val()));
	});

	$('#switchbutton').click(function() {
		var text = $('#text-normal').val();
		switch (window.location.pathname) {
			case '/tools/reverse.html':
				$('#text-normal').val($('#text-reversed').val());
				$('#text-reversed').val(text);
				break;
			case '/tools/flip.html':
				$('#text-normal').val($('#text-flipped').val());
				$('#text-flipped').val(text);
				break;
		}
	});

	$('#copybutton').click(function() {
		switch (window.location.pathname) {
			case '/tools/reverse.html':
				$('#text-reversed').select();
				break;
			case '/tools/flip.html':
				$('#text-flipped').select();
				break;
			case '/tools/rainbow.html':
				$('#text-rainbow').select();
				break;
			case '/tools/bubble.html':
				$('#text-bubble').select();
				break;
		}
		document.execCommand('Copy');
	});

	$('#clearbutton').click(function() {
		$('textarea').val('');
		$('.rainbowview').html('');
	});
});