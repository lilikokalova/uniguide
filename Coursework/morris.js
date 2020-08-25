$(document).ready(function() {
	function drawbarchart(url, id) {
				$.ajax({ 
					url: url, 
					dataType: "json",
					"success": function(data) {
						var arrLength = data.length;
						jsonObj = [];
						for(var j=0; j<7; j++){
														
							var value = data[1][j].value;
							var date = data[1][j].date;
							
							item = {};
							item["date"] = date;
							item["value"] = value;
							
							jsonObj.push(item);
						}
									
						new Morris.Bar({
							element: id,
							data: jsonObj,
							xkey: 'date',
							ykeys: ['value'],
							labels: ['value'],
							parseTime: false
						});
									
						
					}


				});
	}
	
	drawbarchart("https://api.worldbank.org/v2/countries/GBR/indicators/SE.TER.ENRL?date=2009:2015&format=json", 'piechart');
	drawbarchart("https://api.worldbank.org/v2/countries/GBR/indicators/UIS.FOSEP.56.F600?date=2009:2015&format=json", 'piechart1');
	drawbarchart("https://api.worldbank.org/v2/countries/GBR/indicators/UIS.FOSEP.56.F140?date=2009:2015&format=json", 'piechart2');
	drawbarchart("https://api.worldbank.org/v2/countries/GBR/indicators/UIS.FOSEP.56.F500?date=2009:2015&format=json", 'piechart3');
	drawbarchart("https://api.worldbank.org/v2/countries/GBR/indicators/UIS.FOSEP.56.F700?date=2009:2015&format=json", 'piechart4');
	drawbarchart("https://api.worldbank.org/v2/countries/GBR/indicators/UIS.FOSEP.56.F200?date=2009:2015&format=json", 'piechart5');
	drawbarchart("https://api.worldbank.org/v2/countries/GBR/indicators/UIS.FOSEP.56.F400?date=2009:2015&format=json", 'piechart6');
	drawbarchart("https://api.worldbank.org/v2/countries/GBR/indicators/UIS.FOSEP.56.F800?date=2009:2015&format=json", 'piechart7');
	drawbarchart("https://api.worldbank.org/v2/countries/GBR/indicators/UIS.FOSEP.56.F300?date=2009:2015&format=json", 'piechart8');

});

			
/*
Copyright (c) 2013, Olly Smith
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice,
this list of conditions and the following disclaimer in the documentation
and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
