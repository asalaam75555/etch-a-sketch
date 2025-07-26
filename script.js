let sides = 16;
let opacity = 0.1;
const containerDiv = document.querySelector('#container');
const randomHsl = (opacity) => `hsla(${Math.random() * 360}, 100%, 50%, ${opacity})`
const changeGrid = document.querySelector('#change-grid');

function removeGrids(){
    containerDiv.innerHTML = '';
}

function buildGrids(sidesCount){
    for (let i = 0; i < sidesCount; i++){
    const newDiv = document.createElement('div');
    newDiv.classList.add('childDiv')
    containerDiv.appendChild(newDiv);
    }
    const newDivs = document.querySelectorAll('.childDiv');
    newDivs.forEach(x => {
    for (let i = 0; i< sidesCount; i++){
        const grandChildDiv = document.createElement('div');
        grandChildDiv.classList.add('grandChild');
        x.appendChild(grandChildDiv);
    }
    })
}

function addFunctionality(opacity){
     const grandChildDivs = document.querySelectorAll('.grandChild');
    grandChildDivs.forEach((x) => {
        x.addEventListener('mouseover', function(e) {
            e.target.style['background-color'] = `${randomHsl(opacity)}`;
            opacity += 0.1;
        })
    });
}

changeGrid.addEventListener('click', function(e) {
    let numberOfGrids = +prompt('please enter the number of grids on sides');
    if (isNaN(numberOfGrids)){
        alert('Please press the button again and enter a valid number to change the grid count.')
        return;
    }
    numberOfGrids = numberOfGrids > 100 ? 100 : numberOfGrids;
    removeGrids();
    buildGrids(numberOfGrids);
    opacity = 0.1;
    addFunctionality(opacity);
})

buildGrids(sides);
addFunctionality(opacity);

