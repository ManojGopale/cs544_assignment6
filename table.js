console.log("In this script");

var table = d3.select('body').append('table').attr("id", "newTable");
var thead = table.append("thead");
var tbody = table.append("tbody");

console.log("In this script");

// Array for header 
header = Object.keys(scores[0]);

thead.append("tr").selectAll("th")
		.data(header)
		.enter()
		.append("th")
		.text(function(d) {
				return d;
			});

// Create row for each data element
var rows = tbody.selectAll("tr")
							.data(scores)
							.enter()
							.append("tr");

var cells = rows.selectAll("td")
								.data(function(row) {
										// header.map ==> creates a map for all the keys such that each key is the column, and the value
										// for each key is stored in the value. Creates a data element with 4 objects.
										return header.map(function(column) {
												return {coulmn: column, value: row[column]};
											})
									})
								.enter()
								.append("td")
								// here the 'd' is the data that we created from each row in the data element.
								.text(function(d) {
										return d.value;
									});
