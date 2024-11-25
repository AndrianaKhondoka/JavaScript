// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

let kgWeight = document.getElementById('kg');
console.log(kgWeight);

let lbWeight = document.getElementById('lb');

kgWeight.oninput = function () {
    let kg = +this.value;
    lbWeight.innerText = kg * 2.2046226218487757;
}