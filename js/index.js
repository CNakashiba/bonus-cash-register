$(document).ready(function(){

	$('form').submit(main);

	// conductor
	function main(){	
		var a = inputAmount(); 				// returns the amount value
		var b = addAmount(a); 				// adds amount to the running total
		event.preventDefault();
		totalAmount(b);						// changes the total amount
	}

	// get users new item
	function inputAmount(){
		return $('#new-entry').val();		// logs the value
		// how to reset the input field after hitting return? [type = "reset"]?	
		console.log(a);	
	}

	// the inputAmount gets placed in the #entries
	function addAmount() {
		$('#entries').text(inputAmount);	// inputAmount gets written in the #entries
		// how to keep and add the 2nd + entries to the #entries?
	}

	// the #total gets updated
	function totalAmount (b){
		var currentTotal = 0;
		b = currentTotal + inputAmount();
		// how do I do currentTotal + inputAmount + inputAmount + inputAmount...? 
		$('#total').text("$", addAmount);
	}
})