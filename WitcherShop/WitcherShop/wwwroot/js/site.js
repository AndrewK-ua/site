
//can be implemented with :hover
function mouseOverPicture(target) {
    console.log(target.tagName);
    target.setAttribute('style', 'opacity: 50%;');
    let button = document.getElementById('button-add1');
    button.setAttribute('style', 'display: block; z-index: 5; user-select: all');
    console.log('onmouseover');
    return target;
}

function mouseOutPicture(target) {
    console.log(target.tagName);
    target.setAttribute('style', 'opacity: 100%;');
    let button = document.getElementById('button-add1');
    button.setAttribute('style', 'display: none; z-index: 1; user-select: none');
    console.log('onmouseout');
    return target;
}