// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою

let rectSquare = (a, b) => a * b;
console.log(rectSquare(2, 3));


// - створити функцію яка обчислює та повертає площу кола

let circleSquare = r => Math.round(Math.PI) * Math.pow(r, 2);
console.log(circleSquare(3));



// - створити функцію яка обчислює та повертає площу циліндру
let cylinderSquare = (h, r) => 2 * (Math.round(Math.PI)) * r * h;
console.log(cylinderSquare(3, 4));



// - створити функцію яка приймає масив та виводить кожен його елемент

let showArray=arr=>{
    for (let arrayElement of arr) {
        document.write(arrayElement+ "<br>");
    }
}
showArray(['yes', 'no', 23, 33, 'hellow', 'logo', 'increase']);


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

let createParagraph = text => document.write(`<p>${text}</p>`);

createParagraph('Hellow');


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let createUl=text=> {
        document.write(`<ul>`)
        document.write(`<li>${text}</li>`)
        document.write(`<li>${text}</li>`)
        document.write(`<li>${text}</li>`)
        document.write(`</ul>`)
    }
createUl('Pruvit Okten');



// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let createUl2=(text,number)=>{
    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`)
}
createUl2('I am fine', 7);



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let array = arr2 => {
    document.write(`<ol>`)
    for (let i = 0; i < arr2.length; i++) {
        document.write(`<li>${arr2[i]}</li>`);
    }
    document.write(`</ol>`)
};
array(['yes', 'no', 23, 33, 'hellow', false, 'logo', 'increase', true]);



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let showArrayWithObjects = arr3 => {
    for (let arrayElement of arr3) {
        document.write(`<div>${arrayElement.id}, ${arrayElement.name}, ${arrayElement.age}</div>`)
    }
};
showArrayWithObjects([
    { id: 3356778,
        name: 'Lisa',
        age: 25
    },
    {
        id: 3347889,
        name: 'Anna',
        age: 27
    },
    {
        id: 3906789,
        name: 'Oksana',
        age: 29
    },
    {
        id: 3344689,
        name: 'Maria',
        age: 34
    }
]);