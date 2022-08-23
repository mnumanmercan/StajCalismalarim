var height = document.querySelector('#height');
var weight = document.querySelector('#weight');
var calculateBtn = document.querySelector('#calculateBtn');
var result = document.querySelector('.result');
calculateBtn.addEventListener("click", () => {
    result.innerText = "Your BMI : "
    if (height.value.length != "" && weight.value.length == "") {
        alert("Please enter the all value");
    } else {

        result.append(calculate(parseFloat(height.value), parseFloat(weight.value)));
        
        
    }
})

function calculate(height, weight) {

    var toMeter = parseFloat(height / 100);
    
    return weight / (toMeter * toMeter);

}