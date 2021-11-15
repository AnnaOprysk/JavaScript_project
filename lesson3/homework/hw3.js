// створити масив з:
// з 5 числових значень
    let array = [2, 4, 6, 8, 10];

// з 5 стічкових значень
    let array2 = ['Anna', 'Elena', 'Svitlana', 'Oksana', 'Viktoria'];

// з 5 значень стрічкового, числового та булевого типу
    let array3= ['Dog', 'Cat', 3, 45, false, 'Bat']

// та вивести його в консоль

    console.log(array);
    console.log(array2);
    console.log(array3);

// Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

    let empty = [];
    empty[0] = 'Anna';
    empty[1] = 'Yura';
    empty[2] = 'Olya';
    empty[3] = 234;
    empty[4] = '45';
    empty[5] = 765;
    console.log(empty);


// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
    for (let i = 0; i < 10; i++) {
    document.write(`<div>Hellow</div>`);
    }



// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
    for (let i = 0; i < 10; i++) {
    document.write(`<div>Block ${i}</div>`);
    }

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

//     let i = 1;
//     while (i < 21) {
//     document.write('<h1>Hellow Okten</h1>')
//         i++;
//     }

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

//     let i = 1;
//     while (i < 21) {
//         document.write(`<h1>Okten lesson ${i}</h1>`);
//     i++;
//     }


//  Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//     let arr = [2, 4, 6, 8, 10,12,14,16,18,20];
//     for (const number of arr) {
//     console.log(number);
// }


//  Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

    // let arr2 = ['Anna', 'Elena', 'Svitlana', 'Oksana', 'Lisa','Tanya', 'Maria', 'Oksana', 'Viktoria','Lina'];
    // for (const name of arr2){
    //     console.log(name);
    // }


//  Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

    // let arr3= ['Dog', 'Cat', 3, 45, 67, 'Bat', 34, '698', 'dad', null]
    // for (const arr3Element of arr3) {
    // console.log(arr3Element);
    // }


//  Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

    // let arr4= ['Dog', 'Cat', 3, 45, false, 'Bat', 34, '698', true, null]
    // for (const arr4Element of arr4) {
    // if (typeof arr4Element ==="boolean"){
    // console.log(arr4Element)
    // }
    // }

//  Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

    // let arr4= ['Dog', 'Cat', 3, 45, false, 'Bat', 34, '698', true, null]
    // for (const arr4Element of arr4) {
    // if (typeof arr4Element === "number"){
    // console.log(arr4Element)
    // }
    // }


//  Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

    // let arr4= ['Dog', 'Cat', 3, 45, false, 'Bat', 34, '698', true, null]
    // for (const arr4Element of arr4) {
    // if (typeof arr4Element === "string"){
    // console.log(arr4Element)
    // }
    // }


//  Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

    // let array5 = [];
    // array5[0] = 'Anna';
    // array5[1] = 'Yura';
    // array5[2] = null;
    // array5[3] = 6;
    // array5[4] = '45';
    // array5[5] = true;
    // array5[6] = 'Olya';
    // array5[7] = 234;
    // array5[8] = false;
    // array5[9] = 765;
    // for (const array5Element of array5) {
    //     console.log(array5Element);
    // }

//  Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

//     for (let i=1; i<=10; i++){
//         console.log(i);
//         document.write(i);
//     }

//  Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

    // for (let i=1; i<=100; i++){
    // console.log(i);
    // document.write(i);
    // }


//  Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

    // for (let i=1; i<=100; i+=2){
    // console.log(i);
    // document.write(i + "<br>");
    // }


//  Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

    // for (let i=1; i<=100; i++){
    //     if (i % 2 === 0) {
    //         console.log(i);
    //         document.write(i + "<br>");
    //     }
    // }

//  Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

    // for (let i=1; i<=100; i++){
    // if (i % 2 !== 0) {
    //     console.log(i);
    //     document.write(i + "<br>");
    // }
    // }