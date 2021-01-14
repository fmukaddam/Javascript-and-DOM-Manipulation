//Assign the data from 'data.js' to a descriptive variable
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

//Global table body
const tableBody = d3.select("tbody");

    tableData.forEach(item => {
        var tableRow = tableBody.append('tr');
        tableRow.append('td').text(item.datetime);
        tableRow.append('td').text(item.city);
        tableRow.append('td').text(item.state);
        tableRow.append('td').text(item.country);
        tableRow.append('td').text(item.shape);
        tableRow.append('td').text(item.durationMinutes);
        tableRow.append('td').text(item.comments);
        });

        button.on("click",function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log("input",inputValue);

    // Filter the data based on the input
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log("filtered data", filteredData);

    // Select the table body and assigning it to a variable
    //var tableBody = d3.select("tbody");
    //clear the table before appending the data
    tableBody.html("");

    // Append filtered data to the table 
    filteredData.forEach(function(info) {
        var tableRow = tableBody.append("tr");
        Object.entries(info).forEach(function([key,value]) {
            console.log(key,value);
            var cell = tableRow.append("td");
            cell.text(value);
        });
    });
});
