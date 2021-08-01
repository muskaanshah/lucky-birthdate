var luckynumber = document.querySelector("#luckynumber-input");
var dob = document.querySelector("#date-input");
var btncheck = document.querySelector("#btn-check");
var outputdiv = document.querySelector("#checkoutput");
var imgtag = document.querySelector("img");

btncheck.addEventListener("click",validate);

function validate() {
    outputdiv.style.display = "none";
    var luckyno = Number(luckynumber.value);
    if (luckyno < 0 || dob.value == "" || luckyno == ""){
        outputdiv.style.display = "block";
        outputdiv.innerText = "⚠ Error! Enter valid details";
        outputdiv.style.color = "red";
    }
    else {
        var dateofbirth = dob.value.split("-");
        var dobstring = dateofbirth[0] + dateofbirth[1] + dateofbirth[2];
        var dobnum = Number(dobstring);
        var sum = 0;
        while (dobnum > 0){
            sum = sum + dobnum % 10;
            dobnum = Math.floor(dobnum/10);    
        }
        if (sum % luckyno == 0) {
            outputdiv.style.display = "block";
            outputdiv.innerText = "Hurray! Your birthdate is lucky 🤗";
            outputdiv.style.color = "lightgreen";
            imgtag.src = "images/correct.svg";
        } else {
            outputdiv.style.display = "block";
            outputdiv.innerText = "Sorry, your birthdate is not lucky 😌";
            outputdiv.style.color = "yellow";
            imgtag.src = "images/error.svg";
        }
    }
}