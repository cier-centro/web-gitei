var currentElement = 0;
var currentLink = $( ".home-header .header-links .nav .selected" ).get(currentElement);
var mainVideo = $( ".videos-section #video-gallery > div:first-child img" );
var categoryMenuClass = ".category-menu .menu-items";

jQuery.noConflict();
jQuery(document).animateScroll();

$( document ).ready(function() {
		if (mainVideo.length > 0) {
				var newURLMainVideo = mainVideo.attr('src').replace("mqdefault", "hqdefault");
				mainVideo.attr("src", newURLMainVideo);
		}
		if ( $( categoryMenuClass ).length > 0) {
				var categoryMenuParents = categoryMenuClass + " .menu-item-has-children > a";
				$( categoryMenuParents ).attr("href", "javascript:void(0)");
				$( categoryMenuParents ).attr("class", "closed");
				$( categoryMenuParents ).click(function() {
					if (this.classList.contains("open")) {
					  	this.className = "closed";
					}
					else {
							this.className = "open";
					}
				});
		}
});

function changeSlider(link, selectedElement) {
		if (currentElement != selectedElement) {
				selectedSlider = $( ".home-header .slider" ).get(selectedElement);
				currentSlider = $( ".home-header .slider" ).get(currentElement);
				if (selectedSlider.classList.contains("closed")) {
						selectedSlider.className = "slider open";
						currentSlider.className = "slider closed";
				}
				currentLink.className = "";
				link.className = "selected";
				currentLink = link;
				currentElement = selectedElement;
				console.log(currentElement);
		}
}
