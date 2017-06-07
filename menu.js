$(function(){		
		$(window).scroll(function(){
			var menu = $("#menu")
			if($(this).scrollTop() > 50){
				menu.removeClass('normal').addClass('tetap');
			} else {
				menu.removeClass('tetap').addClass('normal');
			}
		});

});