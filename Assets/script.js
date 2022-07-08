var createTable = (row, col) => {
    var tableBody = document.body;
    var tableMain = document.createElement("table");
//add for loop to insert rows and columns
for (i = 0; i < row; i++) {
    var tblRow = tableMain.insertRow();
}
};
createTable(2, 4);