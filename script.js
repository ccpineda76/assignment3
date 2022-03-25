// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;

// Add a row
function addR() {
    var table = document.getElementById("grid");
    if ((numRows == 0) && (numCols == 0)) { //If there are both no columns or rows
        newRow = table.insertRow(); //make a new row
        cell = newRow.insertCell(); //make a new cell
        numRows++;
        numCols++;
    }
    else {
        newRow = table.insertRow();
        for (let i = 0; i < numCols; i++) {
            cell = newRow.insertCell();
        }
        numRows = numRows + 1; //otherwise add a new row with a corresponding cell
    }
    SelectColors(); //Allowing cells to be selectable
}

// Add a column
function addC() {
    var table = document.getElementById("grid");
    if ((numRows == 0) && (numCols == 0)) { //If there are both no columns or rows
        newRow = table.insertRow(); //make a new row
        cell = newRow.insertCell(); //make a new cell
        numRows++; //increment rows
        numCols++;//increment columns
    }
    else if (numRows == 1) { //if there is one row create cell
        cell = newRow.insertCell(); 
        numCols++;
    }
    else {
        for (let i = 0; i < numRows; i++) { //for every row, add a cell
            access_rows = table.rows[i]; 
            access_rows.insertCell();
        }
        numCols++;
    }
    SelectColors(); //Allowing cells to be selectable
}

// Remove a row
function removeR() {
    var table = document.getElementById("grid");
    if (numRows == 0) { //if there is nothing on the grid, return
        return;
    }
    else if (numRows == 1) { //if there is only one row, delete row and set columns and rows to zero
        table.deleteRow(numRows - 1);
        numCols = 0;
        numRows--;
        return;
    }
    table.deleteRow(numRows - 1);
    numRows--;
    SelectColors(); //Allowing cells to be selectable
}

// Remove a Column
function removeC() {
    var table = document.getElementById("grid");
    if (numRows == 0) { //if no rows then zero
        return;
    }
    else if (numCols == 1) {
        for (let i = 0; i < numRows; i++) { //if there is one column, delete row
            table.deleteRow(0);
        }
        numCols = 0;
        numRows = 0;
        return;
    }
    else {
        for (let i = 0; i < numRows; i++) {
            access_rows = table.rows[i];
            access_rows.deleteCell(numCols - 1);
        }
        numCols--;
    }
    SelectColors(); //Allowing cells to be selectable
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
        table[i].style.backgroundColor = document.getElementById("selectedColorId").value; //for every single index fill in with selected color
    }
}

// Clear all cells
function clearAll() {
    var table = document.getElementById("grid").getElementsByTagName("td");
    for (let i = 0; i < (numRows * numCols); i++) {
        table[i].style.backgroundColor = ""; //put all colors back to white
    }
}

function SelectColors() {
    //////////////////MAKING CELLS SELECTABLE/////////////////////
    var tablelist = document.getElementById("grid");
    variable = tablelist.getElementsByTagName("td");
    for (let i = 0; i < (numRows * numCols); i++) {
        variable[i].onclick = function () {
            variable[i].style.backgroundColor = document.getElementById("selectedColorId").value; //whatever cell is left clicked will become the selected color value
        }
    }
    //////////////////////////////////////////////////////////////
}