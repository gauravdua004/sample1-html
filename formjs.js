function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors){
        item.innerHTML ="";
    }
}

function seterror(id,error){
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}



// function output(){
//     var name = document.getElementById("name1").value;
//     var email = document.getElementById("email1").value;
//     var phone = document.getElementById("phone1").value;
//     var institute = document.getElementById("institute1").value;
//     var PANno = document.getElementById("panNo1").value;

//     document.write("your name is: " +name +"<br>");
//     document.write("your email is: " + email +"<br>");
//     document.write("your phone number is: " + phone +"<br>");
//     document.write("your institute name is: " + institute +"<br>");
//     document.write("your PAN Number is: " + PANno +"<br>");
    
// }


var name1 = document.getElementById('name1');
var name = document.getElementById("name1");
var email = document.getElementById("email1");
var phone = document.getElementById("phone1");
var institute = document.getElementById("institute1");
var PANno = document.getElementById("panNo1");
var button1 = document.getElementById('button1');
let output1 = document.getElementById('output1');

function printoutput(){
    output1.innerHTML="your name is: " + name1.value + "<br>" + "your email is: " + email1.value + "<br>" + "your phone no is: " + phone1.value + "<br>"+ "your institute is: " + institute.value + "<br>" + "your PAN no is: " + panNo1.value;
}

button1.addEventListener('click',printoutput);





// function validateForm(){
//     var returnval = true;
//     clearErrors();
    
//     var name= document.forms['myForm']["fname"].value;
//     if(name.length<5){
//         seterror("name", "*Length is too short for name");
//         returnval = false; 
//     } 
        
//     if(name.length==0){
//         seterror("name", "*Length should no be equal to 0");
//         returnval = false;
//     }
//     var email=document.forms['myForm']["femail"].value;
//     if(email.length>25){
//         seterror("email", "*Length of email is too large");
//         returnval = false;
//     }
//     var phone=document.forms['myForm']["fphone"].value;
//     if(phone.length !=10){
//         seterror("phone", "*phone should be of 10 digits");
//         returnval = false;
//     }
    
//     return returnval;
//}






