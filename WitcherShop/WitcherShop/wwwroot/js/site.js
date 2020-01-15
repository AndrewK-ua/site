let inputArr = ['input1', 'input2', 'input3', 'input4', 'input5', 'input6', 'input7', 'input8'];
let buttonsMinus = ['button-minus1', 'button-minus2', 'button-minus3', 'button-minus4', 'button-minus5',
    'button-minus6', 'button-minus7', 'button-minus8']
let buttonsPlus = ['button-plus1', 'button-plus2', 'button-plus3', 'button-plus4', 'button-plus5',
    'button-plus6', 'button-plus7', 'button-plus8']
let buttonsAdd = ['button-add1', 'button-add2', 'button-add3', 'button-add4', 'button-add5',
    'button-add6', 'button-add7', 'button-add8']
let descrArr = ['inputError1', 'inputError2', 'inputError3', 'inputError4', 'inputError5',
    'inputError6', 'inputError7', 'inputError8'];
let books = [{ title: 'The Last Wish', price: 9.99 }, { title: 'Sword Of Destiny', price: 14.99 },
    { title: 'Blood Of Elves', price: 29.99 }, { title: 'Time Of Contempt', price: 39.99 },
    { title: 'Baptism Of Fire', price: 19.99 }, { title: 'The Tower Of Swallow', price: 24.99 },
    { title: 'The Lady Of The Lake', price: 49.99 }, { title: 'Season Of Storms', price: 89.99 }];

for (let i = 0; i < 8; i++) {
    let error = false;
    let inputElem = document.getElementById(inputArr[i]);
    inputElem.addEventListener('input', () => {
        let count = 0;
        let descrElem = document.getElementById(descrArr[i]);
        for (let j = 0; j < inputElem.value.length; j++) {
            if (isNaN(inputElem.value[j])) {
                descrElem.setAttribute('style', 'display: block');
                error = true;
                break;
            }
            else {
                count++;
            }
        }
        if (count == inputElem.value.length) {
            descrElem.setAttribute('style', 'display: none');
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

    let bag = document.getElementById('bag');
    let buttonAdd = document.getElementById(buttonsAdd[i]);
    buttonAdd.addEventListener('click', () => {
        let inputElem = document.getElementById(inputArr[i]);
        if (error == false) {
            if (Number(inputElem.value) > 0) {
                let title = books[i].title;
                let book = document.getElementById(title);
                let errorElem = document.getElementById('list-error');
                if (bag.innerHTML.indexOf(title) != -1) {
                    let strWithoutPrice = book.innerHTML.slice(0, book.innerHTML.lastIndexOf(' '));
                    let num = Number(strWithoutPrice.replace(/\D+/g, ''));
                    if (num + Number(inputElem.value) <= 99) {
                        num += Number(inputElem.value);
                        let newStr = book.innerHTML.slice(0, book.innerHTML.indexOf(title) +
                            title.length + 2) + String(num) + ' ' + String((books[i].price * String(num)).toFixed(2)) + '$';
                        book.innerHTML = newStr;
                        errorElem.innerHTML = '';
                    }
                    else {
                        errorElem.innerHTML = '*error! you cannot buy more than 99 equal books';
                    }
                }
                else {
                    errorElem.innerHTML = '';
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
    bag.scrollTop = bag.scrollHeight;

    let hideShowBag = document.getElementById('hide-show-bag');
    let showBag = false;
    hideShowBag.addEventListener('click', () => {
        if (showBag == false) {
            hideShowBag.innerHTML = '>>';
            $('#bag').css('opacity', '0.7');
            showBag = true;
        }
        else {
            hideShowBag.innerHTML = '<<';
            $('#bag').css('opacity', '0');
            showBag = false;
        }
    });
}