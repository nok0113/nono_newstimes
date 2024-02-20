const API_KEY=`9d48dfe9ca6d40ae8e444820b2ce9e7f`;
let news = [];
const getLatestNews = async() => {
    const url = new URL(`https://genuine-llama-77c90b.netlify.app/top-headlines?country=kr&apiKey=${API_KEY}`);
    //new URL(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`);
const response = await fetch(url);
const data = await response.json()

news = data.articles;
console.log("ddd", news);
};

getLatestNews();

