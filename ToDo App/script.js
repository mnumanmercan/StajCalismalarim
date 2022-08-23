var addBtn = document.querySelector("#add");
var task = document.querySelector("#addTask")
var taskDiv = document.querySelector(".tasks");
var delBtn = document.querySelector("#del")
let arr = [];
var isActive = false;

addBtn.addEventListener("click", () => {

    if (task.value.length == 0) {
        alert("Enter Task please!")
    } else {
        console.log(task.value)
        var li = document.createElement("li");
        var input = task.value;
        var t = document.createTextNode(input);
        var date = new Date().toLocaleDateString('tr-TR');
        var span = document.createElement('span');
        span.style.float = "right";

        span.append(date);
       
        li.style.listStyleType = "number";
        
        li.append(t);
        
        li.append(span);
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
    
    if (e.target.innerText != "" && isActive==false) {
        e.target.style.textDecoration = "line-through";
        isActive = true;
    }else if(e.target.innerText != "" && isActive==true){
        e.target.style.textDecoration = "none";
        isActive = false;
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