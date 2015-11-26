var bio = {
    "name": "Mangala Srinivasan",
    "role": "Looking for a Opportunity!!",
    "welcomeMessage": "Hi! Welcome to My Online Resume!",
    "skills": ["HTML", "CSS", "JavaScript", "jQuery", "Git", "Java", "Testing", "Test Automation"],
    "biopic": "images/me.jpg",
    "contacts": [{
        "mobile": "+919371033784",
        "github": "maggiesri",
        "skype": "maggie3773",
        "location": "Pune, Maharashtra",
        "email": "maggiesri@hotmail.com"
    }]
};

var work = {
    "jobs": [{
        "employer": "Pondy Oxides & Chemicals",
        "title": "Accounts Assistant",
        "dates": "1992 - 1995",
        "location": "Chennai, Tamil Nadu, India",
        "description": "Worked in the Accounts Department."
    }, {
        "employer": "Jumbo Electronics",
        "title": "Accunts Assistant",
        "dates": "1995 - 1997",
        "location": "Dubai, UAE",
        "description": "worked in Banking section ."
    }, {
        "employer": "MRTI",
        "title": "Consultant",
        "dates": "1997 - 1999",
        "location": "Herzliya, Israel",
        "description": "Worked in Support/QA  and was incharge of docmentation of Help manuals."
    }, {
        "employer": "CarPro Systems",
        "title": "Software Support/ QA Engineer",
        "dates": "2003 - 2013",
        "location": "Pune, Maharashtra",
        "description": "Was in Charge of Support/QA Department."
    }]
};

var projects = {
    "project": [{
        "title": "Project 1",
        "dates": "2015",
        "description": "Build a Portfolio Site",
        "images": ["images/197x148.gif"]
    }, {
        "title": "Project 2",
        "dates": "2015",
        "description": "Online Resume",
        "images": ["images/197x148.gif"]
    }]
};

var education = {
    "schools": [{
        "name": "University Of Madras",
        "location": "Chennai, India",
        "degree": "BBM",
        "majors": "Banking Management and IT",
        "dates": 1992,
        "url": "http://www.unom.ac.in"
    }, {
        "name": "Institute of Cost Accountants of India",
        "location": "Chennai,India",
        "degree": "ICWAI",
        "majors": "Cost Accountant",
        "dates":  1992,
        "url": "http://icmai.in/icmai/"
    }],

    "onlineCourses": [{
            "title": "Intro to HTML and CSS",
            "school": " Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/ud304"
        }, {
            "title": "How to Use Git and GitHub",
            "school": " Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/ud775"
        }, {
            "title": "JavaScript Basics",
            "school": " Udacity",
            "dates": 2015,
            "url": "http://www.udacity.com/course/ud804"
        }

    ]
};


bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage, formattedMessage);
    $("#header").append(HTMLskillsStart);

    for (skill in bio.skills) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkills);
    };

    for (contact in bio.contacts) {
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact].email);
        var formatedGithub = HTMLgithub.replace("%data%", bio.contacts[contact].github);
        var formattedSkype = HTMLcontactGeneric.replace("%contact%", "skype").replace("%data%", bio.contacts[contact].skype);
        $("#topContacts").append(formattedMobile, formattedEmail, formatedGithub, formattedSkype);
    };
    for (contact in bio.contacts) {
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact].email);
        var formatedGithub = HTMLgithub.replace("%data%", bio.contacts[contact].github);
        var formattedSkype = HTMLcontactGeneric.replace("%contact%", "skype").replace("%data%", bio.contacts[contact].skype);
        $("#footerContacts").append(formattedMobile, formattedEmail, formatedGithub, formattedSkype);
    };
};

work.display = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(formattedEmployer + formattedTitle, formattedDates, formattedDescription);
    }
};

projects.display = function() {
    for (proj in projects.project) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[proj].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.project[proj].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[proj].description);

        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);

        for (image in projects.project[proj].images) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.project[proj].images[image]);
            $(".project-entry:last").append(formattedImage);
        }
    }
};

education.display = function() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var schName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedName = schName.replace("#", education.schools[school].url);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor);
    }

    $(".education-entry:last").append(HTMLonlineClasses);

    for (online in education.onlineCourses) {
        var SchlTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
        var formattedTitle = SchlTitle.replace("#", education.onlineCourses[online].url);
        $(".education-entry:last").append(formattedTitle);
        var formattedOLDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
        $(".education-entry:last").append(formattedOLDates);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
        $(".education-entry:last").append(formattedSchool);
    }
};

work.display();
projects.display();
education.display();
bio.display();

$("#mapDiv").append(googleMap);