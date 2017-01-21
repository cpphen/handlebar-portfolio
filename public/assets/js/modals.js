$(document).on('click', '#ContactMe', contact);
$(document).on('click', '#education', education);
// $(document).on('click', '#experience', experience);
$(document).on('click', '.close', close);

var modal = $('#myModal');

function contact(){
	var myName = $('<h3 id="myName" style="margin: 0px; margin-top: 40px; margin-bottom: 25px; margin-left: 200px; width:100px; background-color: transparent; color: black;">').text("Henry Lee");
	var email = $('<a id="myContact" style="color: blue" href = "/contact">').text("BtnySci@yahoo.com");
	var number = $('<h3 id="myNum" style="margin: 0px; margin-top: 25px; margin-left: 192px; width:120px; background-color: transparent; color: black">').text("818-645-5939");

	$('.modal-content').append(myName);
	$('.modal-content').append(email);
	$('.modal-content').append(number);

	$('#myModal').css('display', 'block');
}

// function experience(){
// 	var cExp = 
// }

function education(){
	var lavcArr = ["C++", "C#", "Object Oriented Programming", "Data Structures"];
	var uclaArr = ["Full Stack Web Development", "Javascript", "NodeJS", "ReactJS", "Handlebars", "Express", "JQuery", "HTML5", "CSS", "MySQL", "MongoDB", "Firebase", "Sequelize"];

	// var lavc = $('<h3 style="margin: 0px; margin-top: 40px; margin-bottom: 25px; margin-left: 200px; width:100px; background-color: transparent; color: black;">').text("Los Angeles Valley College (2014-2016)");

	// var lavcLang = $('<h3 style="margin: 0px; margin-top: 40px; margin-bottom: 25px; margin-left: 200px; width:100px; background-color: transparent; color: black;">').text("- C++ / C# / OOP/ Data Structures");
	// var div = $('<div>');
	// var ucla = $('<h3 style="margin: 0px; margin-top: 40px; margin-bottom: 25px; margin-left: 90px; width:300px; background-color: transparent; color: black;">').text("UCLA Extension Coding Boot Camp");
	// div.append(ucla);
	var laUl = $('<ul id="ucla" class="ucla" style="margin: 0px; padding: 0px; float: none; margin-right: 200px; list-style-type: circle; width: 335px;">').text("UCLA Extension Coding Boot Camp (2016 - 2017)");
	// div.append(laUl);
	$('.modal-content').append(laUl);
 	
	for (var x = 0; x < uclaArr.length; x++){
		// console.log('type of LI' + " " + typeof uclaArr[x]);
		var ucLi = $('<li class="ucLI" style="color: blue; font-size: 14px; display: list-item; width: 180px; padding: 7px; margin-left:70px; text-align: left">' + uclaArr[x] + '</li>');
		laUl.append(ucLi);
	}
	// $('.modal-content').append(div);

	var ul = $('<ul id="lavc" class="lavc" style="width: 275px; margin: 0px; padding: 0px; float: none; margin-right: 255px; margin-top:20px; list-style-type: circle;">').text("Los Angeles Valley College (2013 - 2016)");
	$('.modal-content').append(ul);

	for(var i = 0; i < lavcArr.length; i++){
		var li = $('<li class="vcLI" style="color: blue; font-size: 14px; display: list-item; width: 180px; padding: 7px; margin-left:70px; text-align: left">' + lavcArr[i] + '</li>');
		ul.append(li);
	}

	
	var ucr = $('<h3 id="ucr" style="margin: 0px; font-size: 15px; margin-top: 15px; margin-left: -20px; width:500px; background-color: transparent; color: black;">').text("University of California Riverside B.A Political Science (2009 - 2012)");
	var smc = $('<h3 id="smc" style="margin: 0px; font-size: 15px; margin-top: 15px; margin-left: -6px; width:265px; background-color: transparent; color: black;">').text("Santa Monica College (2006 - 2009)");
	// $('.modal-content').append(ucla);
	// $('.modal-content').append(lavc);
	$('.modal-content').append(ucr);
	$('.modal-content').append(smc);

	$('#myModal').css('display', 'block');

}	

// <div id="myModal" class="modal">

//   <!-- Modal content -->
//   <div class="modal-content">
//     <span class="close">&times;</span>
//   </div>

// </div>
window.onclick = function(event) {
    if (event.target == modal) {
        // modal.style.display = "none";
        $('#myModal').css('display', 'none');
    }
}

function close(){
	// $('.modal-content').empty();
	$('#myName').remove();
	$('#myContact').remove();
	$('#myNum').remove();
	$('#myModal').css('display', 'none');
	$('#ucla').remove();
	$('#lavc').remove();
	$('#ucr').remove();
	$('#smc').remove();
}