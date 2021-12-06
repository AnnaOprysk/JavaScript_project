

// 1. Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".


let div = document.createElement('div');
div.classList.add('text')
div.style.backgroundColor = 'green';
div.style.height = '300px';
div.style.width = '300px';
div.onclick=function (){
    div.style.display = 'none';
}
document.body.appendChild(div);


// 2. Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let btn = document.createElement('button');
btn.innerText='Click on me'
btn.style.backgroundColor = 'blue';
btn.onclick=function () {
    btn.style.display = 'none';
}
document.body.appendChild(btn);


// 3. створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let input = document.createElement('input');
let btn2 = document.createElement('button');
btn2.style.width = '150px';
btn2.innerText='Підтвердити вік'

btn2.onclick = function () {
    if (+input.value >18) {
        alert('Ви вже дорослий');
    } else if (+input.value <= 18) {
        alert('Ви ще неповнолітні');
    } else {
        alert('Ви не ввели свій вік');
    }
};
document.body.append(input,btn2);


// 4. Создайте меню, которое раскрывается/сворачивается при клике

let btnMenu = document.getElementsByClassName('menu')[0];
let wrap = document.getElementsByClassName('wrap')[0];
btnMenu.onclick = function () {
    wrap.style.display = 'none';
};


// 5. Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
    {
        title: 'User1',
        body: 'Зустріч з компанією-партнером пройшла на вищому рівні'
    },
    {
        title: 'User2',
        body: 'Матеріали на зустрічі були не повними'
    },
    {
        title: 'User3',
        body: 'План реалізації проекту на мій погляд не відповідає критеріям замовника'
    },
    {
        title: 'User4',
        body: 'Пропозиції по SMM були досить цікавими,спробуємо їх втілити у проекті'
    }
];

let mainDiv = document.createElement('div');

for (const item of comments) {
    let nameDiv = document.createElement('h5');
    nameDiv.innerText = item.title;
    let bodyDiv = document.createElement('p');
    bodyDiv.innerText = item.body;
    let btn = document.createElement('button');
    btn.style.width = '85px';
    btn.style.height = '20px';
    btn.innerText='Приховати'
    btn.onclick=function () {
         bodyDiv.innerText=`Comment of ${item.title}...`
    }
    
    bodyDiv.appendChild(btn);
    mainDiv.append(nameDiv,bodyDiv);
}

document.body.appendChild(mainDiv);