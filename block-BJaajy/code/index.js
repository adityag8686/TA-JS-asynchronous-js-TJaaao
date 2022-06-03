let promiseOne = Promise.resolve("one");
let promiseTwo = Promise.resolve("two");
let promiseThree = Promise.resolve("three");
let promiseFour = Promise.resolve("four");

let all = Promise.all([promiseOne,promiseTwo,promiseThree,promiseFour])
                .then(data =>{
                    data.forEach(elm =>{
                        setTimeout(()=>{
                            console.log(elm);
                        },1000);
                    })
                })


console.log(all);

let users = [adityag8686,RahulMandyal1,zehan12,vasant11-97]

let usersData = users.map((user) =>{
    return fetch(`https://api.github.com/users/${user}`).then((data) => {
        return data.json();
    });
})

Promise.all(usersData).then(data => {
    data.forEach(elm => {
        console.log(elm.followers)
    })
})

// let first = fetch('https://random.dog/woof.json')
// .then((data)=> data.json())
// .then((data)=> data);
// console.log(first);

// let second = fetch('https://aws.random.cat/meow').then((data)=> data.json())
// .then((data)=> data);
// console.log(second);
// console.log(Promise.race([first , second]));

// //Dog api reoslve faster 

// 3rd
const one = new Promise((resolve, reject) =>
  setTimeout(() => resolve('Arya'), 1000)
);
const two = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error('Whoops!')), 2000)
);
const three = new Promise((resolve, reject) =>
  setTimeout(() => resolve('John'), 3000)
);
Promise.allSettled([one , two  , three ]); 
// yes everything is working fine

Promise.all([one , two  , three ]);

// error occured 

// 4th
['Arya', 'Sam',{ name: 'John' }]
// 1s