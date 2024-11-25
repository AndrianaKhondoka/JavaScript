// створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let userAge = document.getElementById('age');
console.log(userAge);
let button = document.querySelector("button");
console.log(button);
button.onclick = function () {
    console.log(userAge.value);
    if (userAge.value < 18){
       alert(`Ваш вік менше 18 років, реєстрація акаунту неможлива`);
    }
}

