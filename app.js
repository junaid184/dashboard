function onSignup() {
    // get input values
    var name = document.getElementById("name");
    var fname = document.getElementById("fname");
    var phoneno = document.getElementById("phoneno");
    var address = document.getElementById("address");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var message = document.getElementById("message");
        var user = {
            name: name.value,
            fname: fname.value,
            phoneno: phoneno.value,
            address: address.value,
            email: email.value,
            password: password.value,
        }
        var users = JSON.parse(localStorage.getItem("users")) || [];
        // get indx
        var userIdx = users.findIndex(function (val) {
            return val.email.toLowerCase() === user.email.toLowerCase()
        });
         
        if (userIdx === -1) {
            // this user is not exist
            users.push(user);
            // store in storage
            localStorage.setItem("users", JSON.stringify(users));
            // redirect to login page
            location.href = "login.html";
        }
        else {
            message.innerHTML = user.email + " use in another account";
        }
        // clear state
        setTimeout(() => {
            message.innerHTML = "";
        }, 2000);
    
    }
function onLogin() {
        // get input values
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        var message = document.getElementById("message");
    
        var user = {
            email: email.value,
            password: password.value,
        }
    
        var users = JSON.parse(localStorage.getItem("users")) || [];
        // get indx
        var currentUser = users.find(function (val) {
            return val.email.toLowerCase() === user.email.toLowerCase() && val.password === user.password;
        });
    
        if (currentUser) {
            localStorage.setItem("user", JSON.stringify(currentUser));
            // user login
            location.href = "dashboard.html";
        } else {
            message.innerHTML = "Invalid credentials";
        }
        // clear state
        setTimeout(() => {
            message.innerHTML = "";
        }, 2000);
    }
    function onLogout() {
        var message = document.getElementById("message");
        localStorage.removeItem("user");
        message.innerHTML = "Good Bye.!";
        // clear state
        setTimeout(() => {
            location.href = "login.html";
        }, 2000);
    }
    
    function getCurrentUser() {
        var name = document.getElementById("name");
        var Fname = document.getElementById("Fname");
        var phoneNo = document.getElementById("phoneno");
        var address = document.getElementById("address");
        var user = JSON.parse(localStorage.getItem("user"));
        name.innerHTML = "Name: " + user.name;
        Fname.innerHTML = "Father Name: "+user.fname;
        phoneNo.innerHTML = "Phone NO: "+user.phoneno;
        address.innerHTML = "Address: "+user.address;
    }
    
    function onPost() {
        var postarea = document.getElementById('post');
        var postText = document.getElementById('postText');
        var title = document.getElementById('title');
        var postTitle = document.getElementById('postTitle');
        if(postarea.value == "" ) {
            alert('type something in post');
        }
        else{
           var htmlText = `<div class="card" style="width: 100%;">
            <img src="pexels-pnw-production-7062089.jpg" class="card-img-top" alt="... ">
            <div class="card-body" style = "color : black">
              <h5 class="card-title">${title.value}</h5>
              <p class="card-text">${postarea.value}</p>
            </div>
          </div>`;
            
        var postCard = document.getElementById('postCard');
        var li = document.createElement('li');
        li.style.listStyle = "none";
        var liText = document.createElement('div');
        liText.innerHTML = htmlText
        li.appendChild(liText)
        postCard.appendChild(li);
        }
        
    }