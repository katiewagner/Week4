$(document).ready(function() {
//prevent a from performing when clicked
	$("a").click(function(event) {
			event.preventDefault();
		});
//<p>slides down, "Read More" hidden, "Read Less" shows
	function readMore(){
		$(".readmore").hide();
		$(".readless").show();
		$("#show-this-on-click").slideDown();

	}
	$(".readmore").click(readMore);
//<p> slides up to hide "Read Less", then "Read More" shows
	function readLess(){
		$(".hide").slideUp();
		$(".readless").hide(function() {
			$(".readmore").show();	
		});
	}
	$(".readless").click(readLess);
//<span> slides down to show text & "Learn More" hides
	function learnMore(){
		$("#learnmoretext").slideDown();
		$(".learnmore").hide();
	}
	$(".learnmore").click(learnMore)
});