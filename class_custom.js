
var counter = 0;
var limit = 3;

$( document ).ready(function() {
    //console.log( "ready!" );
    //alert("ready");
    genClasses();

  //  if (counter == 0) {
  //  	$("#noClassWarning").fadeIn();
  //  }
});


var configClasses = require('users.json');
var classId = config.users[0];


function genClasses(){
	//var = i.tostring
	for (var i = 0; i < id.courses.length();++i) {
		var buttonName = i.tostring(); 
		var html =' ';
		html += "<button type='button' class='btn btn-default btn-lg btn-block' + name='" + buttonName + ">" + id.courses[i] + "</button>";
		$('#existingClasses').html(html);
	}
}


function addInput(divName){
	$("#noClassWarning").hide();
	if (counter == 1) {
	 	alert("Please fill in the information for your existing class before creating a new one 1");
	  	$("#add_new_class").css("display", "none");
	  	//counter++;
	 }
     if (counter == limit)  {
          alert("Please fill in the information for your existing class before creating a new one");
          $("#add_new_class").css("display", "none");
     }
     else {
     	 // $("#add_students").css("display", "block");
     	  $("#add_students").fadeIn();
     	  $("#add_new_class").css("display", "none");
          var newdiv = document.createElement('div');
          newdiv.innerHTML = "<div class='form'><br><p>Create a New Class</p>" + "<input class='class_name' id='class_name' placeholder='Enter Class Name' type='text' name=''></div><br>";
      		

          document.getElementById(divName).appendChild(newdiv);
          $(".form").fadeIn();
          counter++;
     }
}

var i = 1; 

function addStudents (divName) {
	var newdiv = document.createElement('div');
	//$("#add_students").css("display", "none");
	$("#submitForm").fadeIn();
	newdiv.innerHTML = "<div class='studentInfo'><p>Student #" + i + "</p><input class='studentInfo' type='text'>";
	newdiv.innerHTML += "<p class='studentInfo'>Phone Number</p><input type='text' class='studentInfo'></div><hr style='border-top: 1px solid #999;'>";

	i++; 
	document.getElementById(divName).appendChild(newdiv);
	$(".studentInfo").fadeIn();
}

function submitClass (divName) {
	$("#add_students").css("display", "none");
	$("#dynamicInput").css("display", "none");
	$("#studentInput").css("display", "none");
	$("#submitForm").css("display", "none");
	$("#add_new_class").css("display", "block");
}




