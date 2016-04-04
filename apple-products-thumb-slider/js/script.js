$(document).ready(function(){
	//Declare vars
	var totalWidth = 0;
	var positions = new Array();
	
	$('#slides .slide').each(function(i){
		//Get slider width
		positions[i] = totalWidth;
		totalWidth += $(this).width();
		
		//Check widths
		if(!$(this).width()){
			alert('Please add a width to your image');
			return false;
		}
	});
	
	//Set width of #slides
	$('#slides').width(totalWidth);
	
	//Menu item click handler
	$('#menu ul li a').click(function(e, keepScroll){

		//remove active class and add inactive class
		$('li.product').removeClass('active').addClass('inactive');

		//add active class to parent
		$(this).parent().addClass('active');
		
		var pos = $(this).parent().prevAll('.product').length;
		
		$('#slides').stop().animate({marginLeft: -positions[pos] + 'px'}, 350);
		
		//prevent default
		e.preventDefault();
			
		
	});
	
	
	//Make first image active
	$('#menu ul li.product:first').addClass('active').siblings().addClass('inactive');
	
	
	//autoscroll
	var current = 1;
	function autoScroll(){
		if(current == -1) return false;
		
		$('#menu ul li a').eq(current%$('#menu ul li a').length).trigger('click', [true]);
		current++;
		
		//if(current != $('#menu ul li.product').index('.active')) current = $('#menu ul li.product').index('.active')+1;
	}
	
	//duration for autoscroll
	var itvl = setInterval(autoScroll, 5000);
	
})








