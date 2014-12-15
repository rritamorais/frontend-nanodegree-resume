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
}

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
      "description": "Head teacher, content and activity developer for the English Programme of an International Pre-school"
    },
    {
      "employer": "Jibun Mirai Associé",
      "title": "Editorial Designer",
      "location": "Osaka - Japan",
      "dates": "Oct 2011 - Feb 2013",
      "description": "Portugues lesson content developer and designer of all the school's eight languages' text books layouts and materials"
    }
    ]
}

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
      "images": "images/kansaiscenejpg" 
    }
    ]
}

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



if(bio.skills.length > 0) {

  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
  
}





