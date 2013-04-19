
$(function(){
	
	$("dd").toggle();
	$("span.click_for_more").toggle();
	
	$("dt").click(function(){
		mathtran.init();
		$(this).next().slideToggle('slow');
		if ($(this).find('.click_for_more span').html() == 'more') {
				$(this).find('.click_for_more span').html('less');
			} else {
				$(this).find('.click_for_more span').html('more');
			}
			return false;
	})
	.bind("mouseenter mouseleave", function(){
		$(this).next().andSelf().toggleClass('fn_over');
		$(this).find('span.click_for_more').toggle();
	})
	
	// $('#help_display .more_wrap').toggle();
	//  	$('#help_display .click_for_more').toggle();
	// 	$('#help_display .fn_display')
	// 	
	// 	.click(function() {
	// 		$(this).next().slideToggle('slow').closest('.function_wrapper').toggleClass('fn_open')
	// 			//.toggleClass('fn_still');
	// 		if ($(this).find('.click_for_more span').html() == 'more') {
	// 			//$(this).find('.click_for_more span').html('less');
	// 		} else {
	// 			//$(this).find('.click_for_more span').html('more');
	// 		}
	// 		return false;	
	// 	})
	// 	.mouseenter(function(){
	// 		//$(this).closest('.function_wrapper').toggleClass('fn_over');
	// 		//$(this).find('.click_for_more').toggle();
	// 	})
	// 	.mouseleave(function(){
	// 		$(this).closest('.function_wrapper').toggleClass('fn_over');
	// 		$(this).find('.click_for_more').toggle();
	// 	});
	// 	
	// 	$("div#switch > div")
	// 	.mousedown(function() {
	// 		
	// 	})
	// 	.click(function() {
	// 		if ($("div#switch > div").index(this) == 0) {
	// 			//window.location.href = 'index.php?tab=0';
	// 		} else if ($("div#switch > div").index(this) == 1) {
	// 			//window.location.href = 'index.php?tab=1';
	// 		} else {
	// 		//	window.location.href = 'index.php?tab=2';
	// 		}
	// 	});
	// 	
	// 	$("div#docs_subsections").find("div.item").click(function(){
	// 		i = $("div.item").index(this);
	// 		var t;
	// 		$("#switch > div").each(function(){
	// 			if ($(this).hasClass("active")) {
	// 				t = $(this).parent().children().index(this);
	// 			}
	// 		});
	// 		window.location.href = 'index.php?tab=' + t + '&id=' + i;
	// 	});
	
	//$("div.nav div.sect:has(div.active)").find("div.sect_items").toggle();
	//$("div.nav div.sect_items").toggle();
});