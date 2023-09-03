document.addEventListener("DOMContentLoaded", function() {
    
    const gridContainer = document.querySelector(".design-box");
    const widthControl = document.getElementById("grid-width-control");
    const heightControl = document.getElementById("grid-height-control");
    const applyGridButton = document.getElementById("apply-grid");
    const colorPicker = document.getElementById("color-picker");
    const drawButton = document.getElementById("draw-btn");
    const eraseButton = document.getElementById("delete-btn");
    const refreshButton = document.getElementById("refresh-grid");

    applyGridButton.addEventListener("click", createGrid);
    drawButton.addEventListener("click", enableDrawing);
    eraseButton.addEventListener("click", enableErasing);
    refreshButton.addEventListener("click", clearGrid);

    function createGrid() {
        clearGrid();
        
        const rows = heightControl.value;
        const cols = widthControl.value;

        for (let i = 0; i < rows; i++) {
            const row = document.createElement("div");
            row.classList.add("design-line");

            for (let j = 0; j < cols; j++) {
                const cell = document.createElement("div");
                cell.classList.add("design-square");
                row.appendChild(cell);
            }
            gridContainer.appendChild(row);
        }
    }

    function enableDrawing() {
        gridContainer.addEventListener("mouseover", paintCell);
    }

    function enableErasing() {
        gridContainer.addEventListener("mouseover", eraseCell);
    }

    function paintCell(event) {
        if (event.target.classList.contains("design-square")) {
            event.target.style.backgroundColor = colorPicker.value;
        }
    }

    function eraseCell(event) {
        if (event.target.classList.contains("design-square")) {
            event.target.style.backgroundColor = "transparent";
        }
    }

    function clearGrid() {
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
        }
    }
});
