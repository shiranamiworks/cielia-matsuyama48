$(document).ready(function ()
{
	$('#shape1').mapster({
	singleSelect : true,
	clickNavigate : true,
	render_highlight : { altImage : 'imgs/torikago_ov.png' },
	mapKey: 'region',
	fillOpacity : 1,
});
});

new ScrollHint('.js-scrollable');
new ScrollHint('.js-scrollable-shadow', {
	suggestiveShadow: true
});