////line 101 onwards, toggling between standard ink and gradient

const wrapper=document.querySelector('#wrapper');
let tileHeight="height: 30px;"; //default size for initial 16x16 grid
let tileWidth="width: 30px;";   //default size for initial 16x16 grid
let gridStyle="display: inline-block; background-color: #ddd;" + tileHeight + tileWidth;
let gridSides=16;
let instructionHidden=0;
let tileOpacity=0;
let drawMode=document.getElementById("drawMode").value;



createGrid(16, 16); //create initial grid on page load

//ink tiles on mouseover
function inkTile() {
    ////check dropdown
    if (drawMode=="Standard") {
        standardInkTile();
    }
    else {
        gradientInkTile();
    }
    ////call standardInkTile() or
    ////call gradientInkTile()
}

//standard ink tiles on mouseover
function standardInkTile()
{ 
    tileToInk=event.target;
    tileToInk.setAttribute('style', 'display: inline-block; background-color: #222;' + tileHeight + tileWidth);
    hideInstruction(); //applies on first mouseover only
        function hideInstruction() {
            if (!instructionHidden){
        document.querySelector('#instruction').setAttribute('style', 'display:none;');
        instructionHidden=1;}}
}

//gradient ink tiles on mouseover
function gradientInkTile() { 
    tileToInk=event.target;
    tileOpacity = Number(tileToInk.getAttribute("tileOpacity"));
    tileToInk.setAttribute('tileOpacity',(tileOpacity+=0.1));
    tileToInk.setAttribute('style', 'display: inline-block; background-color: #000066; opacity: ' + tileOpacity + ';' + tileHeight + tileWidth);
    hideInstruction(); //applies on first mouseover only
        function hideInstruction() {
            if (!instructionHidden){
        document.querySelector('#instruction').setAttribute('style', 'display:none;');
        instructionHidden=1;}}
}

//Create row, repeat y times
function createGrid(xGrid, yGrid) {
    console.log('creating ' + xGrid + ' x ' + yGrid + ' grid at ' + tileHeight + tileWidth);
    for (y=0; y<yGrid; y++) {
        createXGrid(xGrid);
        const br=document.createElement('br');
        wrapper.appendChild(br);
        }
    updateSizeIndicator();
        function updateSizeIndicator() {
            let sizeIndicator=document.getElementById('sizeIndicator');
            sizeIndicator.innerHTML=xGrid + 'x' + yGrid;}
    }

    //Create one row
    function createXGrid(xGrid) {
        for (x=0; x<xGrid; x++) {
            let tile=document.createElement('div');
            tile.classList.add('tile');
            tile.setAttribute('style', gridStyle);
            tile.setAttribute('onmouseover', 'inkTile()');
            tile.setAttribute('tileOpacity', 0);
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
            gridSides=newSides;
            return newSides;
        }
        else {alert('Invalid number of sides')};
    }
}

    function clearGrid() {
        while (wrapper.firstChild) {wrapper.removeChild(wrapper.firstChild);
        instructionHidden=1;}
        tileOpacity=0;
        return tileOpacity;
    }

//'clear grid' button
function resetGrid() {
    clearGrid();
    createGrid(gridSides, gridSides);
}

//'drawing mode' select box
function updateDrawingMode () {
    ////get the current value of the dropdown and store it in a variable
    drawMode=document.getElementById("drawMode").value;
}

/*
function toggleDrawMode() {
//code to check what draw type previously was, amend it, update UI;
drawMode=document.getElementById("drawMode").value;
//does this need to be a toggle and reset? Not sure, could do it on the fly perhaps?
resetGrid();
}*/
