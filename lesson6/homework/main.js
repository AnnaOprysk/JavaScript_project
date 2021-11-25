
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'


let helloo = 'hello world';
console.log(helloo.length);

let loremm = 'lorem ipsum';
console.log(loremm.length);

let jss = 'javascript is cool';
console.log(jss.length);



// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let hello = 'hello world';
let toUpperCase=hello.toUpperCase();
console.log(toUpperCase);

let lorem = 'lorem ipsum';
let toUpperCase1=lorem.toUpperCase();
console.log(toUpperCase1);

let js = 'javascript is cool';
let toUpperCase2=js.toUpperCase();
console.log(toUpperCase2);



// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'


let hello1='HELLO WORLD'
let toLowerCase = hello1.toLowerCase();
console.log(toLowerCase);

let lorem1='LOREM IPSUM'
let toLowerCase1 = lorem1.toLowerCase();
console.log(toLowerCase1);

let js1='JAVASCRIPT IS COOL'
let toLowerCase2 = js1.toLowerCase();
console.log(toLowerCase2);


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
let trim = str.trim();
console.log(trim,);
console.log(trim.length);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let str1 = 'Каждый охотник желает знать';
let stringToarray = str1 => str1.split(" ");
console.log(stringToarray(str1));
document.writeln(stringToarray(str1));


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый


let str2 = 'Каждый охотник желает знать';
let delete_characters = str2 => str2.substr(0, 7);
console.log(delete_characters(str2));
document.writeln(delete_characters(str2));


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'


let str4 = "HTML JavaScript PHP";
let insert_dash = str4 => str4.toUpperCase().replaceAll(' ', '-');
console.log(insert_dash(str4));
document.writeln(insert_dash(str4));


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.


let str5 = 'у скарбничці нашого народу вірші про українську мову посідають одне із найважливіших місць.';
let capitalFirstLetter = str5 => str5[0].toUpperCase()+str5.slice(1)
// let capitalFirstLetter = str5 => str5[0].replace('у','У')+str5.slice(1)   /*Варіант 2*/
console.log(capitalFirstLetter(str5));



// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let str6 = 'national university lviv politekhnic';
let capitalize = str6 => {
    return str6.split(' ').map(value => value.charAt(0).toUpperCase() + value.slice(1)).join(' ');
};
console.log(capitalize(str6));