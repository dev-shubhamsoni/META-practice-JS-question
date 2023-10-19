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
// let leftContainerCheckboxes = [];
// let leftContainercounter = 0;

let rightContainerData = {};

let checkboxArray = [];
// let rightContainercounter = 0;

let idCounter = 0;



// checks


// Functions


function inputFieldData(event) {
    const inputData = event.target.value;
    inputAreaData.push(inputData)
    console.log(inputAreaData);

    inputArea.value = '';
}

function creatingDivAndAddingToObject(container, data) {
    const div = document.createElement('div');
    div.className = 'overallDiv';
    div.id = `divID${idCounter}`;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkboxx';
    checkbox.id = idCounter;
    // checkboxes.push(checkbox);
    div.appendChild(checkbox);

    const heading2 = document.createElement('h2');
    heading2.className = 'heading2';
    heading2.textContent = inputAreaData[0];
    div.appendChild(heading2);

    if (container === leftContainer) {
        leftContainerData[idCounter] = div;
        // leftContainercounter++
        idCounter++
    } else {
        rightContainerData[idCounter] = div;
        // rightContainercounter++
        idCounter++
    }

    inputAreaData = [];

    console.log('left container data: ', leftContainerData);
    console.log('right container data: ', rightContainerData);

    renderDataLeftOrRight(container, data)
}

function renderDataLeftOrRight(container, data) {

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    if (container === leftContainer) {
        for (const key in leftContainerData) {
            container.appendChild(data[key]);
            const checkbox = leftContainerData[key].querySelector('.checkboxx');
            checkbox.checked = false;
            checkboxArray = [];

        }

    } else {
        for (const key in rightContainerData) {
            container.appendChild(data[key]);
            const checkbox = rightContainerData[key].querySelector('.checkboxx');
            checkbox.checked = false;
            checkboxArray = [];
        }
    }
}

function movingLeftToRight() {
    for (let i = 0; i < checkboxArray.length; i++) {
        console.log(checkboxArray[i]);

        let keyToRemove = checkboxArray[i]
        let valueToMove = leftContainerData[keyToRemove]
        rightContainerData[keyToRemove] = valueToMove;
        delete leftContainerData[keyToRemove];

    }
    console.log('left container data after moving: ', leftContainerData);
    console.log('right container data after moving: ', rightContainerData);
    renderDataLeftOrRight(leftContainer, leftContainerData);
    renderDataLeftOrRight(rightContainer, rightContainerData);

}

function movingRightToLeft() {
    for (let i = 0; i < checkboxArray.length; i++) {
        console.log(checkboxArray[i]);
        let keyToRemove = checkboxArray[i]
        let valueToMove = rightContainerData[keyToRemove]

        leftContainerData[keyToRemove] = valueToMove;

        delete rightContainerData[keyToRemove];
        // console.log(rightContainerData);
    }
    console.log('left container data after moving: ', leftContainerData);
    console.log('right container data after moving: ', rightContainerData);
    renderDataLeftOrRight(leftContainer, leftContainerData);
    renderDataLeftOrRight(rightContainer, rightContainerData);
}


function checkboxCheckOrNot(event) {
    if (event.target.checked) {
        checkboxArray.push(event.target.id)
        console.log(event.target.id, event.target.checked);
        console.log(checkboxArray);
    } else if (!event.target.checked) {
        const index = checkboxArray.indexOf(event.target.id);
        if (index !== -1) {
            checkboxArray.splice(index, 1);
            console.log(checkboxArray);
        }
    }

}

// all event lsiteners

inputArea.addEventListener('change', inputFieldData);

inputArea.addEventListener('input', function () {
    if (inputArea.value.trim() === '') {
        inputAddLeft.disabled = true;
        inputAddRight.disabled = true;
    } else {
        inputAddLeft.disabled = false;
        inputAddRight.disabled = false;
    }
});

inputAddLeft.addEventListener('click', () => {
    creatingDivAndAddingToObject(leftContainer, leftContainerData);
});

inputAddRight.addEventListener('click', () => {
    creatingDivAndAddingToObject(rightContainer, rightContainerData);
});


document.addEventListener('change', checkboxCheckOrNot)



moveLeftToRight.addEventListener('click', movingLeftToRight)
moveRightToLeft.addEventListener('click', movingRightToLeft)
