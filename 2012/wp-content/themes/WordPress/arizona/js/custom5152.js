jQuery.noConflict(); // Make jquery work without conflicts with other frameworks (like Mootools, Prototype, etc...)

/************************ SAME HEIGHTS PLUGIN *********************/

/* -- A Plugin to make variable height divs equal heights -- */
jQuery.fn.sameHeights = function() {

 var tallest = 0;
  this.children().each(function(){
    if (jQuery(this).outerHeight() > tallest) {
      tallest = jQuery(this).outerHeight(); 
    }
  });
  jQuery(this).children().height(tallest);
};

/******************************************************************/


/*-- Tabs --*/
jQuery(function() {
	jQuery("ul.tabs").tabs("div.panes > div", {effect:'fade'});
});


jQuery(document).ready(function(){		
	
	// Initialize Superfish Menu
	jQuery('ul.sf-menu').superfish({autoArrows:false, dropShadows:false,  delay: 500, animation: {opacity:'show',height:'show'},  easing: 'swing', speed:400}); 
	jQuery("ul.sf-menu > li").addClass('top');
	jQuery('.flickr_badge_image:nth-child(3n+1)').css({ marginRight: '0px' });
	
	// Apply Same heights plugin to footer blocks
	jQuery('.footer-block').sameHeights();
 		
	// Initialize Toggle Shortcode
	jQuery(".toggle-container").hide();
	jQuery(".toggle-trigger").click(function(e){
		e.preventDefault;
		jQuery(this).toggleClass("active").next().slideToggle("normal");
		return false;
	});
	
	jQuery("a[rel^='prettyPhoto']").prettyPhoto();
	
	jQuery('#portfolio-list li').hover(function(){								
		jQuery(this).find('.poverlay, .zoom-icon').fadeIn('normal');
	}, function(){
		jQuery(this).find('.poverlay, .zoom-icon').fadeOut('normal');	
	});
});