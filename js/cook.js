function logout(){
  if(window.confirm("Do you want to log out?")==true){
      if(window.navigator.onLine){
          sendLoggedOut(localStorage.email,localStorage.license_key);
          delete_cookie("licensed");
          delete_cookie("email");
          delete_cookie("license_key");
          delete_cookie("sent_mail");
          window.location = "./index.html";
        }
      else{
          alert("Enable Internet to log out");
      }
  }
  else{
      console.log("Not logged out");
  }
}

function delete_cookie(name) {
localStorage.removeItem(name);
}

function set_cookie(name, value) {
localStorage.setItem(name,value);
}

function storeResponse(json){
  var found = false;
  reg = json;
  console.log("called function to store");
  err = "Invalid Email!!";

  for( let prop in reg ){
    console.log(prop + " : "  + reg[prop]);
    if(email.trim()===prop.trim()){
      if(reg[prop]===key){
        found=true;
        // console.log(prop);
        sendRegistered(email,key).then(response => ()=>{
            alert(response + " yay")
        })               
        console.log("second");
        set_cookie("licensed","true");
        set_cookie("email",email);
        set_cookie("license_key",key);
        alert('License verified! Thank you!');
        window.location = "./poems.html";
        console.log("redirected");
      }
      else if(reg[prop]+key==0){
        err = "Key Already in use!";
        break;
      }
      else{
        err = "Invalid Key!";
        break;
      }
    }
  }
  if(!found){
    alert(err);
  }
  document.getElementById("loader").style.display = "none";
}

function validateKey(){
	email = document.getElementById("email").value;
	key = Number(document.getElementById("key").value);
	document.getElementById("loader").style.display = "block";

	if(window.navigator.onLine){
		fetch('https://raw.githubusercontent.com/singhkunal2050/DiaryRegistrations/master/db.json')
		.then(response => response.json())
		.then(json => storeResponse(json))
		.catch(()=>{
		    alert(" Please enable internet for registering!")
		    document.getElementById("loader").style.display = "none";
		  })    
	}else{
		alert("Please enable Internet!");
	    document.getElementById("loader").style.display = "none";
	}

}
