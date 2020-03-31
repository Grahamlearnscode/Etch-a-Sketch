///Creating a grid of multiple divs. Next question is how to do it x times 

const wrapper=document.querySelector('#wrapper');
const gridStyle="display: inline-block; margin-left: 1px; height: 100px; width: 100px; background-color: blue";

createGrid(4, 6);

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
        let singleGrid=document.createElement('div');
        singleGrid.setAttribute('style', gridStyle); //blue squares
        wrapper.appendChild(singleGrid);}}