$(document).ready(function(){
	$("#workdiv").click(function(){
		$('html,body').animate({
			'scrollTop': $("#toscrollwork").position().top
		});
});
    $("#infodiv").click(function(){
		$('html,body').animate({
			'scrollTop': $("#toscrollinfo").position().top
		});
});
	$('.carousel').carousel({
        interval: 5000
    });
	});
