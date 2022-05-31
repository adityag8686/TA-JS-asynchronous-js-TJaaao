// ## XMLHttpRequest + Promise

// - Create a function named `fetch` which can accept one parameter an `url` and returns a promise.
// - Use `XMLHttpRequest` to make a network request using the `url` from parameter
// - When the data is loaded resolve the promise with the value
// - If there is any issue loading data reject the promise with an error message


function fetch(url){
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open("GET",url);
        xhr.onload = () => {
            setTimeout(() => resolve(JSON.parse(xhr.response)), 2000);
        }
        xhr.onerror = () => {
        reject('something went wrong')
        }
        xhr.send();
    })
}

let data = fetch(`https://api.github.com/users/getify`)
    .then((data) => {
        console.log(data.name);
    })
    .catch ((error) => {
        alert ('check your internet connection');
    })