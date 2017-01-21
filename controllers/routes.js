var express = require('express');

var router = express.Router();

var mail = require('../mail/email');
// var helper = require('sendgrid').mail;
// var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

var homeData = {
	headerName: "Henry Lee",
	PortfolioLi: "Portfolio", 
	ContactLi: "Contact",
	AboutLi: "About",
	aboutMe: "About Me",
	paragraph: "Hello! My name is Henry Lee and I am ecstatic to become a software engineer and web developer. I got into programming after graduating UC Riverside with a bachelors in Political Science. After two years of C++, I enrolled in the Coding Boot Camp at UCLA Extension for six months. This is just the very beginning of what I consider my coding career and I plan on expanding my knowledge in JavaScript, C++ and various languages all through out my life.",
	paragraphTwo: "My dream job is to work at a video game company writing code for games. I believe when you work with something you enjoy, you will be able to absorb the material better and also perform better.",
	paragraphThree: "Some of my hobbies are skateboarding, playing games, exploring music and of course coding. Yes, I consider coding a hobby as I actually enjoy coding. Solving problems and also designing programs is very interesting to me and I enjoy it very much.",
	connectHeader: "Connect with Me",
	formName: "Name:",
	formSubject: "Subject:",
	formEmail: "Email:",
	formMessage: "Message:",
	connectWith: "ConnectWithMe",
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
	var email = req.body.email;
	var message = name + " " + req.body.message;

	var myEmail = 'btnysci@yahoo.com';

	mail.send(name, emSubject, email, message, myEmail, function(){
		res.redirect('/contact');
		
	})

});
module.exports = router;