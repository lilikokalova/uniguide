$(document).ready(function() {
	$.ajax({ 
		url: "search.json", 
		type: "GET",
		dataType: "json",
		"success": function(data) {
			var arrLength = data.length;
			for (var i=0; i<arrLength; i++) {
				uniname=data[i].name;
				url = data[i].web_pages;
				
				var node = document.createElement("div");
				node.className = "bluecont";
			
				var node1 = document.createElement("h3");
				var textnode1 = document.createTextNode(uniname); 
				
				var node2 = document.createElement("a");
				node2.setAttribute('href',url);
				var textnode2 = document.createTextNode(url);
				
				node1.appendChild(textnode1); 
				node2.appendChild(textnode2);
				node.appendChild(node1);
				node.appendChild(node2);
				document.getElementById("main").appendChild(node);
			}
		}

		});
});
