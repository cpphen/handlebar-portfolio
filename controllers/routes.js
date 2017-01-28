var express = require('express');

var router = express.Router();

var email = require('../mail/email');
// var helper = require('sendgrid').mail;
// var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

var homeData = {
	headerName: "Henry Lee",
	PortfolioLi: "Portfolio", 
	ContactLi: "Contact",
	AboutLi: "About",
	aboutMe: "About Me",
	paragraph: "Hello! My name is Henry and I am ecstatic to become a software engineer and a full stack web developer. I got into programming after graduating from the University of California Riverside with a bachelors in Political Science. Afterwards, I took two years of C++ and then enrolled in the Coding Boot Camp at UCLA Extension for six months. This is just the very beginning of what I consider my coding career and I plan on expanding my knowledge in JavaScript, C++ and various languages all through out my life.",
	paragraphTwo: "My dream job is to work at a video game company writing code for games. I believe that would be very fun and when I work with something you enjoy, I will be able to absorb the material better and also perform better.",
	paragraphThree: "Some of my hobbies are skating, playing games, exploring music, cooking and coding.",
	connectHeader: "Connect with Me",
	formName: "Name:",
	formSubject: "Subject:",
	formEmail: "Email:",
	formMessage: "Message:",
	connectWith: "Connect with Me",
	contactInfo: "Contact Info",
	education: "Education",
	experience: "Experience",
	projects: "Projects",
	hobbies: "Hobbies",
	skills: "Skills"
};

router.get('/', function(req, res){
	res.render('home', homeData);
});

router.get('/contact', function(req, res){
	res.render('contact', homeData);
});

router.get('/portfolio', function(req, res){
	res.render('portfolio', homeData);
});

router.post('/email', function(req, res){
	var name = req.body.fullName;
	var emSubject = req.body.subject;
	var senderMail = req.body.email;
	var message = req.body.message;

	// var myEmail = 'btnysci@yahoo.com';

	email.send(name, emSubject, senderMail, message, function(){
		res.redirect('/contact');	
	});
});
module.exports = router;