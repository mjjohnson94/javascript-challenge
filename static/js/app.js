/////   Creating table on the HTML page and appending records from data.js file into a HTML table


// Passing a variable to store the data:
const tableData = data;
console.log(tableData)

// Selecting the tbody element tag contained within the HTML file:
const tbody = d3.select("tbody");

// Creating build table function:
function buildTable(data)   {
    tbody.html("")
    // Ensuring each row in the data.js file is iterated over.
    data.forEach((dataRow) => {

        // Creating a new variable which will store the column headers stored within the TR element tags, this is the column header section of the table.
        const row = tbody.append("tr");

        // Appending each value as text into the TD elements on the HTML page, this is the body of the table.
        Object.values(dataRow).forEach((val) => {
            // ['1/1/21', 'circle', 'TX'].forEach()
            let cell=row.append("td")
            cell.text(val);
        }
        );
    });
}

    //////// Creating interactive button to return filtered date /////////////

    function filteredTable() {

        // Prevent the page from refreshing:
        d3.event.preventDefault();

        // Select the input element and pass it into a variable:
        var inputElement = d3.select("#datetime");
        var inputValue = inputElement.property("value");
        let filteredData = tableData;

        // Printing inputValue to the console:
        console.log(inputValue)

        // Passing a variable to store the date in which the user inputs in the webpage.
        // Creating a condition where only the results from the data.js file which = the input value are returned: 
        filteredData = filteredData.filter(data => data.datetime == inputValue)

        // Building table for the filtered data:
        buildTable(filteredData)};

// Appending results into a new table on the HTML page:

// 
d3.selectAll("#filter-btn").on("click", filteredTable)
buildTable(tableData);

