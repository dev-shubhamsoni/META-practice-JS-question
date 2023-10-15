const leftContainer = document.getElementById('left-container');
const rightContainer = document.getElementById('right-container');

const inputArea = document.getElementById('input-area');
const inputAddLeft = document.getElementById('input-add-left');
const inputAddRight = document.getElementById('input-add-right');

const moveLeftToRight = document.getElementById('left-right')
const moveRightToLeft = document.getElementById('right-left')
// Global Variables
let globalArray = [];
let leftContainerArray = [];
let rightContainerArray = [];

let checkboxArray = [];

let checkboxDivCount = 0;



// all Functions
function addingToArray(event) {
    globalArray.push(event.target.value);
}

function addItemsToContainer(container, bothContainerArray, render) {
    const div = document.createElement('div');
    div.className = 'div-text-checkbox';
    div.id = `div-${checkboxDivCount}`;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = checkboxDivCount;
    
    checkboxDivCount++;

    const text = document.createElement('h2');
    text.className = 'text';
    text.textContent = globalArray[0];

    div.appendChild(checkbox);
    div.appendChild(text);
    bothContainerArray.push(div)
    render(container)
    

    globalArray = [];
    inputArea.value = '';

    console.log(div.id);
}


function renderLeft(container) {
    
    leftContainerArray.forEach((item) => {
        container.appendChild(item);
            // console.log(container);
    })


}

function renderRight(container) {
    rightContainerArray.forEach((item) => {
        container.appendChild(item);
    })

    

}

function movingItems() {
    
    for (let i = 0; i < checkboxArray.length; i++) {
        
        let divId = document.getElementById(`div-${checkboxArray[i]}`);
        divId.remove();
        rightContainerArray.push(divId)
        renderRight(rightContainer)

        
        const indexxxx = leftContainerArray.indexOf(checkboxArray[i]);
        const finalLeftContainerArray = leftContainerArray.splice(indexxxx, 1);
        leftContainerArray = finalLeftContainerArray;
    }
    
    checkboxArray = [];
    console.log(checkboxArray);    
}

// all Event Listeners
inputArea.addEventListener('change', addingToArray);

inputAddLeft.addEventListener('click', () => addItemsToContainer(leftContainer, leftContainerArray, renderLeft));
inputAddRight.addEventListener('click', () => addItemsToContainer(rightContainer, rightContainerArray, renderRight));

document.addEventListener('change', (event) => {
    if (event.target.checked) {
        checkboxArray.push(event.target.id)
        console.log(event.target.id, event.target.checked);
        console.log(checkboxArray);


    }
    else if (!event.target.checked) {
        const index = checkboxArray.indexOf(event.target.id);
        if (index !== -1) {
            checkboxArray.splice(index, 1);
            console.log(checkboxArray);
        }
    }
});




moveLeftToRight.addEventListener('click', movingItems)
moveRightToLeft.addEventListener('click', movingItems)

moveRightToLeft.addEventListener('click', () => {
    console.log(leftContainerArray);

    console.log(rightContainerArray);
})

