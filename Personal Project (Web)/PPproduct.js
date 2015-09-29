/**
 * 
 */

 //Hard coding of modal windows
$(function() {
    $( "#economicalDialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
    
    $( "#sportDialog" ).dialog({
        autoOpen: false,
        show: {
          effect: "blind",
          duration: 1000
        },
        hide: {
          effect: "explode",
          duration: 1000
        }
      });
    
    $( "#pharmDialog" ).dialog({
        autoOpen: false,
        show: {
          effect: "blind",
          duration: 1000
        },
        hide: {
          effect: "explode",
          duration: 1000
        }
      });
    
      //Click functions pertaining to modal windows
    $( "#economical" ).click(function() {
      $( "#economicalDialog" ).dialog( "open" );
    });
    $( "#sport" ).click(function() {
        $( "#sportDialog" ).dialog( "open" );
      });
    $( "#pharm" ).click(function() {
        $( "#pharmDialog" ).dialog( "open" );
      });
    
    $("#calculate").click(function(){
    	//Validation
    	var isValid = $('#form').validate().form();
    	
    	//Collecting of macro information
    	var protein = $("#protein").val() ;
    	var carbs = $("#carbs").val();
    	var fats = $("#fats").val();
    	var calories = $('#kcal').val((protein*4) + (carbs*4) + (fats*9));
    	
    	
    	//function with parameters
    	$('#calculate').click(function Calories(calories){
    		var calories = $('#kcal').val((protein*4) + (carbs*4) + (fats*9));
    		alert("OK!")
    	});
    
    	//use of an array
    	var store = [protein, carbs, fats];
    	if ($("#economical_rq").is(':checked')){
    		var calories = (((protein *4) *.4)) + ((carbs*4)*.4) + ((fats*9)*.2);
    		alert("Protein adj: " + (protein*.4).toFixed(2)  + "g , Carbohydrates adj: " + (carbs*.4).toFixed(2) + "g , Fats adj: " + (fats*.2).toFixed(2) + "g");
    		document.getElementById("kcal").value = calories.toFixed(0);
    	}
    	
    });
    	
    	//Hard coding of validation
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
  	
  	$('#form').validate({
  	rules: {
  	
  		protein: {
  		required: true,
  		digits: true
  	},
  		carbs: {
  		required: true,
  		digits: true
  	},
  		fats: {
  		required: true,
  		digits: true
  	},
  		num4: {
  		required: true,
  		digits: true
  		}
  	},
  	messages: {
  		protein: {
  			required: "<-- Please enter a number here"
  		},
  		carbs: {
  			required: "<-- Please enter a number here"
  		},
  		fats: {
  			required: "<-- Please enter a number here"
  		},
  		num4: {
  			required: "<-- Please guess a number here"
  				
  		}
  	},

  });


    
  });

  