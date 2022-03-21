// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;

// Add a row
function addR() {
    var table = document.getElementById("grid");
    if ((numRows == 0) && (numCols == 0)) {
        newRow = table.insertRow();
        cell = newRow.insertCell();
        numRows++;
        numCols++;
    }
    else {
        newRow = table.insertRow();
        for (let i = 0; i < numCols; i++) {
            cell = newRow.insertCell();
        }
        numRows = numRows + 1;
    }
    SelectColors() //Allowing cells to be selectable
}

// Add a column
function addC() {
    var table = document.getElementById("grid");
    if ((numRows == 0) && (numCols == 0)) {
        newRow = table.insertRow();
        cell = newRow.insertCell();
        numRows++;
        numCols++;
    }
    else if (numRows == 1) {
        cell = newRow.insertCell();
        numCols++;
    }
    else {
        numCols++;
        let temporary_rows = numRows;
        let temporary_columns = numCols;
        for (let i = 0; i < temporary_rows; i++) {
            table.deleteRow(0);
        }
        for (let i = 0; i < temporary_rows; i++) {
            newRow = table.insertRow();
            for (let j = 0; j < temporary_columns; j++) {
                cell = newRow.insertCell();
            }
        }
        numRows = temporary_rows;
    }
    SelectColors() //Allowing cells to be selectable
}

// Remove a row
function removeR() {
    var table = document.getElementById("grid");
    if (numRows == 0) {
        return;
    }
    else if (numRows == 1) {
        table.deleteRow(numRows - 1);
        numCols = 0;
        numRows--;
        return;
    }
    table.deleteRow(numRows - 1);
    numRows--;
    SelectColors() //Allowing cells to be selectable
}

// Remove a Column
function removeC() {
    var table = document.getElementById("grid");
    if (numRows == 0) {
        return;
    }
    else if (numCols == 1) {
        for (let i = 0; i < numRows; i++) {
            table.deleteRow(0);
        }
        numCols = 0;
        numRows = 0;
        return;
    }
    else
    {
        for (let i = 0; i < numRows; i++)
        {
            access_rows = table.rows[i];
            access_rows.deleteCell(numCols - 1);
        }
        numCols--;
    }
    SelectColors() //Allowing cells to be selectable
}

// Set global variable for selected color
function selectColor() {
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU() {
    var table = document.getElementById("grid").getElementsByTagName("td");
    for (let i = 0; i < (numRows * numCols); i++) {
        if (table[i].style.backgroundColor == "") { //if white
            table[i].style.backgroundColor = document.getElementById("selectedColorId").value;
        }
    }
}

// Fill all cells
function fillAll() {
    var table = document.getElementById("grid").getElementsByTagName("td");
    for (let i = 0; i < (numRows * numCols); i++) {
        table[i].style.backgroundColor = document.getElementById("selectedColorId").value;
    }
}

// Clear all cells
function clearAll() {
    temporary_rows = numRows;
    for (let i = 0; i < temporary_rows; i++) {
        removeR();
    }
    numRows = 0;
    numCols = 0;
}

function SelectColors() {
    //////////////////MAKING CELLS SELECTABLE/////////////////////
    var tablelist = document.getElementById("grid");
    variable = tablelist.getElementsByTagName("td");
    for (let i = 0; i < (numRows * numCols); i++) {
        variable[i].onclick = function () {
            variable[i].style.backgroundColor = document.getElementById("selectedColorId").value;
        }
    }
    //////////////////////////////////////////////////////////////
}
