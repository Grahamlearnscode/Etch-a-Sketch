///Creating a grid of multiple divs. Next question is how to do it x times 

const wrapper=document.querySelector('#wrapper');
const gridStyle="display: inline-block; margin-left: 1px; height: 100px; width: 100px; background-color: blue";

createGrid(16, 16);

function createGrid(xGrid, yGrid) {
    console.log('creating ' + xGrid + ' x ' + yGrid + ' grid');


    let singleGrid=document.createElement('div');
    singleGrid.setAttribute('style', gridStyle); //blue squares
    console.log('adding grid');
    wrapper.appendChild(singleGrid);
    let secondGrid=document.createElement('div');
    secondGrid.setAttribute('style', gridStyle);
    wrapper.appendChild(secondGrid);
}