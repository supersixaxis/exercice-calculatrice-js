let number1 = document.getElementById('number1')
let number2 = document.getElementById('number2')
let button = document.querySelector('button')
let operationSelect = document.getElementById('operation');
let showCalculate = document.getElementById('show')
let hideCalculate = document.getElementById('hide')
let infos = document.getElementById('infos')
let result;
let form = document.querySelector('form')
form.style.backgroundColor = 'blue'
form.style.height = '100px'

button.addEventListener('click', (event) => {
    event.preventDefault();

    if (operationSelect.value === 'addition'){
        result = parseInt(number1.value) + parseInt(number2.value);
        alert(`${number1.value} + ${number2.value} = ${result}`)
    } else if (operationSelect.value === 'soustraction'){
        result = parseInt(number1.value) - parseInt(number2.value);
        alert(`${number1.value} - ${number2.value} = ${result}`)
    } else if(operationSelect.value === 'multiplication') {
        result = parseInt(number1.value) * parseInt(number2.value);
        alert(`${number1.value} * ${number2.value} = ${result}`)
    } else if(operationSelect.value === 'division') {
        result = parseInt(number1.value) / parseInt(number2.value);
        alert(`${number1.value} / ${number2.value} = ${result}`)
    }
})

function formVisibility() {
    if (form.style.display === 'none') {
        form.style.display = 'block'
    } else {
        form.style.display = 'none'
    }
}

function showInfo(message) {
    infos.style.backgroundColor = 'yellow';
    infos.innerHTML = message;
}

function hideInfo() {
    infos.style.backgroundColor = '';
    infos.innerHTML = '';
}

showCalculate.addEventListener('click', formVisibility);
hideCalculate.addEventListener('click', formVisibility);

number1.addEventListener('mouseenter', () => {
    showInfo('Saisir un chiffre');
})
number1.addEventListener('mouseleave', hideInfo)

number2.addEventListener('mouseenter', () => {
    showInfo('Saisir un chiffre');
})
number2.addEventListener('mouseleave', hideInfo)

operationSelect.addEventListener('mouseenter', () => {
    showInfo('Sélectionner une opération : +, -, *, /');
})
operationSelect.addEventListener('mouseleave', hideInfo)