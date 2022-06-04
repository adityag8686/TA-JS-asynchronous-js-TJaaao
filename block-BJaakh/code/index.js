let container = document.querySelector(".container");
let search = document.querySelector(".search");
let input = document.querySelector("input");
let root = document.querySelector("ul");

let url = `https://basic-todo-api.vercel.app/api/todo/`;

fetch(url)
.then((res) => {
   return  res.json();
}).then((data) => {
    console.log(data);
    createUI(data);
});

function createUI(datas) {
    console.log(datas);
    root.innerHTML = "";
    datas.todos.forEach(element => {
        let li = document.createElement("li")
        li.classList.add("flex")
        let input = document.createElement("input");
        input.type = "checkbox";
        let p = document.createElement("p");
        p.innerText = element.title;
        let span = document.createElement("span");
        span.setAttribute("data-id", element._id);
        span.innerText = "❌";
        li.append(input, p, span);
        root.append(li);

        input.addEventListener("input", handleCheck);
        span.addEventListener("click", handleDelete);

    });
}

// handle check

function handleCheck(event) {
    update(event.target.dataset.id, event.target.checked);
}


// delete the todo


function Delete(id) {
    console.log(url+ id);
    fetch(url+id, {
        method: "DELETE",
        headers: {
        "Content-Type": "application/json",
        },
    });
}
function handleDelete(event) {
    console.log("abc")
    Delete(event.target.dataset.id);
    console.dir(event.target);
    fetch(url);
}

// update the todo

function update(id, value) {
    let data = {
        isCompleted: value,
    };
    fetch(url + id, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}



// add the todo

function addTodo(todo, isDone){
    let data = {
        todo: {
            title: todo,
            isCompleted: isDone,
        },
    };

    fetch(url,{
        method : "POST",
        headers : {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}
// applying event listner
input.addEventListener("keyup", (event) =>{
    if (event.code === 13){
        root.innerHTML = " ";
        addTodo(event.target.value,false);
        fetch(url);
    }
} )


