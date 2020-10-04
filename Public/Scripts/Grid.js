let totalRows = 22;
let totalCols = 47;

function createGrid(rows, cols) {
   let grid = "<table>";
   for( let row = 0; row < rows; row++) {
      grid += "<tr>";
      for( let col = 0; col < cols; col++) {
         grid += "<td></td>";
      }
      grid += "</tr>";
   }
   grid += "</table>";
   return grid; 
}

let finalGrid = createGrid(totalRows, totalCols);

document.getElementById("tableContainer").innerHTML = finalGrid;