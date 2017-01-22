var helper = require('sendgrid').mail
var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);


// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

// var helper = require('sendgrid').mail;
// var from_email = new helper.Email('test@example.com');
// var to_email = new helper.Email('test@example.com');
// var subject = 'Hello World from the SendGrid Node.js Library!';
// var content = new helper.Content('text/plain', 'Hello, Email!');
// var mail = new helper.Mail(from_email, subject, to_email, content);

// var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
// var request = sg.emptyRequest({
//   method: 'POST',
//   path: '/v3/mail/send',
//   body: mail.toJSON(),
// });

// sg.API(request, function(error, response) {
//   console.log(response.statusCode);
//   console.log(response.body);
//   console.log(response.headers);
// });


var email = {

	send: function(emSubject, senderMail, message, callback){
			
			var from_email = new helper.Email(email);
			var to_email = new helper.Email('btnysci@yahoo.com');
			var subject = emSubject;
			var content = new helper.Content("text/plain", message);
			var mail = new helper.Mail(from_email, subject, to_email, content);

			var request = sg.emptyRequest({
			  method: 'POST',
			  path: '/v3/mail/send',
			  body: mail.toJSON()
			});
			console.dir("request");
			console.dir(JSON.stringify(request, null, 4));

			sg.API(request, function(error, response) {
			  if(error){
			  	console.log(error);
			  }   	
			  console.log(response.statusCode)
			  console.log(response.body)
			  console.log(response.headers)
			  callback(error);
			});

			// callback();
	}
}

module.exports = email;
  
// from_email = new helper.Email("test@example.com")
// to_email = new helper.Email("test@example.com")
// subject = "Sending with SendGrid is Fun"
// content = new helper.Content("text/plain", "and easy to do anywhere, even with Node.js")
// mail = new helper.Mail(from_email, subject, to_email, content)

// var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
// var request = sg.emptyRequest({
//   method: 'POST',
//   path: '/v3/mail/send',
//   body: mail.toJSON()
// });

// sg.API(request, function(error, response) {
//   console.log(response.statusCode)
//   console.log(response.body)
//   console.log(response.headers)
// });
