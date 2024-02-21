const API_KEY=`9d48dfe9ca6d40ae8e444820b2ce9e7f`;
let newsList = [];
const getLatestNews = async() => {
    const url = new URL(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`);
    //내꺼 new URL(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`);
    //누나꺼 new URL(`https://genuine-llama-77c90b.netlify.app/top-headlines?country=kr&apiKey=${API_KEY}`);
const response = await fetch(url);
const data = await response.json();
newsList = data.articles;
render();
console.log("ddd", newsList);
};

const render=()=>{
    const newsHTML = newsList.map(news=>` <div class="row news">
    <div class="col-lg-4">
    <img class="news-img-size" src=${news.urlToImage}/>
    </div>
    <div class="col-lg-8">
        <h2>${news.title}</h2>
        <p>
            ${news.description}
        </p>
        <div>
            ${news.source.name} * ${news.publishedAt}
        </div>
    </div>
</div>`
).join('');
    document.getElementById("news-board").innerHTML=newsHTML
}
getLatestNews();

