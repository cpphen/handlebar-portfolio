// var helper = require('sendgrid').mail
// var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);


// // using SendGrid's v3 Node.js Library
// // https://github.com/sendgrid/sendgrid-nodejs



// var email = {

// 	send: function(emSubject, email, message, callback){
			
// 			var from_email = new helper.Email(email);
// 			var to_email = new helper.Email('btnysci@yahoo.com');
// 			var subject = emSubject;
// 			var content = new helper.Content("text/plain", message);
// 			var mail = new helper.Mail(from_email, subject, to_email, content);

// 			var request = sg.emptyRequest({
// 			  method: 'POST',
// 			  path: '/v3/mail/send',
// 			  body: mail.toJSON()
// 			});
// 			console.dir("request");
// 			console.dir(JSON.stringify(request, null, 4));

// 			sg.API(request, function(error, response) {
// 			  if(error){
// 			  	throw error;
// 			  	console.log(error);
// 			  }   	
// 			  console.log(response.statusCode)
// 			  console.log(response.body)
// 			  console.log(response.headers)
// 			  // callback(response);
// 			});

// 			callback();
// 	}
// }

  
var sendgrid = require("sendgrid")(process.env.SENDGRID_API_KEY);
var email = new sendgrid.Email();
var eeemail = {

	send: function(emSubject, eemail, message, callback){


		email.addTo("btnysci@yahoo.com");
		email.setFrom(eemail);
		email.setSubject(emSubject);
		email.setHtml(message);

		sendgrid.send(email);
		
		callback();
	}
}
module.exports = eeemail;
