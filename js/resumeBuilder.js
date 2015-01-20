
  var bio = {
  "name" : "Rita Morais",
  "role" : "Graphic Designer",
  "contacts" : {
  "email" : "rita.dpmorais@gmail.com",
  "location" : "Portugal/Switzerland",
  "github": "rrritamorais"
  }, 
  "pictureURL" : "images/ritaprofile.jpg",
  "welcomeMessage" : "Nice to meet ya!",
  "skills" : ["Photoshop", "Illustrator", "Drawing", "Dancing"]
  };



bio.display = function(){
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var bioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#header").prepend(bioPic);

  if(bio.skills.length > 0) $("#header").append(HTMLskillsStart);

  for(skill in bio.skills) {

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills").append(formattedSkill);
  }
};

bio.display();




function displayWork () {
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
      "description": "Head teacher, content and activity developer for the English Programme of an International Pre-school. Throughout the course of a year, followed a "
    },
    {
      "employer": "Jibun Mirai Associé",
      "title": "Editorial Designer",
      "location": "Osaka - Japan",
      "dates": "Oct 2011 - Feb 2013",
      "description": "Portuguese lesson content developer and designer of all the school's eight languages' text books layouts and materials"
    }
    ]
}


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

}

displayWork ();



var projects = {
  "projects": [
    {
      "title": "Personal Website",
      "dates": "Feb 2014",
      "description": "Online portfolio with all my projects",
      "images": "images/rrrita.jpg"  
    },
    {
      "title": "One Two Triangle",
      "dates": "Feb 2014 - Feb 2015",
      "description": "Weekly updated illustration project with Nathan Gotlib, illustrating each other's dreams",
      "images": "images/onetwotriangle.jpg" 
    },
    {
      "title": "Cover Illustration",
      "dates": "Aug 2014",
      "description": "Cover art for Japanese international magazine 'Kansai Scene'",
      "images": "images/kansaiscene.jpg" 
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

    var projectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
    $(".project-entry:last").append(projectImage);

    }

}

projects.display();

var education = {
  "schools": [
    {
      "name": "Escola Superior de Artes e Design",
      "city": "Matosinhos",
      "degree": "BA",
      "course": "Communication Design"
    },
    {
      "name": "Yildiz Technical University",
      "city": "Istanbul",
      "degree": "BA Erasmus",
      "course": "Communication Design"
    }
  ],
  "onlineCourses": [
  {
      "name" : "Udacity",
      "city": "Lausanne",
      "degree": "Nano degree",
      "course": "Front End Web Developer"
    }
  ]
}














function inName(name) {

  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] +" "+name[1];

};
$("#main").append(internationalizeButton);


// function locationizer(work_object) {

//   var locationArray = [];

//   for (job in work_object.jobs) {

//     var newLocation = work_object.jobs[job].location;
//     locationArray.push(newLocation);
  
//   }

//   return locationArray;
// }







