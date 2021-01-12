//Assign the data from 'data.js' to a descriptive variable
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

button.on("click",function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var dateInput = d3.select("#datetime");
    var cityInput = d3.select('#city');
    var stateInput = d3.select('#state');
    var countryInput = d3.select('#country');
    var shapeInput = d3.select("#shape");

    // Get the value property of the input element
    console.log(dateInput.property("value");
    console.log(cityInput.property("value");
    console.log(stateInput.property("value");
    console.log(countryInput.property("value");
    console.log(shapeInput.property("value");

    // Filter the data based on the input
    var filteredData = tableData.filter(info =>{
        (tableData => tableData.datetime === dateInput);
        (tableData => tableData.city === cityInput);
        (tableData => tableData.state === stateInput);
        (tableData => tableData.country === countryInput);
        (tableData => tableData.shape === shapeInput);
    })
        
    console.log("filtered data", filteredData);

    // Select the table body and assigning it to a variable
    var tableBody = d3.select("tbody");

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
