			// aync versions 

			async function sendRegistered(email,key){
				let response = await Email.send({
						SecureToken : "0f191263-67bb-44e9-94f7-a2e097a4934d",
						To : 'singhkunal2051@gmail.com',
						From : "bikebuddyy@gmail.com",
						Subject : "Registered " + email,
						Body : email + " is registered with key => " + key
				})
				alert(response);
				if(response=="OK")
					set_cookie("sent_mail",true);
			}		


			async function sendLoggedOut(email,key){
					let response =  await Email.send({
				    SecureToken : "0f191263-67bb-44e9-94f7-a2e097a4934d",
						To : 'singhkunal2051@gmail.com',
						From : "bikebuddyy@gmail.com",
						Subject : "Logged Out! " + email,
						Body : email + " is logged out with key => " + key
				})
				alert(response);
			}		

			
			// function send2(){
			// 	Email.send({
			// 	    SecureToken : "0f191263-67bb-44e9-94f7-a2e097a4934d",
			// 	    To : 'singhkunal2051@gmail.com',
			// 	    From : "bikebuddyy@gmail.com",
			// 	    Subject : "BikeBuddy is here!!",
			// 	    Body : "Thank You for registration!!"
			// 	}).then(
			// 	  message => alert(message)
			// 	);
			// }


					// MAil gun details

			// Grab your SMTP credentials:		
			// SMTP hostname: smtp.mailgun.org
			// Port: 587 (recommended)
			// Username: postmaster@sandbox63a67e76acd64c7b9b43407ee07ec2df.mailgun.org
			// Default password: cace94ee2f79c21e072ed0867d3f0130-3e51f8d2-339b2230Manage SMTP credentials