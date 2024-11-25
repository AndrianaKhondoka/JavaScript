// Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let button = document.querySelector('button');
let text = document.getElementById('text');
button.onclick = function () {
    text.remove();
}
