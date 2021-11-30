// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює клас  елементу з ід main_header на назву групи в якій ви вчитесь (mon-year)

let changeClass = document.getElementById('main_header');
changeClass.classList.toggle('sep-2021');
console.log(changeClass);


// b) робить шириниу елементу ul 400px
let ulCollection = document.getElementsByTagName('ul');
for (const item of ulCollection) {
    item.style.width = "400px";
}

console.log(ulCollection);


// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkListCollection = document.getElementsByClassName('linkList');
for (const item of linkListCollection) {
    item.style.width="50%"
}
console.log(linkListCollection);


// d) отримує текст який зберігається в елементі з класом listElement2

let textListElement2 = document.getElementsByClassName('listElement2');
for (const node of textListElement2) {
    console.log(node.textContent);
}


// e) отримує всі елементи li та змінює ім колір фону на сірий
let liCollection = document.getElementsByTagName('li');
for (const item of liCollection) {
    item.style.backgroundColor = "grey";
}

console.log(liCollection);


// f) отримує всі елементи 'a' та додає їм клас anchor

let aList = document.getElementsByTagName('a');
for (const item of aList) {
    item.classList.add('anchor');
}
console.log(aList);



// g) отримує всі елементи 'a' та у випадку, якщо текстовий контент елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

let aChangeFontSize = document.getElementsByTagName('a');
for (const item of aChangeFontSize) {
if (item.innerText.includes('link3')){
    item.style.fontSize = '40px';
}
}
console.log(aChangeFontSize);



// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

let aNewClassAdd = document.getElementsByTagName('a');
for (const item of aNewClassAdd) {
    let variable = item.innerText;
    item.classList.add('element_' + variable);
}
console.log(aNewClassAdd);


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()


// let subHeaderChangeColor = document.getElementsByClassName('sub-header');
// for (const item of subHeaderChangeColor) {
//     item.style.backgroundColor = prompt();
// }
// console.log(subHeaderChangeColor);



// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let subHeaderChangeColor = document.getElementsByClassName('sub-header');
// for (const item of subHeaderChangeColor) {
//     if (item.innerText.includes('segment')){
//         item.style.color = prompt();
//     }
// }
// console.log(subHeaderChangeColor);



// k) отримує елемент з класом content_1 та заміняє  в ньому текст на довільний. Текст отримати з prompt()


// let content1NewText = document.getElementsByClassName('content_1');
// for (const item of content1NewText) {
//     item.innerText = prompt();
// }
// console.log(content1NewText);



// l) отримати елементи p та змінити їм padding на 20px

let pList = document.getElementsByTagName('p');
for (const item of pList) {
    item.style.padding = '20px';
}
console.log(pList);


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let text2Rename = document.getElementsByClassName('text2');
for (const item of text2Rename) {
    item.innerText = "sep-2021";
}

console.log(text2Rename);