//MY BIOGRAPHY
var bio = {
    "name" : "Rita Morais",
    "role" : "Graphic Designer",
    "contacts" :
    {
      "mobile" : "913882979",
      "email" : "rita.dpmorais@gmail.com",
      "github" : "rrritamorais",
      "location" : "Lausanne, Switzerland",
      "blog" : "www.rrrita.com"
      
    }, 
    "pictureURL" : "images/ritaprofile.jpg",
    "WelcomeMsg" : "Nice to meet ya!",
    "skills" : ["Photoshop", "Illustrator", "Drawing", "Dancing"]
  };

bio.display = function(){
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var bioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
  var WelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.WelcomeMsg);
  var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);    
  var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
  var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
  var formattedBlog = HTMLblog.replace("%data%",bio.contacts.blog);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#header").append(bioPic);
  $("#header").append(WelcomeMsg);

  $("#topContacts").prepend(formattedGithub);
  $("#topContacts").prepend(formattedLocation);
  $("#topContacts").prepend(formattedBlog);
  $("#topContacts").prepend(formattedEmail);
  $("#topContacts").prepend(formattedMobile);

  $("#footerContacts").prepend(formattedGithub);
  $("#footerContacts").prepend(formattedLocation);
  $("#footerContacts").prepend(formattedBlog);
  $("#footerContacts").prepend(formattedEmail);
  $("#footerContacts").prepend(formattedMobile);

  if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for(skill in bio.skills) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills").append(formattedSkill);
  }
}
};

bio.display();

//MY WORK
var work = {
  "jobs": [
    {
      "employer": "Tasboa Lda",
      "title": "Intern",
      "location": "Lisbon - Portugal",
      "dates": "Sep 2014 - Now",
      "description": "Redesign interface for a better UX/UI for an online event app"
    },
    {
      "employer": "Minerva, BL KIDS",
      "title": "Head Teacher",
      "location": "Takarazuka - Japan",
      "dates": "Mar 2013 - Mar 2014",
      "description": "Head teacher, content and activity developer for the English Programme of an International Pre-school."
    },
    {
      "employer": "Jibun Mirai Associé",
      "title": "Editorial Designer",
      "location": "Osaka - Japan",
      "dates": "Oct 2011 - Feb 2013",
      "description": "Portuguese lesson content developer and designer of all the school's eight languages' text books layouts and materials."
    }
  ]
};

work.display = function(){

for(job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

  $(".work-entry:last").append(formattedEmployer.concat(formattedTitle));

  var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  $(".work-entry:last").append(formattedLocation);

  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedDates);

  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedDescription);

  }
};

work.display();

//MY PROJECTS
var projects = {
  "projects": [
    {
      "title": "Personal Website",
      "dates": "Feb 2014",
      "description": "Online portfolio with all my projects",
      "images": ["images/rrrita.jpg",
      "images/rrrita2.jpg"
      ] 
    },
    {
      "title": "One Two Triangle",
      "dates": "Feb 2014 - Feb 2015",
      "description": "Weekly updated illustration project with Nathan Gotlib, illustrating each other's dreams",
      "images": ["images/onetwotriangle.jpg"] 
    },
    {
      "title": "Cover Illustration",
      "dates": "Aug 2014",
      "description": "Cover art for Japanese international magazine 'Kansai Scene'",
      "images": ["images/kansaiscene.jpg"]
    }
  ]
};


projects.display = function () {
  for(project in projects.projects) {

    $("#projects").append(HTMLprojectStart);

    var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(projectTitle);
    
    var projectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(projectDates);

    var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(projectDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var projectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(projectImage);
      }
    }
  }
};

projects.display();

//MY EDUCATION
var education = {
  "schools": [
    {
      "name": "Escola Superior de Artes e Design",
      "location": "Matosinhos - Portugal",
      "degree": "BA",
      "dates": "2008-2011",
      "course": "Communication Design"
    },
    {
      "name": "Yildiz Technical University",
      "location": "Istanbul - Turkey",
      "dates": "2009-2010",
      "degree": "BA Erasmus",
      "course": "Graphic Design"
    }
  ],
  "onlineCourses": [
  {
      "school" : "Udacity",
      "dates": "2014-2015",
      "title": "Front End Web Developer",
      "url": "https://www.udacity.com/courses#!/all"
    }
  ]
};

education.display = function(){

for(school in education.schools) {
  $("#education").append(HTMLschoolStart);

  var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
  var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

  $(".education-entry:last").append(schoolName.concat(schoolDegree));

  var schoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
  $(".education-entry:last").append(schoolDates);

  var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
  $(".education-entry:last").append(schoolLocation);

  var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].course);
  $(".education-entry:last").append(schoolMajor);
}

if (education.onlineCourses.length > 0) {
  for (course in education.onlineCourses) {

    $(".education-entry:last").append(HTMLonlineClasses);

    var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);

    $(".education-entry:last").append(onlineTitle.concat(onlineSchool));

    var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
    $(".education-entry:last").append(onlineDates);

    var onlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
    $(".education-entry:last").append(onlineURL);
    }
  }
};

education.display();

$("#mapDiv").append(googleMap);

function inName(name) {
  name = bio.name;
  name = name.trim().split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] +" "+name[1];
}

$("#main").append(internationalizeButton);