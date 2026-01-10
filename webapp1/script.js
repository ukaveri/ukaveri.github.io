function dispMessage(){
    // a=10
    // b=20
    // c=a+b
    //alert("Hello")
    // // alert(document.getElementById("txtEmail").value)
    // lblMessage.innerHTML = document.getElementById("txtEmail").value
    // lblMessage2.innerHTML = document.getElementById("txtPassword").value
    let email = document.getElementById("txtEmail").value
    let password = document.getElementById("txtPassword").value
    if(email === "kaveriupadrashta7@gmail.com" && password === "kavs" )
    {
        // here if i take == it checks only value but if i use === it checks value with data type
        lblMessage1.innerHTML = "welcome!!!! kaveriiii";
    }
    else
    {
        lblMessage1.innerHTML = "Accessed Denied registered for kaveri";
    }
}