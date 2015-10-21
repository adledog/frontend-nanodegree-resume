/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
	"name" : "Ryan Arnold",
	"role" : "Web Developer",
	"contacts": {
		"location": "Houston, TX",
		"mobile" : "(562)331-7159",
		"email" : "ryaarnold@gmail.com",
		"twitter" : "@thevioletknight",
		"github": "github.com/adledog"
	},
	"welcomeMessage" : "Hello! I am an aspiring Web Developer and Game Designer from Southern California.",
	"skills" : [
		"HTML", "CSS", "Javascript", "90 WPM typing speed"
	],
	"biopic" : "images/logo.png"
};

var education = {
	"schools": [
		{
			"name": "University of California Santa Barbara",
			"location": "Santa Barbara, California",
			"degree": "Bachelor of Arts",
			"majors": ["Physics"],
			"dates": 2015,
			"url": "ucsb.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Front End Web Developer Nanodegree",
			"school": "Udacity",
			"dates": 2015,
			"url": "www.Udacity.com"
		}
	]
};

var work = {
	"jobs": [
		{
			"employer": "Eolana Agency",
			"title": "Web Developer",
			"location": "McKinney, Texas",
			"dates": "June 2015 - Current",
			"description": "Designed websites for small businesses using Wordpress, HTML, and CSS."
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Sample Project 1",
			"dates": "January 2015 - April 2015",
			"description": "lorem ipsum dolor sit amet",
			"images": ["http://lorempixel.com/400/200/technics"]
		},
		{
			"title": "Sample Project 2",
			"dates": "June 2015 - September 2015",
			"description": "lorem ipsum dolor sit amet",
			"images": ["http://lorempixel.com/400/200/technics"]
		}
	]
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	$("#header").append(formattedName);

	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	$("#header").append(formattedRole);

	var formattedBiopic = HTMLbioPic.replace("%data%",bio.biopic);
	$("#header").append(formattedBiopic);

	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);


	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for (var skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}

	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	$("#header").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);

	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	$("#header").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);

	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	$("header").append(formattedTwitter);
	$("#footerContacts").append(formattedLocation);

	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	$("header").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);

	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	$("#header").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);
};

bio.display();

work.display = function() {
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedWorkDates);

		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedWorkLocation);

		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedWorkDescription);
	}
};

work.display();

projects.display = function() {
	for (var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		for (var image in projects.projects[project].images) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[0]);
			$(".project-entry:last").append(formattedImage);
		}

	}
};

projects.display();

education.display = function() {
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName =  HTMLschoolName.replace("%data%",education.schools[school].name);
		$(".education-entry:last").append(formattedName);

		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);

		for (var major in education.schools[school].majors) {
			var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors[major]);
			$(".education-entry:last").append(formattedMajor);
		}

		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
	}
	for (var classes in education.onlineCourses) {
		$(".education-entry:last").append(HTMLonlineClasses);

		var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[classes].title);
		$(".education-entry:last").append(formattedTitle);

		var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[classes].school);
		$(".education-entry:last").append(formattedSchool);

		var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[classes].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[classes].url);
		$(".education-entry:last").append(formattedURL);
	}
};

education.display();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
})

$("#mapDiv").append(googleMap);