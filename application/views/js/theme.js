$(document).ready(function() {
	//$('#side-bar').css({height : $('body').css('height')});
	// Bind jQuery events
	$('.theme-selector').bind('mouseenter', function() {
		$(this).stop();
		$(this).animate({
			marginLeft : '40px'
		}, 200);
	});
	$('.theme-selector').bind('mouseleave', function() {
		$(this).stop();
		$(this).animate({
			marginTop    : "6px",
			marginLeft   : "58px",
			marginBottom : "0px"
		}, 200);
	});
	$('.theme-selector').bind('mousedown', function() {
		$(this).stop();
		$(this).animate({
			marginTop    : "8px",
			marginLeft   : "42px",
			marginBottom : "-2px"
		}, 200);
	});
	$('.theme-selector').bind('mouseup', function() {
		$(this).stop();
		$(this).animate({
			marginTop    : "6px",
			marginLeft   : "40px",
			marginBottom : "0px"
		}, 200);
	});
	$('#spring').bind('click', function() {
		refreshTheme('Spring');
	});
	$('#summer').bind('click', function() {
		refreshTheme('Summer');
	});
	$('#autumn').bind('click', function() {
		refreshTheme('Autumn');
	});
	$('#winter').bind('click', function() {
		refreshTheme('Winter');
	});
	
	// Set board's and side-bar's height
	var dif = parseInt($('#top-bar'   ).css('marginTop')) + 
		      parseInt($('#top-bar'   ).css('height'   )) + 
			  parseInt($('#board'     ).css('marginTop')) + 
			  parseInt($('#bottom-bar').css('marginTop')) + 
			  parseInt($('#bottom-bar').css('height'   )) + 
			  26;
		hb = parseInt($('#board'   ).css('height')),
		hs = parseInt($('#side-bar').css('height'));
	if (hb > hs - dif) {
		hs = hb + dif;
	} else {
		hb = hs - dif;
	}
	$('#board'   ).css({'height' : hb + 'px'});
	$('#side-bar').css({'height' : hs + 'px'});
	
	// Refresh the theme
	refreshTheme('current');
});

function refreshTheme(season) {
	if (season === 'current') {
		season = getSeason();
	}
	
	// Refresh theme image
	// Refresh page background
	$('body'               ).css({backgroundImage : 'url(\'../myblog/application/views/resource/Background(' + season + ').jpg\')'});
	// Refresh logos
	$('.article-title-logo').css({backgroundImage : 'url(\'../myblog/application/views/resource/Logo(' + season + ').png\')'});
	// Refresh article background
	$('.article-main'      ).css({backgroundImage : 'url(\'../myblog/application/views/resource/Article-Background(' + season + ').jpg\')'});
	
	// Refresh theme color
	var tColor = parseInt(getThemeColor(season), 16),
		r = Math.floor(tColor / 256 / 256) % 256,
		g = Math.floor(tColor / 256) % 256,
		b = tColor % 256;
	
	$('#top-bar'   ).css({backgroundColor : 'rgba(' + r + ', ' + g + ', ' + b + ', 0.7)'},
	                     {filter          : 'progid : DXImageTransform.Microsoft.gradient(startColorstr = \'#B3' + tColor + '\', endColorstr = \'#B3' + tColor + '\')'},
	                     {MsFilter        : 'progid : DXImageTransform.Microsoft.gradient(startColorstr = \'#B3' + tColor + '\', endColorstr = \'#B3' + tColor + '\')'});
	
	$('#board'     ).css({backgroundColor : 'rgba(' + r + ', ' + g + ', ' + b + ', 0.9)'},
	                     {filter          : 'progid : DXImageTransform.Microsoft.gradient(startColorstr = \'#33' + tColor + '\', endColorstr = \'#33' + tColor + '\')'},
	                     {MsFilter        : 'progid : DXImageTransform.Microsoft.gradient(startColorstr = \'#33' + tColor + '\', endColorstr = \'#33' + tColor + '\')'});
						 
	$('#side-bar'  ).css({backgroundColor : 'rgba(' + r + ', ' + g + ', ' + b + ', 0.5)'},
	                     {filter          : 'progid : DXImageTransform.Microsoft.gradient(startColorstr = \'#7F' + tColor + '\', endColorstr = \'#7F' + tColor + '\')'},
	                     {MsFilter        : 'progid : DXImageTransform.Microsoft.gradient(startColorstr = \'#7F' + tColor + '\', endColorstr = \'#7F' + tColor + '\')'});
						 
	$('#bottom-bar').css({backgroundColor : 'rgba(' + r + ', ' + g + ', ' + b + ', 1.0)'},
	                     {filter          : 'progid : DXImageTransform.Microsoft.gradient(startColorstr = \'#FF' + tColor + '\', endColorstr = \'#FF' + tColor + '\')'},
	                     {MsFilter        : 'progid : DXImageTransform.Microsoft.gradient(startColorstr = \'#FF' + tColor + '\', endColorstr = \'#FF' + tColor + '\')'});
}

var date = new Date();

function getSeason() { // Get current season
	var month = date.getMonth();
	
	switch (month + 1)
	{
		case 1 :
		case 2 :
			return 'Winter';
			break;
		case 3 :
		case 4 :
		case 5 :
			return 'Spring';
			break;
		case 6 :
		case 7 :
		case 8 :
			return 'Summer';
			break;
		case 9 :
		case 10 :
		case 11 :
			return 'Autumn';
		case 12 :
			return 'Winter';
			break;
		default :
			return 'Error';
			break;
	}
}

function getThemeColor(season) {
	switch (season)
	{
		case 'Spring' :
			return '0xB9FF4A';
			break;
		case 'Summer' :
			return '0xFF7EBE';
			break;
		case 'Autumn' :
			return '0xFFFF7A';
			break;
		case 'Winter' :
			return '0x7FBCEA';
			break;
		default :
			return '0xFFFFFF';
			break;
	}
}