function resize(width, height, speed, callback) {
	$('html').animate({'width': width, 'height': height}, speed, callback);
}