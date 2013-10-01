$(document).ready(function(){
    $('body').fadeIn('fast');

    // Back to menu
    $('#backbutton').click(function() {
        $('body').fadeOut(50);
        resize(250, 160, 500, function(){window.location = '../popup.html';});
    });

    // Menu item click
    $('.menuitem').click(function() {
        $('body').fadeOut(50);
    });

	// Backwards Text
	$('#item-one').hover(function() {
		$('#item-one').html('txeT esreveR');
        $('#item-one').css('color', 'black');
    },
    function() {
		$('#item-one').html('Reverse Text');
        $('#item-one').css('color', 'grey');
    }).click(function() {
        resize(250, 275, 500, function(){window.location = 'tools/reverse.html';});
    });

    // Upside-down Text
    $('#item-two').hover(function() {
        $('#item-two').css('transform', 'rotate(-180deg)');
        $('#item-two').css('border-bottom', 'none');
        $('#item-two').css('border-top', 'solid 1px grey');
        $('#item-two').css('color', 'black');
    },
    function() {
        $('#item-two').css('transform', 'rotate(0deg)');
        $('#item-two').css('border-bottom', 'solid 1px grey');
        $('#item-two').css('border-top', 'none');
        $('#item-two').css('color', 'grey');
    }).click(function() {
        resize(250, 275, 500, function(){window.location = 'tools/flip.html';});
    });

    // Rainbow Text
    $('#item-three').hover(function() {
        $('#item-three').html('<span class="rainbow">Rainbow Text</span>');
    },
    function() {
        $('#item-three').html('Rainbow Text');
    }).click(function() {
        resize(250, 355, 500, function(){window.location = 'tools/rainbow.html';});
    });
});