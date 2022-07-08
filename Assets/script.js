
//Table function
var createTable = (row, col) => {
    var tableBody = document.body;
    var tableMain = document.createElement("table");
//for loop to insert rows and columns
    for (i = 0; i < row; i++) {
        var tblRow = tableMain.insertRow();
        for (x = 0; x < col; x++) {
            var tblCell = tblRow.insertCell();
            tblCell.appendChild(document.createTextNode(""));
            tblCell.style.border = "2px solid gray";
        }
    }
    tableBody.appendChild(tableMain);
};
createTable(2, 4);


//Learn more button
var learnMore = document.createElement("button");