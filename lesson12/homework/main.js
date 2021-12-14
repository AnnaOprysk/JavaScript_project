//   1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        for (const post of value) {
            let divPost = document.createElement('div');
            divPost.classList.add('divPost');
            let divUserId = document.createElement('div');
            divUserId.innerText = `userId: ${post.userId}`;
            let divId = document.createElement('div');
            divId.innerText = `id: ${post.id}`;
            let divTitle = document.createElement('h3');
            divTitle.innerText = post.title;
            let divBody = document.createElement('div');
            divBody.innerText = post.body;
            divPost.append(divUserId, divId, divTitle, divBody);
            let wrap = document.getElementById('wrap');
            wrap.append(divPost);
        }
    });




//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(value => {
        for (const comment of value) {
            let divComments = document.createElement('div');
            divComments.classList.add('divComments');
            let divPostId = document.createElement('div');
            divPostId.innerText = `postId: ${comment.postId}`;
            let divId = document.createElement('div');
            divId.innerText = `id: ${comment.id}`;
            let divName = document.createElement('h4');
            divName.innerText = comment.name;
            let divEmail = document.createElement('div');
            divEmail.innerText = comment.email;
            let divBody = document.createElement('div');
            divBody.innerText = comment.body;
            divComments.append(divPostId, divId, divName, divEmail,divBody);
            let wrap = document.getElementById('wrap');
            wrap.append(divComments);
        }
    });