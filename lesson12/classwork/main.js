// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        for (const post of value) {
            let divPost = document.createElement('div');
            divPost.classList.add('divPost');
            divPost.innerText=`userId: ${post.userId} id:${post.id} ${post.title} ${post.body}`
            divPost.classList.add('post');

            let btn = document.createElement('button');
            btn.innerText='Show comments'
            btn.onclick = function () {
            fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
            .then(value => value.json())
            .then(value => {
                let divComments = document.createElement('div');
                divPost.appendChild(divComments);
                for (const comment of value) {
                        let commentDiv = document.createElement('div');
                        commentDiv.innerText = comment.body;
                        commentDiv.classList.add('comment')
                        divComments.appendChild(commentDiv);
                    console.log(commentDiv)
                }
    });
            };
            divPost.append(btn);
            document.body.append(divPost);
        }
    });