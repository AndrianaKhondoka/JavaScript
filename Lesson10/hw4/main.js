// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let block = document.getElementById('numberBlock');

let numberValue = +localStorage.getItem('number');
numberValue += 1;
localStorage.setItem('number', numberValue);
block.innerText = numberValue

