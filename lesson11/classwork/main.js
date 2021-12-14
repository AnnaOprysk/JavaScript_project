// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.



for (const user of users) {
    let div = document.createElement('div');
    div.innerText = user.name + ',' + user.age + ',' + user.status;
    let btn = document.createElement('button');
    btn.innerText = 'Add to favorites';
    div.appendChild(btn);
    document.body.appendChild(div);
    btn.onclick=function () {
       let favorites= JSON.parse(localStorage.getItem('favorites')) || [];
        favorites.push(user);
        localStorage.setItem('favorites', JSON.stringify(favorites));
}
}


let btn2 = document.createElement('button');
btn2.innerText = 'Go to favorites';
btn2.onclick=function () {
    window.open('http://localhost:63342/JavaScript_project/lesson11/classwork/favorites.html?_ijt=4m3481j6lp7c871mr1f3a88po8&_ij_reload=RELOAD_ON_SAVE');
}

document.body.appendChild(btn2);