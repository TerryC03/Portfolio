$(function(){
		$('#tabs').tabs();
		
		$('#validate').click(function(){
	var isValid = $('#form').validate().form();
	
	if(isValid){
		alert("Passed!");
	}
});
	});
	

	
	
