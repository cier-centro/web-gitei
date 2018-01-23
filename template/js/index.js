function changeSlider(selectedElement) {
	selectedSlider = $( ".home-header .slider" ).get(selectedElement);
	slidersArray = $( ".home-header .slider" );
	for (var i = 0; i < slidersArray.length; i++) {
			$( ".home-header .slider" ).get(i).className = "slider closed"
	}
	if (selectedSlider.classList.contains("closed")) {
			selectedSlider.className = "slider open";
	}
	console.log(slidersArray);
}
