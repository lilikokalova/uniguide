google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
		var data = google.visualization.arrayToDataTable([
		['Move', 'Percentage'],
		["2015", 14.91783],
		["2014", 14.58629],
		["2013", 14.09392],
		["2012", 10]

		]);

		// Optional; add a title and set the width and height of the chart
		//var options = {'title':'My Average Day', 'width':550, 'height':400};
		var options = {
		width: 800,
		legend: { position: 'none' },
		chart: {
		title: '',
		subtitle: '' },
		axes: {
		x: {
		0: { side: 'top', label: 'White to move'} // Top x-axis.
		}
		},
		bar: { groupWidth: "90%" }
		};

		var chart = new google.charts.Bar(document.getElementById('piechart'));
		// Convert the Classic options to Material options.
		chart.draw(data, google.charts.Bar.convertOptions(options));
};



function drawbarchart(url, id) {
					$(document).ready(function() {
										$.ajax({ 
											url: url, 
											dataType: "json",
											"success": function(data) {
												console.log(data);
												//jsonObj = [];
												jsonObj = [['header1', 'header2']];
												
												var arrLength = data.length;
												var name = data[1][0].indicator.value;
												console.log(name);
												document.getElementsByClassName("accordionSection")[0].innerHTML = name;
												
													for(var j=0; j<7; j++){
														
														var value = data[1][j].value;
														var date = data[1][j].date;
														
														var newArray = [data[1][j].date, data[1][j].value]
														jsonObj.push(newArray);
														
														
														
														console.log(value);
														
													}
													
													
													drawChart(id);
												console.log(jsonObj);											
												}

	 
											});
									});
									
									
									
}								
									
$("#accordionSection").click(function() {
	drawchart();
});	

$("#accordionSection").click(function() {
	drawbarchart("https://api.worldbank.org/v2/countries/GBR/indicators/UIS.FOSEP.56.F140?date=2009:2015&format=json");
});














