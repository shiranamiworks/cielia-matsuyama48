$(function(){
	$("#btnSearch").removeClass("on");
	$("#goal").on("keydown keyup keypress change", function() {
		if ($('input#goal').val().length >= 2) {
			$("#btnSearch").addClass("on");
		} else {
			$("#btnSearch").removeClass("on");
		}
	});
});


$(function(){
	$('#btnSearch').on('click',function(){
		var goal = $('input#goal').val();
		var goalLength = goal.length;
		var enSaddr = $('option:selected').val();
		var engoal = encodeURIComponent( goal );
//		var gmapURL = 'http://maps.google.com/maps?saddr=' + enSaddr + '&daddr=' + engoal + '%e9%a7%85&dirflg=r';
		var gmapURL = 'https://www.cielia.com/m/temma172/re/gmap_simulator.html?saddr=' + enSaddr + '&daddr=' + engoal;
		
		if(goalLength >= 2){
			window.open(gmapURL, '_blank');
		}else{
		}
	});
});