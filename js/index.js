


$("#submit-button").click(getInterviewer);

function getInterviewer (){

	var instructors = [
	{name:'Jake Sussman', work: 'Product Manager', company: 'mindbodygreen', industry: 'Tech', headshot: "images/branson.jpg"},
	{name:'John Doe', work: 'Managing Director', company: 'Goldman Sachs', industry: 'Finance', headshot: "images/branson.jpg" },
	{name:'Jane Doe', work: 'Vice President', company: 'Deloitte', industry: 'Consulting', headshot: "images/branson.jpg" },

	]
	
	var randomNum = Math.floor(Math.random()*4);

	var randomInstructor = instructors[randomNum];

	$("#interviewer-profile").append("<h1>Here Is Your Interviewer </h1>");
	$("#interviewer-attributes").append("<p class='appendedInstructor'>" + "Name: " + randomInstructor.name + "</p>");
	$("#interviewer-attributes").append("<p class='appendedInstructor'>" + "Job: " + randomInstructor.work + "</p>")
	$("#interviewer-attributes").append("<p class='appendedInstructor'>" + "Company: " + randomInstructor.company + "</p>")
	$("#interviewer-attributes").append("<p class='appendedInstructor'>" + "Industry: " + randomInstructor.industry + "</p>")
	$("#interviewer-headshot").append("<img class='instructorImage' src='" + randomInstructor.headshot + "'>")
	
	// $("#interviewer-profile").append(randomInstructor.name)


}