// let number1 = document.getElementById('number1')
// let number2 = document.getElementById('number2')
// let button = document.querySelector('button')
// let operationSelect = document.getElementById('operation');
// let showCalculate = document.getElementById('show')
// let hideCalculate = document.getElementById('hide')
// let infos = document.getElementById('infos')
// let result;
// let form = document.querySelector('form')
// form.style.backgroundColor = 'blue'
// form.style.height = '100px'

// button.addEventListener('click', (event) => {
//     event.preventDefault();

//     if (operationSelect.value === 'addition'){
//         result = parseInt(number1.value) + parseInt(number2.value);
//         alert(`${number1.value} + ${number2.value} = ${result}`)
//     } else if (operationSelect.value === 'soustraction'){
//         result = parseInt(number1.value) - parseInt(number2.value);
//         alert(`${number1.value} - ${number2.value} = ${result}`)
//     } else if(operationSelect.value === 'multiplication') {
//         result = parseInt(number1.value) * parseInt(number2.value);
//         alert(`${number1.value} * ${number2.value} = ${result}`)
//     } else if(operationSelect.value === 'division') {
//         result = parseInt(number1.value) / parseInt(number2.value);
//         alert(`${number1.value} / ${number2.value} = ${result}`)
//     }
// })

// function formVisibility() {
//     if (form.style.display === 'none') {
//         form.style.display = 'block'
//     } else {
//         form.style.display = 'none'
//     }
// }

// function showInfo(message) {
//     infos.style.backgroundColor = 'yellow';
//     infos.innerHTML = message;
// }

// function hideInfo() {
//     infos.style.backgroundColor = '';
//     infos.innerHTML = '';
// }

// showCalculate.addEventListener('click', formVisibility);
// hideCalculate.addEventListener('click', formVisibility);

// number1.addEventListener('mouseenter', () => {
//     showInfo('Saisir un chiffre');
// })
// number1.addEventListener('mouseleave', hideInfo)

// number2.addEventListener('mouseenter', () => {
//     showInfo('Saisir un chiffre');
// })
// number2.addEventListener('mouseleave', hideInfo)

// operationSelect.addEventListener('mouseenter', () => {
//     showInfo('Sélectionner une opération : +, -, *, /');
// })
// operationSelect.addEventListener('mouseleave', hideInfo)

// Exercice bonus //

// let spoiler = document.querySelector('.hiddenText');
// let button = document.querySelector('button');

// console.log(spoiler);
// console.log(button);
// // buttonHide = false;
// button.addEventListener('click', (e) => {
//     // if(buttonHide === false){
//     //     spoiler.style.display = "block"
//     //     buttonHide = true;
//     // } else if (buttonHide === true){
//     //     spoiler.style.display = "none"
//     //         buttonHide = false;
   
//     // } 
//     // OU //
    
//     if (spoiler.style.display === 'none') {
//         spoiler.style.display = 'block'
//     } else {
//         spoiler.style.display = 'none'
//     }
// })

// Exercice bonus 2 //

let btn1 = document.querySelector('#onglet1');
let btn2 = document.querySelector('#onglet2');
let btn3 = document.querySelector('#onglet3');
let content1 = document.querySelector('.content1');
let content2 = document.querySelector('.content2');
let content3 = document.querySelector('.content3');

let btns = document.querySelectorAll('#onglet1, #onglet2, #onglet3');
let contents = document.querySelectorAll('.content1, .content2, .content3');
console.log(btns)


// btn1.addEventListener('click', (e) => {
//     content1.style.display='block'
//     content2.style.display='none'
//     content3.style.display='none'
// })

// btn2.addEventListener('click', (e) => {
//     content1.style.display='none'
//     content2.style.display='block'
//     content3.style.display='none'
// })

// btn3.addEventListener('click', (e) => {
//     content1.style.display='none'
//     content2.style.display='none'
//     content3.style.display='block'
// })


for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        for (let j = 0; j < contents.length; j++) {
            if (i === j) {
                contents[j].style.display = 'block';
            } else {
                contents[j].style.display = 'none';
            }
        }
    })
}


// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log(`Bouton ${btn.id} cliqué`);
        
//     });
// });