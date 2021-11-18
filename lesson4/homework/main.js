// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function rectSquare(a, b) {
//     let result = a * b;
//     return result;
// }
//
// let result = rectSquare(2, 5);
// console.log(result);


//  створити функцію яка обчислює та повертає площу кола з радіусом r

// function circleSquare(r) {
//     let result = Math.round(Math.PI)* Math.pow(r, 2);
//     return result;
//
// }
// let result = circleSquare(3);
// console.log(result);



//  створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function cylinderSquare(h,r) {
//     let result = 2 * (Math.round(Math.PI)) * r * h;
//     return result;
// }
// let result = cylinderSquare(3,4);
// console.log(result);




// створити функцію яка приймає масив та виводить кожен його елемент

// let arrow = ['yes', 'no', 23, 33, 'hellow', 'logo', 'increase'];
// function showArrow (){
//     document.write(arrow[0]+ "<br>");
//     document.write(arrow[1]+ "<br>");
//     document.write(arrow[2]+ "<br>");
//     document.write(arrow[3]+ "<br>");
//     document.write(arrow[4]+ "<br>");
//     document.write(arrow[5]+ "<br>");
//     document.write(arrow[6]+ "<br>");
// }
// showArrow();


// створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function createParagraph (text){
//     document.write(`<p>${text}</p>`)
// }
// createParagraph("Hellow");



// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function createUl(text) {
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
// createUl('Hellow');



// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function createUl(text,number) {
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//             document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`)
// }
//
// createUl("Hellow", 3);


//  створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arrow = ['yes', 'no', 23, 33, 'hellow', false,'logo', 'increase',true];
// function showArrowUl() {
//     document.write(`<ul>`)
//     for (let i = 0; i < arrow.length; i++) {
//             document.write(`<li>${arrow[i]}</li>`);
//     }
//     document.write(`</ul>`)
// }
//
// showArrowUl();


//  створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
//  Для кожного об'єкту окремий блок.
//
// let arrow = [
//     {
//         id: 3356778,
//         name: 'Lisa',
//         age: 25
//     },
//     {
//         id: 3347889,
//         name: 'Anna',
//         age: 27
//     },
//     {
//         id: 3906789,
//         name: 'Oksana',
//         age: 29
//     },
//     {
//         id: 334489,
//         name: 'Maria',
//         age: 34
//     }
// ];
// function showArrowWithObjects() {
//     // for (let i = 0; i < arrow.length; i++) {
//     //     document.write({arrow})
//     // }
//     for (let arrowElement of arrow) {
//         document.write(`<div>${arrowElement.id}, ${arrowElement.name}, ${arrowElement.age}</div>`)
//     }
// }
//
// showArrowWithObjects();