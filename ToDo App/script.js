var addBtn = document.querySelector("#add");
var task = document.querySelector("#addTask")
var taskDiv = document.querySelector(".tasks");
var delBtn = document.querySelector("#del")
let arr = [];
var isActive = false;
var now = new Date();
var cssDel = "color: gray; font-size:17px; float:right;"
var cssDate = "font-family:sans-serif; float:right; margin-right:10px"
var delElement;
addBtn.addEventListener("click", () => {

    if (task.value.length == 0) {
        alert("Enter Task please!")
    } else {
        var li = document.createElement("li");
        li.style.listStyleType = "number";
        var input = task.value;
        var t = document.createTextNode(input);
        var date = now.toLocaleDateString('tr-TR'); var hour = now.getHours(); var min = now.getMinutes();

        var str = date + "   /   " + hour + ":" + min + "  ";
        var spanDate = document.createElement('span');
        spanDate.style.cssText = cssDate;
        spanDate.append(str);
        delElement = document.createElement('i');
        delElement.classList.add("fa-solid", "fa-trash", "trash");


        delElement.style.cssText = cssDel;



        li.append(t);
        li.append(delElement);
        li.append(spanDate);


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

    if (e.target.innerText != "" && isActive == false) {
        e.target.style.textDecoration = "line-through";
        isActive = true;
    } else if (e.target.innerText != "" && isActive == true) {
        e.target.style.textDecoration = "none";
        isActive = false;
    }
})

delBtn.addEventListener("click", () => {
    var li = Array.from(document.querySelectorAll("li"));

    if (li.length > 0) {
        for (let i = 0; i < li.length; i++) {
            taskDiv.removeChild(li[i]);
        }
    }

    dizi = [];

})