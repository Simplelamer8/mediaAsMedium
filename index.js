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
    showArticles(articles);
});

function setArticleId(ID)
{
    localStorage.setItem('id', ID);
}

//I know that filling card withing loop, instead of replacing its substrings is a bad idea, but I am rushig right now :)

const main = document.querySelector('main');

function showArticles(articles)
{
    for (let i = 0; i < 7; i++)
    {
        let card;
        if (i % 3 === 0)
        {
            card = `
                <div class="card" data-ID = ${articles[i].id}>
                <div class="left">
                <div class="top">
                    <div class="infoTop">
                    <img src="./images/profileImage.svg" alt="">
                    <p>
                        Authors name <span>in</span> Topics Name · <span>7 july</span>
                    </p>
                    </div>
                    <a href="./article.html" onclick="setArticleId(${articles[i].id})"><h2>
                        ${articles[i].title}
                    </h2>
                    </a>
                    <p>
                    ${articles[i].body}
                    </p>
                </div>
                <div class="bottom">
                    <ul>
                    <li>Java Script</li>
                    <li>12 min read</li>·
                    <li>Selected for you</li>
                    </ul>
                    <div class="boxes">
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    </div>
                </div>
                </div>
                <img src="./images/laptop.svg" alt="">
            </div> `;
        }
        else if (i % 3 === 1)
        {
            card = `
                <div class="card" data-ID = ${articles[i].id}>
                <div class="left">
                <div class="top">
                    <div class="infoTop">
                    <img src="./images/profileImage.svg" alt="">
                    <p>
                        Authors name <span>in</span> Topics Name · <span>7 july</span>
                    </p>
                    </div>
                    <a href="./article.html" onclick="setArticleId(${articles[i].id})"><h2>
                        ${articles[i].title}
                    </h2>
                    </a>
                    <p>
                    ${articles[i].body}
                    </p>
                </div>
                <div class="bottom">
                    <ul>
                    <li>Java Script</li>
                    <li>12 min read</li>·
                    <li>Selected for you</li>
                    </ul>
                    <div class="boxes">
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    </div>
                </div>
                </div>
                <img src="./images/painting.svg" alt="">
            </div> `;
        }
        else
        {
            
            card = `
                <div class="card" data-ID = ${articles[i].id}>
                <div class="left">
                <div class="top">
                    <div class="infoTop">
                    <img src="./images/profileImage.svg" alt="">
                    <p>
                        Authors name <span>in</span> Topics Name · <span>7 july</span>
                    </p>
                    </div>
                    <a href="./article.html" onclick="setArticleId(${articles[i].id})"><h2>
                        ${articles[i].title}
                    </h2>
                    </a>
                    <p>
                    ${articles[i].body}
                    </p>
                </div>
                <div class="bottom">
                    <ul>
                    <li>Java Script</li>
                    <li>12 min read</li>·
                    <li>Selected for you</li>
                    </ul>
                    <div class="boxes">
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    </div>
                </div>
                </div>
                <img src="./images/meditation.svg" alt="">
            </div> `;
        }
        main.innerHTML += (card);
    }
    console.log(articles);
}