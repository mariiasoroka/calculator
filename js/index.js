const display = document.querySelector('.display');

document.querySelectorAll('.digits button')
    .forEach( button => button.addEventListener('click', digitPressed));

function digitPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelectorAll('.opers button')
    .forEach( button => button.addEventListener('click', operPressed));

function operPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelectorAll('.point button')
    .forEach( button => button.addEventListener('click', operPressed));

function pointPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelector('.equal').addEventListener('click', calculate);

function calculate() {
    display.value = eval(display.value).toFixed(3);
}

document.querySelector('.clear').addEventListener('click', clearResults);

function clearResults() {
    display.value = '';
}


