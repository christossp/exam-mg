$( document ).ready(function() {
	
		$('.grid').masonry({
		  itemSelector: '.grid-item',
		  columnWidth: '.grid-sizer',
		  percentPosition: true
		});
	
	
		$(".right").click(function(){
		var nextPanel = $(".active").next(".panel");
		if(nextPanel.length > 0){
			var left = nextPanel.css("left");
			$(".active").css("left",left);
			$(".active").removeClass("active").next("div.panel").addClass("active");
			$(".white").removeClass("white").next("span.dot").addClass("white");
			
		}
		});
		
		$(".left").click(function(){
		var prevPanel = $(".active").prev(".panel");
			if(prevPanel.length > 0){
			var left = prevPanel.css("left");
			$(".active").css("left",left);
			$(".active").removeClass("active").prev("div.panel").addClass("active");
			$(".white").removeClass("white").prev("span.dot").addClass("white");
			}
		});
		
	});