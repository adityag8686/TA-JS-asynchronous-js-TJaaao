let input = document.querySelector('input');
let container = document.querySelector('.image-container');

// https://api.unsplash.com/search/photos?page=1&query=${event.target.value}?client_id=GS20ECWWxrEdxKk7brL3YHk0SE6e9cuq6e-nzbO-jHM


function createUI(data){
    container.innerHTML = "";
    data.forEach(elm=>{
        let img  = document.createElement('img');
        img.src =  elm.urls.full;
        container.append(img);
    });
}
input.addEventListener('keyup',(event)=>{
    if(event.keyCode === 13 && event.target.value){
        let xhr = new XMLHttpRequest();
        xhr.open('GET' , `https://api.unsplash.com/search/photos?page=1&query=${event.target.value}&client_id=GS20ECWWxrEdxKk7brL3YHk0SE6e9cuq6e-nzbO-jHM`);
        
        xhr.onload = function(){
            let imageData =JSON.parse(xhr.response);
            createUI(imageData.results);
        }
        xhr.send();
        event.target.value = "";
    }
})
