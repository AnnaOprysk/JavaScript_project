
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


function Carr(model, producer, yearOfIssue, maximumSpeed, engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.yearOfIssue = yearOfIssue;
    this.maximumSpeed = maximumSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maximumSpeed} на годину`);
    };
    this.info = function () {
        for (let item in this) {
            if (typeof this[item] !== 'function')
                console.log(`${item} - ${this[item]}`)
        }
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maximumSpeed = this.maximumSpeed + newSpeed;
    };
    this.changeYear = function (newValue) {
        this.yearOfIssue = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };
}
let BMW3 = new Carr('320i', 'BMW', 2020, 230, '2.0');
console.log(BMW3);
BMW3.drive();
BMW3.info();
BMW3.increaseMaxSpeed(20);
BMW3.changeYear(2021);
BMW3.addDriver('Anton');
console.log(BMW3);




// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.

class Car {
    constructor(model, producer, yearOfIssue, maximumSpeed, engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.yearOfIssue = yearOfIssue;
        this.maximumSpeed = maximumSpeed;
        this.engineCapacity = engineCapacity;
    }
}

// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class NewCar extends Car {
    constructor(model, producer, yearOfIssue, maximumSpeed, engineCapacity) {
        super(model, producer, yearOfIssue, maximumSpeed, engineCapacity);
    }
    drive(){
        console.log(`Їдемо зі швидкістю ${this.maximumSpeed} на годину`) ;
    }
    info(){
        for (let item in this) {
            console.log(`${item} - ${this[item]}`)
        }
    }
    increaseMaxSpeed (newSpeed){
        this.maximumSpeed = this.maximumSpeed + newSpeed;
        console.log(this.maximumSpeed)
    }
    changeYear (newValue){
        this.yearOfIssue = newValue;
        console.log(newValue);
    }
    addDriver (driver){
        this.driver = driver;
        console.log(driver);
    }
}

let BMW = new NewCar('320i', 'BMW', 2020, 230, '2.0');
console.log(BMW);
BMW.drive();
BMW.info();
BMW.increaseMaxSpeed(20);
BMW.changeYear(2021);
BMW.addDriver('Anton');
console.log(BMW);




// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }

}

let arrayCinderella = [
    new Cinderella('Ilona', 22, 37),
    new Cinderella('Irina', 21, 38),
    new Cinderella('Elisa', 22, 37),
    new Cinderella('Lola', 26, 39),
    new Cinderella('Ermina', 23, 36),
    new Cinderella('Beata', 20, 37),
    new Cinderella('Stella', 19, 38),
    new Cinderella('Lucia', 25, 35),
    new Cinderella('Rita', 24, 40),
    new Cinderella('Marina', 21, 36)
];
console.log(arrayCinderella);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, shoeFind) {
        this.name = name;
        this.age = age;
        this.shoeFind = shoeFind;
    }
}

let prince1 = new Prince('Viktor', 30, 35);
console.log(prince1);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let findCiderella = (arrayCinderella,Prince) => {
    for (let girl of arrayCinderella) {
     if (girl.footSize===Prince.shoeFind) {
         console.log(`Your Cinderella is: ${girl.name}`);
     }
    }
};

findCiderella(arrayCinderella, prince1);



//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let findCinderella2= (arrayCinderella,prince)=> arrayCinderella.find(value => value.footSize === prince.shoeFind);

console.log(findCinderella2(arrayCinderella,prince1));