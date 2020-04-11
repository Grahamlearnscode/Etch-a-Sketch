////Grid is dynamic and will set height/width based on number of tiles

const wrapper=document.querySelector('#wrapper');
let tileHeight="height: 30px;";
let tileWidth="width: 30px;";
let gridStyle="display: inline-block;" + tileHeight + tileWidth;

//Coloring removed from JS and moved to CSS while working on the resize function
/*"display: inline-block; height: 28px; width: 28px; background-color: grey; border: 1px solid black";*/
//The border ^

createGrid(16, 16);

let tiles = document.querySelectorAll('.tile');
tiles.forEach(tile => tile.onmouseover=function (){inkTile()});

/*hoveredTile.setAttribute('style', 'display: inline-block; height: 30px; width: 30px; background-color: blue');
console.log(hoveredTile);*/


function inkTile() {
    console.log('inking tile');
    ////Thisv. How to tell it what 'tile' is.
    ///*tile.setAttribute('style', 'display: inline-block; height: 30px; width: 30px; background-color: darkblue');*/
}

function createGrid(xGrid, yGrid) {
    console.log('creating ' + xGrid + ' x ' + yGrid + ' grid at ' + tileHeight + tileWidth);
    ///repeat y times
    for (y=0; y<yGrid; y++) {
        createXGrid(xGrid);
        const br=document.createElement('br');
        wrapper.appendChild(br);
        }
    }

    function createXGrid(xGrid) {
        for (x=0; x<xGrid; x++) {
            let tile=document.createElement('div');
            tile.classList.add('tile');
            tile.setAttribute('style', gridStyle); //blue squares
            wrapper.appendChild(tile);}}

////Called on click the 'reset and resize' button
function resizeGrid() {
    let newSides=prompt('Create new grid: enter number of squares per side \n (minimum 2, maximum 80)');
    if (newSides) {
        newSides=parseFloat(newSides);
        if (Number.isInteger(newSides) && (newSides > 1) && (newSides < 81)) {
            clearGrid();
            tileHeight="height: " + (480/newSides) +"px;";
            tileWidth="width: " + (480/newSides) +"px;";
            gridStyle="display: inline-block;" + tileHeight + tileWidth;
            createGrid(newSides, newSides);
        }
        else {alert('Invalid number of sides')};
    }
}

    function clearGrid() {
        while (wrapper.firstChild) {wrapper.removeChild(wrapper.firstChild);}}