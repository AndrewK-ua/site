let inputArr = ['input1', 'input2', 'input3', 'input4', 'input5', 'input6', 'input7', 'input8'];
let buttonsMinus = ['button-minus1', 'button-minus2', 'button-minus3', 'button-minus4', 'button-minus5',
    'button-minus6', 'button-minus7', 'button-minus8']
let buttonsPlus = ['button-plus1', 'button-plus2', 'button-plus3', 'button-plus4', 'button-plus5',
    'button-plus6', 'button-plus7', 'button-plus8']
let buttonsAdd = ['button-add1', 'button-add2', 'button-add3', 'button-add4', 'button-add5',
    'button-add6', 'button-add7', 'button-add8']
let descrArr = ['inputError1', 'inputError2', 'inputError3', 'inputError4', 'inputError5',
    'inputError6', 'inputError7', 'inputError8'];
let booksTitles = ['The Last Wish', 'Sword Of Destiny', 'Blood Of Elves', 'Time Of Contempt',
    'Baptism Of Fire', 'The Tower Of Swallow', 'The Lady Of The Lake', 'Season Of Storms'];
for (let i = 0; i < 8; i++) {
    let error = false;
    let inputElem = document.getElementById(inputArr[i]);
    inputElem.addEventListener('input', () => {
        let count = 0;
        for (let j = 0; j < inputElem.value.length; j++) {
            if (isNaN(inputElem.value[j])) {
                document.getElementById(descrArr[i]).setAttribute('style', 'display: block');
                error = true;
                break;
            }
            else {
                count++;
            }
        }
        if (count == inputElem.value.length) {
            document.getElementById(descrArr[i]).setAttribute('style', 'display: none');
            error = false;
        }
    });

    let buttonMinus = document.getElementById(buttonsMinus[i]);
    buttonMinus.addEventListener('click', () => {
        if (error == false) {
            let inputElem = document.getElementById(inputArr[i]);
            if (Number(inputElem.value) > 0) {
                let bookNumber = Number(inputElem.value);
                bookNumber--;
                inputElem.value = String(bookNumber);
            }
        }
    });

    let buttonPlus = document.getElementById(buttonsPlus[i]);
    buttonPlus.addEventListener('click', () => {
        if (error == false) {
            let inputElem = document.getElementById(inputArr[i]);
            let bookNumber = Number(inputElem.value);
            if (bookNumber < 99) {
                bookNumber++;
                inputElem.value = String(bookNumber);
            }
        }
    });

    let buttonAdd = document.getElementById(buttonsAdd[i]);
    buttonAdd.addEventListener('click', () => {
        let inputElem = document.getElementById(inputArr[i]);
        if (error == false) {
            if (Number(inputElem.value) > 0) {
                let liLast = document.createElement('li');
                let title = booksTitles[i];
                let bag = document.getElementById('bag');
                console.log(bag.innerHTML);
                if (bag.innerHTML.indexOf(title) != -1) {

                }
                else {
                    liLast.innerHTML = title + ':' + inputElem.value;
                    bag.append(liLast);
                }
            }
        }
    });
}