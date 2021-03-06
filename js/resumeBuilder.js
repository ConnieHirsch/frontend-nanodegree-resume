//////////////////
// Work Section //
//////////////////
var work = {

  "jobs": [{
    "employer": "Lyft",
    "title": "Rideshare Driver",
    "location": "Boston, MA",
    "dates": "2015-2016",
    "description": "Drives people around in a manner not entirely unlike a taxi driver, only better."
  }, {
    "employer": "Analog Devices",
    "title": "Front End Developer",
    "location": "Norwood, MA",
    "dates": "2012-2014",
    "description": "Developed front end for in-house resource tracking web application"
  }, {
    "employer": "Harvard Graduate School Of Arts and Sciences",
    "title": "File Clerk",
    "location": "Cambridge, MA",
    "dates": "2011-2012",
    "description": "Opened, processed, filed graduate school applications"
  }, {
    "employer": "U.S Census Bureau",
    "title": "Census Enumerator",
    "location": "Somerville, MA",
    "dates": "2010-2011",
    "description": "Went door to door contacting citizens whose census forms had not been returned."
  }, {
    "employer": "Houghton Mifflin",
    "title": "Senior Software Architect",
    "location": "Boston, MA",
    "dates": "1998-2008",
    "description": "Sales and Marketing applications in Lotus Notes and SQL, IT Support"
  }],

  //encapsulated display function
  "display": function() {
    for (var job = 0; job < work.jobs.length; job++) {
      $("#workExperience")
        .append(HTMLworkStart);
      //console.log(work.jobs[job].employer);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;

      $(".work-entry:last")
        .append(formattedEmployerTitle);

      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last")
        .append(formattedDates);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $(".work-entry:last")
        .append(formattedLocation)
        .append("<div style='clear: both;'></div>");
      var formattedDescription =
        HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last")
        .append(formattedDescription);
    }
  }
};

work.display();

////////////////////////////////
//  education section         //
////////////////////////////////
var education = {
  "schools": [{
    "name": "Udacity",
    "location": "Somerville, MA",
    "degree": "Nanodegree",
    "majors": ["Front End Web Developer"],
    "dates": "2016",
    "url": "http://www.udacity.com"
  }, {
    "name": "American International College, Computer Career Institute",
    "location": "Burlington, MA",
    "degree": "Master Certificate",
    "majors": ["Enterprise Solutions Developer"],
    "dates": "2008-2011",
    "url": "https://en.wikipedia.org/wiki/American_Career_Institute"
  }, {
    "name": "American International College, Computer Career Institute",
    "location": "Cambridge, MA",
    "degree": "Master Certificate",
    "majors": ["Visual Communication - Digital 3-D Design"],
    "dates": "2008-2011",
    "url": "https://en.wikipedia.org/wiki/American_Career_Institute"
  }, {
    "name": "Boston University, School of Public Communication",
    "dates": "1977-1981",
    "location": "Boston, MA",
    "majors": ["Journalism"],
    "degree": "",
    "url": "http://www.bu.edu/"
  }],
  "onlineCourses": [{
    "title": "Front End Web Developer",
    "school": "Udacity",
    "date": "2015-2016",
    "url": "http://www.udacity.com/course/ud804"
  }],

  //encapsulated display function
  "display": function() {

    for (var school = 0; school < education.schools.length; school++) {
      $("#education")
        .append(HTMLschoolStart);
      //console.log(education.schools[school].name);
      var formattedschoolName =
        HTMLschoolName.replace("%data%", education.schools[school].name);
      $(".education-entry:last")
        .append(formattedschoolName);

      var formattedschoolDates =
        HTMLschoolDates.replace("%data%", education.schools[school].dates);
      $(".education-entry:last")
        .append(formattedschoolDates);
      var formattedschoolLocation =
        HTMLschoolLocation.replace("%data%", education.schools[school].location);
      $(".education-entry:last")
        .append(formattedschoolLocation)
        .append("<div style='clear: both;'></div>");

      // formatting an absence of degree -- don't show degree + comma if no degree.
      var formattedComma = ",";
      if (!education.schools[school].degree) {
        formattedComma = "";
      }

      var formattedschoolDegreeMajor =
        HTMLschoolDegreeMajor.replace("%degree%", education.schools[school].degree)
        .replace("%comma%", formattedComma)
        .replace("%major%", education.schools[school].majors);
      $(".education-entry:last")
        .append(formattedschoolDegreeMajor);

      var myURL = education.schools[school].url;
      var formattedURL = HTMLonlineURL.replace("%url%", myURL)
        .replace("%data%", myURL);
      $(".education-entry:last")
        .append(formattedURL);


    }

    $("#education")
      .append(HTMLonlineClasses);
    for (var onlineCourse = 0; onlineCourse < education.onlineCourses.length; onlineCourse++) {
      var formattedTitleSchool = HTMLonlineTitleSchool.replace("%title%", education.onlineCourses[onlineCourse].title)
        .replace("%school%", education.onlineCourses[onlineCourse].school);
      var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
      var OnlineURL = education.onlineCourses[onlineCourse].url;
      var formattedOnlineURL = HTMLonlineURL.replace("%url%", OnlineURL)
        .replace("%data%", OnlineURL);
      $(".onlineClasses-entry:last")
        .append(formattedTitleSchool);
      $(".onlineClasses-entry:last")
        .append(formattedDates)
        .append("<div style='clear: both;'></div>");
      $(".onlineClasses-entry:last")
        .append(formattedOnlineURL);
    }
  }
};

education.display();


////////////////////////////////
//  project section           //
////////////////////////////////


var projects = {
  "projects": [{
    "title": "Big Foo, Which Has Two Pictures",
    "dates": "2011",
    "description": "Little bunny Foo Foo Went hopping through the forest Scooping up the" +
      " field mice And bopping them on the head Down came the Good Fairy, and she said" +
      " 'Little bunny Foo Foo I don't want to see you Scooping up the field mice And" +
      " bopping them on the head. 'I'll give you 3 chances, And if you don't behave, " +
      "I will turn you into a goon!'",
    "images": ["images/leverett-320x240.jpg", "images/rooster-320x240.jpg"],
    "imagesAlt": ["Sky over the Leverett Circle, Boston", "Rooster, Somerville MA"],
    "url": "http://www.constancehirsch.com"
  }, {
    "title": "This Project Has No Picture",
    "dates": "2012",
    "description": "Little bunny Foo Foo Went hopping through the forest Scooping up the" +
      " field mice And bopping them on the head Down came the Good Fairy, and she said" +
      " 'Little bunny Foo Foo I don't want to see you Scooping up the field mice And" +
      " bopping them on the head. 'I'll give you 3 chances, And if you don't behave, " +
      "I will turn you into a goon!'",
    "images": [""],
    "imagesAlt": [""],
    "url": "http://www.constancehirsch.com"
  }, {
    "title": "Little Bunny FooFoo, Which Has Only One Picture",
    "dates": "2013",
    "description": "Little bunny Foo Foo Went hopping through the forest Scooping up the" +
      " field mice And bopping them on the head Down came the Good Fairy, and she said" +
      " 'Little bunny Foo Foo I don't want to see you Scooping up the field mice And" +
      " bopping them on the head. 'I'll give you 3 chances, And if you don't behave, " +
      "I will turn you into a goon!'",
    "images": ["images/wormedShell-320x240.jpg"],
    "imagesAlt": ["Worm casts in a conch shell"],
    "url": "http://www.constancehirsch.com"
  }],
  //encapsulated display function
  "display": function() {
    var projCount = 0;
    var addGray = "";
    for (var proj = 0; proj < projects.projects.length; proj++) {
      if (projCount === 0 || projCount === 2) {
        addGray = " project-gray";
      } else {
        addGray = "";
      }
      var formattedprojectStart = HTMLprojectStart.replace("%extraClass%", addGray);
      $("#projects")
        .append(formattedprojectStart);
      var formattedprojectTitle =
        HTMLprojectTitle.replace("%url%", projects.projects[proj].url)
        .replace("%data%", projects.projects[proj].title)
        .replace("%dates%", projects.projects[proj].dates);
      $(".project-entry:last")
        .append(formattedprojectTitle);

      var formattedprojectDescription =
        HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
      $(".project-entry:last")
        .append("<p>" + formattedprojectDescription);

      if (projects.projects[proj].images.length > 0) {
        for (var i = 0; i < projects.projects[proj].images.length; i++) {
          var formattedprojectImage =
            HTMLprojectImage.replace("%data%", projects.projects[proj].images[i])
            .replace("%datum%", projects.projects[proj].imagesAlt[i]);
          $(".project-entry:last")
            .append(formattedprojectImage);
        }
      }
      projCount++;
      $(".project-entry:last")
        .append("</p><div style='clear: both;'></div>");
    }
  }
};

projects.display();


/////////////////
//bio section
////////////////
var bio = {
  "name": "Connie Hirsch",
  "role": "Front End Web Developer",
  "contacts": {
    "mobile": "<a href='tel:+1-617-555-1234'>617 555-1234</a>",
    "email": "<a href='mailto:connie.hirsch@gmail.com?Subject=Hello'>connie.hirsch@gmail.com</a>",
    "github": "<a href='https://github.com/ConnieHirsch' target='_blank'>ConnieHirsch</a>",
    "twitter": "<a href='https://twitter.com/ConnieHirsch' target='_blank'>ConnieHirsch</a>",
    "linkedin": "<a href='https://www.linkedin.com/in/conniehirsch' target='_blank'>ConnieHirsch</a>",
    "location": "<a href='https://en.wikipedia.org/wiki/Somerville,_Massachusetts' target='_blank'>Somerville, MA</a>"
  },
  "contactsIcon": {
    "mobile": "<i class='fa fa-phone'></i>",
    "email": "<i class='fa fa-paper-plane'></i>",
    "github": "<i class='fa fa-git'></i>",
    "twitter": "<i class='fa fa-twitter'></i>",
    "linkedin": "<i class='fa fa-linkedin'></i>",
    "location": "<i class='fa fa-home'></i>"
  },
  "welcomeMessage": "<p>I've spent more than 20 years working with application programs such" +
    " as Ingres, SQL Server, Lotus Notes, Filemaker, and other packages.  I've studied C and" +
    " Java, and have actually done front end coding in PHP, so I know I have the hard talent" +
    " and soft skills to excel at web development.</p>" +
    "<p>Hiring requirements for these jobs have sure changed!-- when last I was looking for" +
    " a  coding job, you weren't expected to have an online portfolio of project examples.  " +
    "Udacity in particular focuses on projects that showcase exactly the code and process that" +
    " employers are expecting.</p>" +
    "<p>Plus... I really do find coding -- making pages, programs work -- to be <em>fun</em>.  " +
    "I like solving problems, I like looking at a working page I've made, I like interacting" +
    " with the users to make it better for them.  This is exactly where I should be.</p>",
  "skills": [{
    "skill": "PHP",
    "info": "Self-taught, in fact, but only after formal Java school."
  }, {
    "skill": "CSS3",
    "info": "I can make web pages sit up and do tricks."
  }, {
    "skill": "Object-oriented coding",
    "info": "I started being a capital-P Programmer when I understood that programs" +
      " really are ALL objects."
  }, {
    "skill": "Knitting",
    "info": "More in common with programming than you might think."
  }, {
    "skill": "Writing",
    "info": "Started college with the intention to become a journalist. Became a coder" +
      " instead, but I can write documentation like whoa."
  }, {
    "skill": "Navigation",
    "info": "I am hardly ever lost, but occasionally I don&#39;t know where I am."
  }, {
    "skill": "Demolition Derby",
    "info": "Only really the avoiding being HIT part. That comes in handy in Boston traffic."
  }],
  "biopic": {
    "pic": "images/watercolorSmall.jpg",
    "alt": "A picture of me."
  },
  //encapsulated display function
  "display": function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $("#topTitle")
      .append(formattedName);
    $("#topTitle")
      .append(formattedRole);

    for (var contact = 0; contact < bio.contacts.length; contact++) {
      console.log(bio.contacts[contact]);
    }
    var formattedmobile = HTMLmobile.replace("%icon%", bio.contactsIcon.mobile)
      .replace("%data%", bio.contacts.mobile);
    var formattedemail = HTMLemail.replace("%icon%", bio.contactsIcon.email)
      .replace("%data%", bio.contacts.email);
    var formattedgithub = HTMLgithub.replace("%icon%", bio.contactsIcon.github)
      .replace("%data%", bio.contacts.github);
    var formattedtwitter = HTMLtwitter.replace("%icon%", bio.contactsIcon.twitter)
      .replace("%data%", bio.contacts.twitter);
    var formattedlinkedin = HTMLlinkedin.replace("%icon%", bio.contactsIcon.linkedin)
      .replace("%data%", bio.contacts.linkedin);
    var formattedlocation = HTMLlocation.replace("%icon%", bio.contactsIcon.location)
      .replace("%data%", bio.contacts.location);

    // add it to the header AND footer as well!
    $(formattedmobile)
      .appendTo("#footerContacts");
    $(formattedmobile)
      .appendTo("#topContacts");
    $(formattedemail)
      .appendTo("#topContacts");
    $(formattedemail)
      .appendTo("#footerContacts");
    $(formattedgithub)
      .appendTo("#topContacts");
    $(formattedgithub)
      .appendTo("#footerContacts");
    $(formattedtwitter)
      .appendTo("#topContacts");
    $(formattedtwitter)
      .appendTo("#footerContacts");
    $(formattedlinkedin)
      .appendTo("#topContacts");
    $(formattedlinkedin)
      .appendTo("#footerContacts");
    $(formattedlocation)
      .appendTo("#topContacts");
    $(formattedlocation)
      .appendTo("#footerContacts");

    var formattedbiopic = HTMLbioPic.replace("%data%", bio.biopic.pic)
      .replace("%datum%", bio.biopic.alt);
    $("#bioPic")
      .append(formattedbiopic);

    var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#welcome")
      .append(formattedWelcome);

    $("#madSkills")
      .append(HTMLskillsStart);
    //console.log(bio.skills);
    var formattedSkills = "";
    if (bio.skills.length > 0) {
      for (var i = 0; i < bio.skills.length; i++) {
        var nextSkill = HTMLskills.replace("%info%", bio.skills[i].info)
          .replace("%data%", bio.skills[i].skill);
        formattedSkills = formattedSkills.concat(nextSkill);
      }
    }
    $("#skills")
      .append(formattedSkills);
  }

};

bio.display();


///////////////////
// map magic     //
///////////////////
$("#mapDiv")
  .append(googleMap);


/////////////////////
// experimental json
// creates valid json text in console from education and jobs -- for key to map.

var places = '{"places" :[';
for (var job = 0; job < work.jobs.length; job++) {
  places += ('{"location": "' + work.jobs[job].location +
    '", "name" : "' + work.jobs[job].employer +
    '", "type" : "work"},');
}
//places = places.substr(0, places.length-1);
//places += ']';
for (var school = 0; school < education.schools.length; school++) {
  places += ('{"location": "' + education.schools[school].location +
    '", "name" : "' + education.schools[school].name +
    '", "type" : "school"},');
}
places = places.substr(0, places.length - 1);
places += ']}';
console.log(places);