let inputArr = ['input1', 'input2', 'input3', 'input4', 'input5', 'input6', 'input7', 'input8'];
for (let i = 0; i < 8; i++) {
    console.log('event listener connected');
    let inputElem = document.getElementById(inputArr[i]);
    inputElem.addEventListener('oninput', () => {
        console.log('event triggered');
        if (!isNaN(inputElem.oninput)) {
            console.log('if entered');
            console.log(inputElem.value);
            inputElem.value += inputElem.oninput;
            console.log(inputElem.value);
        }
        else {
            console.log('else entered');
            console.log(inputElem.value);
            inputElem.value.substring(0, inputElem.value.legth - 1);
        }
    });
}