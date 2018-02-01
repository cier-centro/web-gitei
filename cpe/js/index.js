$( document ).ready(function() {
  	changeSquareHeight();
});

$( window ).resize(function() {
  	changeSquareHeight();
});

function changeSquareHeight() {
		var heightSquare = $( ".square" ).outerWidth();
		$(".square").outerHeight(heightSquare);
}
