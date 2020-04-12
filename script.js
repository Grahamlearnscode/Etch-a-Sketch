
const wrapper=document.querySelector('#wrapper');
let tileHeight="height: 30px;"; //default size for initial 16x16 grid
let tileWidth="width: 30px;";   //default size for initial 16x16 grid
let gridStyle="display: inline-block; background-color: #ddd;" + tileHeight + tileWidth;
let newSides=16;

createGrid(16, 16); //create initial grid on page load

//ink tiles on mouseover
function inkTile() { 
        tileToInk=event.target;
        tileToInk.setAttribute('style', 'display: inline-block; background-color: darkblue;' + tileHeight + tileWidth);
    }

//Create row, repeat y times
function createGrid(xGrid, yGrid) {
    console.log('creating ' + xGrid + ' x ' + yGrid + ' grid at ' + tileHeight + tileWidth);
    for (y=0; y<yGrid; y++) {
        createXGrid(xGrid);
        const br=document.createElement('br');
        wrapper.appendChild(br);
        }
    }

    //Create one row
    function createXGrid(xGrid) {
        for (x=0; x<xGrid; x++) {
            let tile=document.createElement('div');
            tile.classList.add('tile');
            tile.setAttribute('style', gridStyle);
            tile.setAttribute('onmouseover', 'inkTile()');
            wrapper.appendChild(tile);}
        }

//'reset and resize' button
function resizeGrid() { 
    newSides=prompt('Create new grid: enter number of squares per side \n (minimum 2, maximum 80)', 16);
    if (newSides) {
        newSides=parseFloat(newSides);
        if (Number.isInteger(newSides) && (newSides > 1) && (newSides < 81)) {
            clearGrid();
            tileHeight="height: " + (480/newSides) +"px;";
            tileWidth="width: " + (480/newSides) +"px;";
            gridStyle="display: inline-block; background-color: #ddd;" + tileHeight + tileWidth;
            createGrid(newSides, newSides);
        }
        else {alert('Invalid number of sides')};
    }
    return newSides;
}

    function clearGrid() {
        while (wrapper.firstChild) {wrapper.removeChild(wrapper.firstChild);}}

//'clear grid' button
function resetGrid() {
    clearGrid();
    createGrid(newSides, newSides);
}