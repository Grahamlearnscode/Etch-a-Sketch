///Make the grid squares change colour on hover. Doing it with class and css pseudo-class doesn't work, it gets overwritten with element.style

const wrapper=document.querySelector('#wrapper');
const gridStyle="display: inline-block; margin-left: 1px; height: 30px; width: 30px;";

createGrid(16, 16);

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
        ///Not sure if this classlist is needed
        singleGrid.classList.add('singleGrid');
        singleGrid.setAttribute('style', gridStyle); //blue squares
        wrapper.appendChild(singleGrid);}}