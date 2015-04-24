/**
 * Bulls And Cows Project
 * Terry Carney
 * JavaScript 152-169
 */

//Global Variables
var randomNumber = (Math.floor(1000 + Math.random() * 9000)).toString();
var i = 0;
var clicks = 0;

$(function(){
	//Creating "random" 4-digit number...
$('#click').click(function(){
	$('#prompt').html("Number has been generated. Good luck!");
	console.log(randomNumber);
	});
	//Check for input/guesses
	
	//Column 1
$('#check').click(function(){
	$('#status1').css('color', 'red').html("X");
	var isValid = $('#game').validate().form();
	if (randomNumber.substring(0, 1) == $('#num1').val()){
		$('#status1').css('color', 'green').html("&#10003;&#10003;");
	}
	else if (randomNumber.substring(0,1) != $('#num1').val()){
		 for (i = 0; i < randomNumber.length; i++){ 
			 if (randomNumber.charAt(i) == $('#num1').val()){
				console.log(i);
				$('#status1').css('color', 'green').html("&#10003;");
				}
			 }
		 }
		
		 
	//Column 2
$('#status2').css('color', 'red').html("X");
	if (randomNumber.substring(1, 2) == $('#num2').val()){
		$('#status2').css('color', 'green').html("&#10003;&#10003;");
	}
	else if (randomNumber.substring(1,2) != $('#num2').val()){
		 for (i = 0; i < randomNumber.length; i++){ 
			 if (randomNumber.charAt(i) == $('#num2').val()){
				console.log(i);
				$('#status2').css('color', 'green').html("&#10003;");
				}
			 }
		 }
	//Column 3
		 $('#status3').css('color', 'red').html("X");
	if (randomNumber.substring(2, 3) == $('#num3').val()){
		$('#status3').css('color', 'green').html("&#10003;&#10003;");
	}
	else if (randomNumber.substring(2,3) != $('#num3').val()){
		 for (i = 0; i < randomNumber.length; i++){ 
			 if (randomNumber.charAt(i) == $('#num3').val()){
				console.log(i);
				$('#status3').css('color', 'green').html("&#10003;");
				}
			 }
		 }
	//Column 4
		 $('#status4').css('color', 'red').html("X");
	if (randomNumber.substring(3, 4) == $('#num4').val()){
		$('#status4').css('color', 'green').html("&#10003;&#10003;");
	}
	else if (randomNumber.substring(3,4) != $('#num4').val()){
		 for (i = 0; i < randomNumber.length; i++){ 
			 if (randomNumber.charAt(i) == $('#num4').val()){
				console.log(i);
				$('#status4').css('color', 'green').html("&#10003;");
				}
			 }
		}
		
	//Win Confirmation
		clicks++;
		if (randomNumber.substring(0, 1) == $('#num1').val() && randomNumber.substring(1, 2) == $('#num2').val() && randomNumber.substring(2, 3) == $('#num3').val() && randomNumber.substring(3, 4) == $('#num4').val()){
		alert("You Win!");	
		alert("Amount of Guesses: " + clicks);
		}
		
});
	$.validator.setDefaults({
		errorElement: "span",
		errorClass: "form_error",
		errorPlacement: function(error, element){
			error.insertAfter(element)
		}
	});
	
	$.extend($.validator.messages,{
		required: " Required Entry..."
	});
	
	$('#game').validate({
	rules: {
	
		num1: {
		required: true,
		digits: true
	},
		num2: {
		required: true,
		digits: true
	},
		num3: {
		required: true,
		digits: true
	},
		num4: {
		required: true,
		digits: true
		}
	},
	messages: {
		num1: {
			required: "<-- Please guess a number here"
		},
		num2: {
			required: "<-- Please guess a number here"
		},
		num3: {
			required: "<-- Please guess a number here"
		},
		num4: {
			required: "<-- Please guess a number here"
				
		}
	},

});
});