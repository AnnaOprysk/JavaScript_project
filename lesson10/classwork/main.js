
// 1. створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
//     Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let divContainer = document.createElement('div');
let divForm1 = document.createElement('div');
divForm1.style.display = 'flex';
divForm1.style.margin = '40px';
let form1 = document.createElement('form');
let input1_1 = document.createElement('input');
input1_1.type = 'text';
input1_1.name = 'User name';
let input1_2 = document.createElement('input');
input1_2.type = 'text';
input1_2.name = 'User surname';
let btn1 = document.createElement('button');
btn1.style.height = '20px';
btn1.style.width = '60px';
btn1.innerText = 'Submit';
btn1.onclick=function () {
    console.log(input1_1.value, input1_2.value);
}
let divForm2 = document.createElement('div');
divForm2.style.display = 'flex';
divForm2.style.margin = '40px';
let form2 = document.createElement('form');
let input2_1 = document.createElement('input');
input2_1.type = 'text';
input2_1.name = 'User qualification';
let input2_2 = document.createElement('input');
input2_2.type = 'number';
input2_2.name = 'User age';
let btn2 = document.createElement('button');
btn2.style.height = '20px';
btn2.style.width = '60px';
btn2.innerText = 'Submit';
btn2.onclick=function () {
    console.log(input2_1.value, input2_2.value);
}

form1.append(input1_1, input1_2);
form2.append(input2_1, input2_2);
divForm1.append(form1,btn1);
divForm2.append(form2,btn2);
divContainer.append(divForm1,divForm2);
document.body.appendChild(divContainer);



// 2. Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//     (Додаткова частина для завдання)


let input3_1 = document.createElement('input');
input3_1.type = 'number';
input3_1.name = 'кількість рядків';
let input3_2 = document.createElement('input');
input3_2.type = 'number';
input3_2.name = 'кількість ячеєк';
let input3_3 = document.createElement('input');
input3_3.type = 'text';
input3_3.name = 'вміст ячеєк';
let btn3 = document.createElement('button');
btn3.style.height = '20px';
btn3.style.width = '90px';
btn3.innerText = 'Create table';

document.body.append(input3_1, input3_2, input3_3, btn3);

btn3.addEventListener('click',function () {
    let trTable = input3_1.value;
    let tdTable = input3_2.value;
    let text = input3_3.value;
    
    function createTable(trTable,tdTable,text) {
        let table = document.createElement('table');
        let divTable = document.createElement('div');

        divTable.appendChild(table);
        document.body.appendChild(divTable);

    for (let i = 0; i < trTable; i++) {
        let trTable = document.createElement('tr');
        for (let j = 0; j < tdTable; j++) {
            let tdTable = document.createElement('td');
            tdTable.innerText = text;
            table.appendChild(trTable);
            trTable.appendChild(tdTable);
        }
    }
    }
    createTable(trTable, tdTable, text);
})





// 3. Сворити масив не цензурних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
//      кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

let array1 = ['aaa','bbb','ccc','www','rrr','fff','qqq','hhh','mmm'];
let inputArray1 = document.createElement('input');
inputArray1.type = 'text';
let btnArray1 = document.createElement('button');
btnArray1.style.height = '20px';
btnArray1.style.width = '60px';
btnArray1.innerText = 'Verify';
btnArray1.onclick=function () {
    for (const item of array1) {
       if (inputArray1.value===item) {
           alert('Ви ввели нецензурне слово')
       }
       else {

       }
    }
}

document.body.append(inputArray1, btnArray1);

// 4. Сворити масив не цензурних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let array2 = ['aaa','bbb','ccc','www','rrr','fff','qqq','hhh','mmm'];
let inputArray2 = document.createElement('input');
inputArray2.type = 'text';
let btnArray2 = document.createElement('button');
btnArray2.style.height = '20px';
btnArray2.style.width = '60px';
btnArray2.innerText = 'Verify';
btnArray2.onclick=function () {
    for (const item of array2) {
        if (inputArray2.value.includes(item)) {
            alert('Ви ввели нецензурне слово у реченні')
        }
        else {

        }
    }
}
document.body.append(inputArray2, btnArray2);