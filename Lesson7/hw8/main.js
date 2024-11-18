// створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
class Prince {
    constructor(name, age, shoes) {
        this.name = name;
        this.age = age;
        this.shoes = shoes;
    }
}

let cindrellas = [
    new Cinderella('olga', 20, 35),
    new Cinderella('vika', 25, 37),
    new Cinderella('tetiana', 18, 36),
    new Cinderella('sofia', 23, 34),
    new Cinderella('adel', 19, 35),
    new Cinderella('alice', 22, 36),
    new Cinderella('emilia', 24, 37),
    new Cinderella('ksusha', 21, 38),
    new Cinderella('arnella', 18, 35),
    new Cinderella('lubov', 24, 35),
];
console.log(cindrellas);
let prince = new Prince('oleksandr', 25, 34);
console.log(prince);
for (const cindrella of cindrellas) {
    if (cindrella.footSize === prince.shoes) {
        console.log(cindrella);
    }
};
let princess = cindrellas.find(cindrella => cindrella.footSize === prince.shoes);
console.log(princess);