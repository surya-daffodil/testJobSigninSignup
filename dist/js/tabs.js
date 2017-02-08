$(document).ready(function() {
	
	// ----------- ALL TABS ------------ //	
		//$("ul.tabs li").css('background','#3c87cb');
		//$("ul.tabs3 li").css('background','#fff');
		
		
		//Default Action
		$(".tab_content").hide(); //Hide all content
        $(".tab_content").removeClass('showc');
    
		$("ul.tabs li:first").addClass("active").show(); //Activate first tab
		$(".tab_content:first").show(); //Show first tab content
        $(".tab_content:first").addClass('showc');
	
		//On Click Event
		$("ul.tabs li").click(function() {
			$("ul.tabs li").removeClass("active"); //Remove any "active" class
			$(this).addClass("active"); //Add "active" class to selected tab
			$(".tab_content").hide(); //Hide all tab content
			$(".tab_content").removeClass('showc');
			
			//console.log($(this).html());
			var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
			$(activeTab).fadeIn(); //Fade in the active content
			
			
			$(activeTab).addClass('showc');
			
			
			return false;
		});
	// ----------------------------------- //
	
	
	
	// ----------- ALL TABS ------------ //	
		//$("ul.tabs li").css('background','#3c87cb');
		//$("ul.tabs3 li").css('background','#fff');
		
		
		//Default Action
		$(".tab_content1").hide(); //Hide all content
        $(".tab_content1").removeClass('showc');
    
		$("ul.tabs1 li:first").addClass("active").show(); //Activate first tab
		$(".tab_content1:first").show(); //Show first tab content
        $(".tab_content1:first").addClass('showc');
	
		//On Click Event
		$("ul.tabs1 li").click(function() {
			$("ul.tabs1 li").removeClass("active"); //Remove any "active" class
			$(this).addClass("active"); //Add "active" class to selected tab
			$(".tab_content1").hide(); //Hide all tab content
			$(".tab_content1").removeClass('showc');
			
			//console.log($(this).html());
			var activeTab1 = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
			$(activeTab1).fadeIn(); //Fade in the active content
			
			
			$(activeTab1).addClass('showc');
			
			
			return false;
		});
	// ----------------------------------- //
    
    
 
    

});