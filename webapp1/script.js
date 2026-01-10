
function dispMessage() {
  // a=10
  // b=20
  // c=a+b
  //   alert("Hello")
  //   const user = {
  //     name: "John",
  //     email: "john@gmail.com",
  //     password: "1234",
  //   };
  //   console.log(user.name);
  const arr = ["Maths", "Science"];
  console.log(arr[0]);
  arr.push("English")
  console.log(arr);
  // alert(document.getElementById("txtEmail").value)
  // lblMessage.innerHTML = document.getElementById("txtEmail").value + "-" + document.getElementById("txtPassword").value
  //   let email = document.getElementById("txtEmail").value;
  //   let password = document.getElementById("txtPassword").value;
  //   if (email === "john@gmail.com" && password === "1234") {
  //     lblMessage.innerHTML = "Welcome";
  //   } else {
  //     lblMessage.innerHTML = "Access Denied";
  //   }
}
let users = [];
function addUser() {
  let name = document.getElementById("txtName").value;
  let email = document.getElementById("txtEmail").value;
  let password = document.getElementById("txtPassword").value;
  let user = { name: name, email: email, password: password };
  users.push(user);
  showLoginForm();
  console.log(users);
}

function showLoginForm() {
  let str = `
    <h3>Login Form</h3>
      <p><label id="lblMessage"></label></p>
      <p><input type="text" id="txtEmail" placeholder="Email Address" /></p>
      <p><input type="password" id="txtPassword" placeholder="Password" /></p>
      <p><button class="login-btn" onclick="dispMessage()">Log In</button></p>
      <hr>
      <p><button class="register-btn" onclick="showRegisterForm()">Create Account</button></p>
    `;
  root.innerHTML = str;
}

function showRegisterForm() {
  let str = `
     <h3>Registration Form</h3>
     <p><label id="lblMessage"></label></p>
     <p><input type="text" id="txtName" placeholder="Enter Name" /></p>
      <p><input type="text" id="txtEmail" placeholder="Email Address" /></p>
      <p><input type="password" id="txtPassword" placeholder="Password" /></p>
      <p><button class="login-btn" onclick="addUser()">Submit</button></p>
      <hr>
      <p>Already a member?<a href="#" onclick="showLoginForm()">Login here</a></p>

    `;
  root.innerHTML = str;
}
