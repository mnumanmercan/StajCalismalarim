var addBtn = document.querySelector("#add");
var task = document.querySelector("#addTask")
var taskDiv = document.querySelector(".tasks");

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

    taskDiv.addEventListener("click", () => {
        var listElement = document.querySelector("li");
        console.log(listElement.childNodes);
    })


});