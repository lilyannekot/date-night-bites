
//Table function
var createTable = (row, col) => {
    var tableBody = document.body;
    var tableMain = document.createElement("table");

//for loop to insert rows and columns
    for (i = 0; i < row; i++) {
        var tblRow = tableMain.insertRow();
        for (x = 0; x < col; x++) {

            //applying a unique id to the cells
            var rowName = "cell" + i + x;
            var tblCell = tblRow.insertCell();
             if (i == 1) {
                 var object = tblCell.appendChild(document.createElement("button"))
             }
            tblCell.appendChild(document.createTextNode(""));
            tblCell.style.border = "2px solid gray";
            tblCell.setAttribute("id", rowName);
        }
    }
    tableBody.appendChild(tableMain);
};

//amount of (rows, columns)
createTable(2, 4);

