let source = document.getElementById('source');
let root = document.querySelector('ul');
let url = `https://api.spaceflightnewsapi.net/v3/articles?_limit=30`;
let newsData = [];

fetch(url)
    .then((res) => res.json())
    .then((data) => {
    createUI(data);
    newsData = data;
    });


function createUI(data) {
    root.innerHTML = '';
    data.forEach((elm) => {
    let list = document.createElement('li');
    list.classList.add('list');

    let image = document.createElement('img');
    image.classList.add('image');
    image.src = elm.imageUrl;

    let div = document.createElement('div');
    div.classList.add('div');

    let channel = document.createElement('p');
    channel.innerText = elm.newsSite;
    channel.classList.add('channel');

    let title = document.createElement('h2');
    title.classList.add('title');
    title.innerText = elm.title;

    let anchor = document.createElement('anchor');
    anchor.href = elm.url;
    let btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = 'Read More';
    anchor.append(btn);

    div.append(channel, title, anchor);
    list.append(image, div);
    root.append(list);
    });
}

source.addEventListener('change', (event) => {
    let filtered = newsData.filter(
    (news) => news.newsSite === event.target.value
    );
    if (event.target.value == '') {
    filtered = newsData;
    }
    createUI(filtered);
});
