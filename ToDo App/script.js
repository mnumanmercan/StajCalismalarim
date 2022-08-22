var addBtn = document.querySelector("#add");
var task = document.querySelector("#addTask")
var taskDiv = document.querySelector(".tasks");
var delBtn = document.querySelector("#del")
let arr = [];

addBtn.addEventListener("click", () => {

    if (task.value.length == 0) {
        alert("Enter Task please!")
    } else {
        console.log(task.value)
        var li = document.createElement("li");
        var input = task.value;
        var t = document.createTextNode(input);
        li.style.listStyleType = "upper-roman";
        li.append(t);
        taskDiv.append(li);

        task.value = "";
    }
    

});


taskDiv.addEventListener("dblclick", e => {
    if (e.target.innerText != "") {
        taskDiv.removeChild(e.target);
    }
})
taskDiv.addEventListener("click", e => {
    if (e.target.innerText != "") {
        e.target.style.textDecoration = "line-through";
    }
})

delBtn.addEventListener("click", () => {
    var li = Array.from(document.querySelectorAll("li"));

    if(li.length > 0){
        for (let i = 0; i < li.length; i++) {
            taskDiv.removeChild(li[i]);
        }
    }

    dizi = [];

})