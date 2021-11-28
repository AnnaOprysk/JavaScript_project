// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id,username,surname,email,phone) {
    this.id = id;
    this.username = username;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let user0 = new User(345,'Anna','Petrenko','ahhsj@gmail.com',380973746565);
console.log(user0);


// створити пустий масив, наповнити його 10 об'єктами new User(....)
let array = [
    new User(340, 'Kira', 'Petrenko', 'ahhsj@gmail.com', 380973746565),
    new User(344, 'Dasha', 'Petrenko', 'ahhsj@gmail.com', 380973746565),
    new User(342, 'Lisa', 'Petrenko', 'ahhsj@gmail.com', 380973746565),
    new User(347, 'Elsa', 'Petrenko', 'ahhsj@gmail.com', 380973746565),
    new User(343, 'Maria', 'Petrenko', 'ahhsj@gmail.com', 380973746565),
    new User(341, 'Anna', 'Petrenko', 'ahhsj@gmail.com', 380973746565),
    new User(346, 'Luda', 'Petrenko', 'ahhsj@gmail.com', 380973746565),
    new User(345, 'Lyana', 'Petrenko', 'ahhsj@gmail.com', 380973746565),
    new User(348, 'Alina', 'Petrenko', 'ahhsj@gmail.com', 380973746565),
    new User(349, 'Marta', 'Petrenko', 'ahhsj@gmail.com', 380973746565)
];

console.log(array);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filter = array.filter((item) => {
    if (item.id % 2 === 0) {
        return item;
    }
});

console.log(filter);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortArray = array.sort((a, b) => a.id - b.id);

console.log(sortArray);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
 }



// створити пустий масив, наповнити його 10 об'єктами Client

let arrayClient = [
    new Client(543, 'Lisa', 'Konovalenko', 'hdhfh@gmail.com', 380976543423,['book','mobile phone','pen']),
    new Client(546, 'Marina', 'Konovalenko', 'hdhfh@gmail.com', 380976543423,['pen']),
    new Client(544, 'Elisaveta', 'Konovalenko', 'hdhfh@gmail.com', 380976543423,['pencil','washing machine','powerbank']),
    new Client(540, 'Kira', 'Konovalenko', 'hdhfh@gmail.com', 380976543423,['backpack','powerbank']),
    new Client(547, 'Karolina', 'Konovalenko', 'hdhfh@gmail.com', 380976543423,['backpack','pen','brush','netbook','lipstick']),
    new Client(541, 'Rita', 'Konovalenko', 'hdhfh@gmail.com', 380976543423,['backpack','pen','lipstick']),
    new Client(542, 'Margo', 'Konovalenko', 'hdhfh@gmail.com', 380976543423,['brush','netbook','lipstick']),
    new Client(545, 'Lilya', 'Konovalenko', 'hdhfh@gmail.com', 380976543423,['plate','glass','brush']),
    new Client(549, 'Ylya', 'Konovalenko', 'hdhfh@gmail.com', 380976543423,['backpack','brush','netbook']),
    new Client(548, 'Tina', 'Konovalenko', 'hdhfh@gmail.com', 380976543423,['backpack','pen','brush','netbook','lipstick','earphones'])
];

console.log(arrayClient);



// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortArrayClient = arrayClient.sort((a, b) => a.order.length - b.order.length);

console.log(sortArrayClient);