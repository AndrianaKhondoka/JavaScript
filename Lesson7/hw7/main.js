// (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car {
    constructor(model, producer, year, maxSpeed, volumeOfEngine) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volumeOfEngine = volumeOfEngine;
    }
    drive (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    info (){
        for (const key in this) {
            console.log(key, this[key]);
        }
    };
    increaseMaxSpeed (newSpeed){
        if (newSpeed > 0)this.maxSpeed = this.maxSpeed + newSpeed;
    };
    changeYear (newYear){
        if (newYear !==2023 && newYear > 2016 && newYear < 2025)this.year = newYear;
    };
    addDriver (driver){
        if (driver)this.driver = driver;
    };
}
let car = new Car('Kodiak', 'SAIC Volkswagen Skoda', 2023, 190, 2.0);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(10);
car.changeYear(2021);
car.addDriver({name: 'viktor', surname: 'figel'});
console.log(car);
