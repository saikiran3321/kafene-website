let userInputEl=document.getElementById("userInput");
let passwordInputEl=document.getElementById("passwordInput")
let Logibutton=document.getElementById("loginbutton")

Logibutton.addEventListener('click',function(event){
    event.preventDefault() // prevent the browser from executing the default action of the selected element
    if(userInputEl.value==="" || passwordInputEl.value===""){ // checking the conduction if username and password are empty
        alert("Enter user Name and password") // if user name and password are empty then it will dispaly alert box showing that enter username and password
    }
    else{
        if(userInputEl.value===passwordInputEl.value){  // checking whether user name and password are equal
            alert("Login Sucessfull !")  //if user name and password are equal then it will display a alert box saying login sucessfull
            location.href="./order.html"  // and it will redirect to the order.html page
        }
        else{
            alert("Invalid User Name or Password")  //if user name and password are not equal then it display invalid username and password
        }
    }
    
})



