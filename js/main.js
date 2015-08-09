function askQuestions()	{

	var firstName = prompt('What is your first name');
	var lastName = prompt('What is your last name?');

	if (firstName.toLowerCase() === 'general' && lastName.toLowerCase() != 'Assembly') {
		console.log('Oh hai General ' + lastName + '!');
	}

	var faveColour = prompt('What is your favourite colour?').toLowerCase();
	if (faveColour == 'red' ||
		faveColour == 'green' ||
		faveColour == 'blue' ||
		faveColour == 'yellow') {
		$('h2').css('background-color', faveColour);
	}

}


// When the page has loaded

$(function() {

	$('img').on('click', askQuestions);

	var sections = $('h3').next();

	// Hide all sections
	sections.hide();

	// When the user clicks an h3
	$('h3').on('click', function() {

		// Remember the section the user wants to see
		var thisSection = $(this).next();

		// Hide all the sections except the one the user wants to see
		sections.not(thisSection).slideUp(500);

		// Toggle the one the user wants to see
		thisSection.slideToggle(500);


	})



});