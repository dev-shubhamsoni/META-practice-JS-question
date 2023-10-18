const leftContainer = document.getElementById('left-container');
const rightContainer = document.getElementById('right-container');

const inputArea = document.getElementById('input-area');
const inputAddLeft = document.getElementById('input-add-left-container');
const inputAddRight = document.getElementById('input-add-right-container');

const moveLeftToRight = document.getElementById('left-right');
const moveRightToLeft = document.getElementById('right-left');




// Global Variables

let inputAreaData = [];

let leftContainerData = {};
let leftContainerCheckboxes = {};
let leftContainercounter = 0;

let rightContainerData = {};
let rightContainerCheckboxes = {};
let rightContainercounter = 0;


// checks


// Functions

function inputFieldData(event) {
    const inputData = event.target.value;
    inputAreaData.push(inputData)
    console.log(inputAreaData);
    inputArea.value = '';
}

function creatingDivAndAddingToObject(container) {
    const div = document.createElement('div');
    div.className = 'overallDiv';
    div.id = 'overallDiv';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkboxx';
    // checkboxes.push(checkbox);
    div.appendChild(checkbox);

    const heading2 = document.createElement('h2');
    heading2.className = 'heading2';
    heading2.textContent = inputAreaData[0];
    div.appendChild(heading2);

    if (container === leftContainer) {
        leftContainerData[leftContainercounter] = div;
        leftContainerCheckboxes[leftContainercounter] = checkbox;
        leftContainercounter++
    } else {
        rightContainerData[rightContainercounter] = div;
        rightContainerCheckboxes[leftContainercounter] = checkbox;
        rightContainercounter++
    }

    inputAreaData = [];

    console.log('left container data: ', leftContainerData);
    console.log('right container data: ', rightContainerData);

    console.log('left container checkbox: ', leftContainerCheckboxes);
    console.log('right container checkbox: ', rightContainerCheckboxes);

    renderDataLeftOrRight(container)
    // console.log(checkboxes);
}

function renderDataLeftOrRight(container) {

    if (container === leftContainer) {
        for (const key in leftContainerData) {
            container.appendChild(leftContainerData[key]);
            

        }
    } else {
        for (const key in rightContainerData) {
            container.appendChild(rightContainerData[key]);
        }
    }
}

// all event lsiteners

inputArea.addEventListener('change', inputFieldData);

inputAddLeft.addEventListener('click', () => {
    creatingDivAndAddingToObject(leftContainer);
});

inputAddRight.addEventListener('click', () => {
    creatingDivAndAddingToObject(rightContainer);
});


