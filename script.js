document.getElementById("inquiryForm").addEventListener("submit", function(event){
    //prevent form submit
    event.preventDefault();

    //clear previous errors
document.getElementById("nameError").innerText = "";
document.getElementById("emailError").innerText =""
//input values 
const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
let isValid = true;

//valid name
if(name=== ""){
    document.getElementById("nameError").innerText= "name field cannot be empty."
    isValid = false;
}

//if validation passes form submitted successfull
if (isValid) {
    alert("Form submitted successfully!");

    if (isValid){
        alert ("Form submitted successfully!");
    }
}
});

