$(document).ready(function(){
	
	$generateLabel = function(){
		$('.ci-dropdown').each(function(){
			if($(this).find('ul > li.active').length){
				$(this).children('span').text($(this).find('ul > li.active').text());
			}
			$generateElement($(this).attr('id'));
		});
	};
	$generateElement = function($id){
		$("#"+$id+" input[name='"+$('#'+$id).attr('name')+"']").remove();
		$('#'+$id).append("<input type='hidden' name='"+$('#'+$id).attr('name')+"' value='"+$('#'+$id+' > ul > li.active').attr('value')+"'>");
	};
	
	$('.ci-dropdown').mouseenter(function(){
		$(this).toggleClass('active');
	});

	$('.ci-dropdown').mouseleave(function(){
		$(this).toggleClass('active');
	});
	$('.ci-dropdown > ul > li').click(function(){
		$('#'+$(this).parent().parent().attr('id')+' > ul > li').removeClass('active');
		$(this).addClass('active');
		$generateLabel();
	});

	$generateLabel();
});
