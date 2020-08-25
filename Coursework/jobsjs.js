$(document).ready(function() {
	$.ajax({ 
		url: "http://api.lmiforall.org.uk/api/v1/soc/search?q=computer", 
		dataType: "jsonp",
		"success": function(data) {
			
			var arrLength = data.length;
			var nodediv = $("<div />");
			nodediv.addClass("jobs");
			
			for (var i=0; i<arrLength; i++) {
				
				var name = data[i].title;
				var description = data[i].description;
				var qualification = data[i].qualifications;

				var n = $("<h3 />", {text: name});
				n.addClass("jobName");
				
				var node = $("<div>");
				node.addClass("jobCon");
				
				var node1 = $("<div>");
				node1.addClass("left");
				var z = $("<h4 />", {text: "Description"});
				var x = $("<p />", {text: description});
				
				node1
				.append(z)
				.append(x);
				
				var node2 = $("<div>");
				node2.addClass("right");
				var s = $("<h4 />", {text: "Qualification"});
				var y = $("<p />", {text: qualification});
				
				
				node2
				.append(s)
				.append(y);
			
				node
				.append(n)
				.append(node1)
				.append(node2);
				
				nodediv
				.append(node);
			}
			
			$(".main").append(nodediv);
			
			
		}

	});

					
					
	$("#inputChoice").on("blur", function() {
		var choice = $(this).val();
		var req= $.ajax({
			url: "http://api.lmiforall.org.uk/api/v1/soc/search?q=" + choice, 
			dataType: "jsonp"
		});
		req.done(function(data) {
				
			
			var nodediv = $("<div />");
			nodediv.addClass("jobs");
			var arrLength = data.length;
								
			for (var i=0; i<arrLength; i++) {
				var name = data[i].title;
				var description = data[i].description;
				var qualification = data[i].qualifications;
				
				
				
				var n = $("<h3 />", {text: name});
				n.addClass("jobName");
				
				var node = $("<div>");
				node.addClass("jobCon");
			
				var z = $("<h4 />", {text: "Description"});
				var x = $("<p />", {text: description});
				
				var s = $("<h4 />", {text: "Qualification"});
				var y = $("<p />", {text: qualification});
				
				
			
				node
				.append(n)
				.append(z)
				.append(x)
				.append(s)
				.append(y);
				
				nodediv
				.append(node);
			}
						
			$(".jobs").replaceWith(nodediv);
		});
	
	});

});
				
				