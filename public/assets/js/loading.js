$(document).on('click', '#but', loadingGif);

function loadingGif(){
	// $('.loading').css('display', 'block');
	// var loadImg = $('<img>');
	// loadImg.addClass('loadGif');
	// loadImg.attr('src', '/assets/img/loading.gif');
	// $('.loading').append(loadImg);
	$('.loading').fadeIn();
	setTimeout(hide, 7777);
}

function hide(){
	// $('.loading').css('display', 'none');
	$('.loading').fadeOut();
	// $('.loadGif').remove();
}