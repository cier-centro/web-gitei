var currentElement = 0;
var currentLink = $( ".home-header .header-links .nav .selected" ).get(currentElement);
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
