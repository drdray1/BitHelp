
const url = "https://blockchain.info/";

fetch(url + "ticker").then(function(response) {
  return response.json();
}).then(function(json) {
  console.log(json.USD.symbol + json.USD.last);
  document.getElementById("currentBitcoinPrice").innerHTML = json.USD.symbol + json.USD.last;
});

let value = 1;

fetch(url + "tobtc?currency=USD&value=" + value).then(function(response) {
  return response.json();
}).then(function(json) {
  console.log(json);
  document.getElementById("priceInDollars").innerHTML = json;
});

fetch("https://bloomberg-market-and-financial-news.p.rapidapi.com/news/list?id=cryptocurrencies", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "3a91fa52e5msh92096307e30a3abp17a213jsn30225e3f4222",
		"x-rapidapi-host": "bloomberg-market-and-financial-news.p.rapidapi.com"
	}
})
.then(function(response) {
	return response.json();
}).then(function(json) {
  console.log(json);
  let result = "";
  let articles = json.modules[2].stories;
  for (let i = 0; i < 3; i++) {
    let article = articles[i];
    result += '<div class="row"><div class="col-lg-6 mb-4"><div class="card bg-success text-white shadow"><div class="card-body">';
    result += article.title;
    result += '<div class="text-white-80 small">';
    result += article.summary;
    result += '</div>';
    result += '<a class="btn btn-light btn-sm" href="';
    result += article.shortURL;
    result += '" role="button" target="1">Link</a></div></div></div></div>';
  }
  document.getElementById("newsArticles").innerHTML = result;
})
.catch(err => {
	console.error(err);
});
