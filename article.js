const main = document.querySelector('main');

function getArticles()
{
    return new Promise ((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then ((response) => response.json())
        .then ((data) => resolve(data))
        .catch((error) => reject(error));
    });
}

let articles;

getArticles().then(data => {
    articles = data
    showArticle(articles);
});


function showArticle(articles)
{
    let tar = localStorage.getItem("id");
    console.log(tar);
    
    for (let i = 0; i < articles.length; i++)
    {
        console.log(articles[i].id);
        if (tar == articles[i].id)
        {
            main.innerHTML += `
                <div class="title">
                    ${articles[i].title}
                </div>
                <img src="" alt="">
                <div class="description">${articles[i].body}</div>
            `;
            break;
        }
    }
}