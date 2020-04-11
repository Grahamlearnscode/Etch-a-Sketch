////Reset works. Resize number of tiles works. Next is calculate width/height of tile at the point of grid creation based on number of tiles.

const wrapper=document.querySelector('#wrapper');
const gridStyle="display: inline-block; height: 30px; width: 30px;"
//Coloring removed from JS and moved to CSS while working on the resize function
/*"display: inline-block; height: 28px; width: 28px; background-color: grey; border: 1px solid black";*/
//The border ^

createGrid(12, 12);

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
    console.log('creating ' + xGrid + ' x ' + yGrid + ' grid');
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
        
function clearGrid() {
    while (wrapper.firstChild) {wrapper.removeChild(wrapper.firstChild);}}

function resizeGrid() {
    let newSides=prompt('Create new grid: enter number of squares per side');
    if (newSides) {
        newSides=parseFloat(newSides);
        if (Number.isInteger(newSides) && (newSides > 0)) {
            clearGrid();
            createGrid(newSides, newSides);
        }
        else {alert('Invalid number of sides')};
    }
}