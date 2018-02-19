var currentElement = 0;
var currentLink = $( ".home-header .header-links .nav .selected" ).get(currentElement);
var mainVideo = $( ".videos-section #video-gallery > div:first-child img" );
var categoryMenuClass = ".category-menu .menu-items";
var knownLinks = ".grid-gallery-photos > a";
var selectedLinkTitle = "";

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
						this.className = (this.classList.contains("open"))? "closed" : "open";
				});
		}
		if ( $( knownLinks ).length > 0) {
				$( knownLinks ).attr("onclick", "setTitle(this)");
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
function setTitle(link) {
		selectedLinkTitle = $(link).attr("title");
}
$( document ).bind('DOMSubtreeModified',function() {
		if ( ( $("#sggPrettyPhototooltip").length > 0 ) && ( $( "#sggPrettyPhototooltip" ).text() != selectedLinkTitle ) && ( selectedLinkTitle != "") && ( $( "#sggPrettyPhototooltip" ).text() != "") ) {
			$( "#sggPrettyPhototooltip" ).text(selectedLinkTitle);
			console.log("este es el texto -> " + $( "#sggPrettyPhototooltip" ).text());
		}
});
