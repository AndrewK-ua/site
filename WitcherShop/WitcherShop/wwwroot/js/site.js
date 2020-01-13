let inputArr = ['input1', 'input2', 'input3', 'input4', 'input5', 'input6', 'input7', 'input8'];
let buttonsMinus = ['button-minus1', 'button-minus2', 'button-minus3', 'button-minus4', 'button-minus5',
    'button-minus6', 'button-minus7', 'button-minus8']
let buttonsPlus = ['button-plus1', 'button-plus2', 'button-plus3', 'button-plus4', 'button-plus5',
    'button-plus6', 'button-plus7', 'button-plus8']
let buttonsAdd = ['button-add1', 'button-add2', 'button-add3', 'button-add4', 'button-add5',
    'button-add6', 'button-add7', 'button-add8']
let descrArr = ['inputError1', 'inputError2', 'inputError3', 'inputError4', 'inputError5',
    'inputError6', 'inputError7', 'inputError8'];
//let booksTitles = ['The Last Wish', 'Sword Of Destiny', 'Blood Of Elves', 'Time Of Contempt',
//    'Baptism Of Fire', 'The Tower Of Swallow', 'The Lady Of The Lake', 'Season Of Storms'];
//let booksPrices = [9.99, 14.99, 29.99, 39.99, 19.99, 24.99, 49.99, 89.99];

let books = [{ title: 'The Last Wish', price: 9.99 }, { title: 'Sword Of Destiny', price: 14.99 },
    { title: 'Blood Of Elves', price: 29.99 }, { title: 'Time Of Contempt', price: 39.99 },
    { title: 'Baptism Of Fire', price: 19.99 }, { title: 'The Tower Of Swallow', price: 24.99 },
    { title: 'The Lady Of The Lake', price: 49.99 }, { title: 'Season Of Storms', price: 89.99 }];
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
                let title = books[i].title;
                let bag = document.getElementById('bag');
                if (bag.innerHTML.indexOf(title) != -1) {
                    let strWithoutPrice = document.getElementById(title).innerHTML.slice(0, document.getElementById(title).innerHTML.lastIndexOf(' '));
                    let num = Number(strWithoutPrice.replace(/\D+/g, ''));
                    if (num + Number(inputElem.value) <= 99) {
                        num += Number(inputElem.value);
                        let newStr = document.getElementById(title)
                            .innerHTML.slice(0, document.getElementById(title).innerHTML.indexOf(title)
                                + title.length + 2) + String(num) + ' ' + String((books[i].price * String(num)).toFixed(2)) + '$';
                        document.getElementById(title).innerHTML = newStr;
                        document.getElementById('list-error').innerHTML = '';
                    }
                    else {
                        document.getElementById('list-error').innerHTML = 'error! you cannot buy more than 99 equal books';
                    }
                }
                else {
                    let liLast = document.createElement('li');
                    liLast.setAttribute('class', 'bag-list-item');
                    liLast.innerHTML = title + ': ' + inputElem.value + ' ';
                    books.forEach((item, index, books) => {
                        if (item.title == title) {
                            liLast.innerHTML += String((item.price * Number(inputElem.value)).toFixed(2)) + '$';
                        }
                    });
                    liLast.setAttribute('id', title);
                    bag.append(liLast);
                }
            }
        }
    });
}