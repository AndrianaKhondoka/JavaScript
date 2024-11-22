// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let divJS = document.createElement('div');
divJS.classList.add('wrap');
divJS.classList.add('collapse');
divJS.classList.add('alpha');
divJS.classList.add('beta');
divJS.innerText = 'JavaScript – це високорівнева скриптова мова програмування, яка широко використовується для створення інтерактивних застосунків і сайтів. JS додає анімацію і спливаючі повідомлення, валідує форми, оновлює контент і змушує інтерфейс реагувати на наші дії. Наприклад, наводиш курсор на кнопку, а вона змінює колір (або зникає після натискання). Мова JavaScript робить сторінки функціональними.'
divJS.style.background = 'lightgreen';
divJS.style.color = 'darkmagenta';
divJS.style.fontSize = '32px';
document.body.appendChild(divJS);
console.log(divJS);

let divJSClone = divJS.cloneNode(true);
console.log(divJSClone);
document.body.appendChild(divJSClone);