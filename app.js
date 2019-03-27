var answers = { };


window.onload = function(){ 
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var nextBtn = document.getElementById('nextBtn');
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
  console.log('this is the btn onclick');
};
span.onclick = function() {
  modal.style.display = "none";
  console.log('this is the span onlick');
};
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    console.log('this is the window onclick');
  }
};
var currentTab = 0;
function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  // StepIndicator(n);
}
showTab(currentTab); 


// Call api function in this function below while checking tab number
//document.querySelector for each field name, email, location and push to object to send to api

function postAPI() {
  console.log('api will post now')
}

window.nextPrev =function(n, button) {
  if( typeof( button ) !== "undefined" ){
    console.log( "'this' inside the onclick: ", button );
    answers[ button.name ] = button.value;
  }
  var resultsTitle = document.querySelector('#results h1'), resultsDesc = document.querySelector('#results .desc');
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  console.log(currentTab, x.length)

  if (currentTab >= x.length -2) {
      postAPI();
  }
  if (currentTab >= x.length -1) {
    console.log('inside current tab if')
    var answerString = JSON.stringify(answers);  
    if (resultsOptions[answerString]) {
    resultsTitle.innerText= resultsOptions[answerString].title;
                resultsDesc.innerText=  resultsOptions[answerString].desc; 
              }
    //document.getElementById("regForm").submit();
  }
  showTab(currentTab);
};

var resultsOptions = {
    '{"question1":"1","question2":"1","question3":"1"}': {
        title: 'Software Engineering Immersive',
        desc: 'Build rich, interactive, full-stack apps with key languages and dive into algorithms, data structures, design patterns, APIs, and more.'},
    '{"question1":"2","question3":"1"}': {
        title: 'User Experience Design Immersive',
        desc: '<p>The User Experience Design Immersive program is crafted by top practitioners in the field, with a specific focus on helping you transition into a UX design career.</p>'},
    '{"question1": "3", "question3": "1"}': {
        title: 'Data Science Immersive',
        desc: '<p>Learn the tools and techniques you need to make better decisions through data, and land a job in one of the most sought after fields in tech.</p>'},
    '{"question1": "4", "question3": "1"}': {
        title: 'Digital Marketing Immersive',
        desc: '<p>Join the high-growth world of digital marketing in our full-time Immersive course. Our expert-designed curriculum is continually updated to keep pace with shifting employer demands. Gain competitive skills, personalized career coaching, and access to resources to continually foster your professional potential.</p>'},
    '{"question1": "1", "question2": "1", "question3": "1", "question4": "1"}': {
        title: 'Software Engineering Immersive Remote',
        desc: '<p>Learn online and build rich, interactive, full-stack apps with key languages and dive into algorithms, data structures, design patterns, APIs, and more.</p>'},
    '{"question1": "1", "question2": "3", "question3": "2"}': {
        title: 'Python Programming',
        desc: '<p>Dive into fundamental concepts and techniques, and build your own custom web or data application.</p>'},
    '{"question1": "2", "question3": "2"}': {
        title: 'User Experience Design',
        desc: '<p>Apply tools like Adobe, Sketch, Illustrator and Invision to create UX documentation for digital products; conduct research to gain insights into customer behavior.</p>'},
    '{"question1": "4", "question3": "2"}': {
        title: 'Digital Marketing',
        desc: '<pBecome a driver of your company\'s bottom line by using cutting‐edge techniques and platforms to market products and acquire users.</p>'
    },
    '{"question1": "3", "question3": "2"}': {
        title: 'Data Science',
        desc: '<p>Use Python to mine datasets and predict patterns. Build statistical models — regression and classification — that generate usable information from raw data.</p>'
    },
    '{"question1":"5", "question3": "2"}': {
        title: 'Product Management',
        desc: '<pGain leadership and communication skills to succeed in this in-demand field. Learn to launch viable, market-ready products and features that solve real problems for your customers.</p>'
    },

    '{"question1": "1", "question2": "2"}': {
        title: 'Front End Web Development',
        desc: '<p>Use HTML5, CSS3, JavaScript, jQuery, GitHub, and Sublime in concert. Build a fully responsive, interactive website that stands apart from the usual templates. </p>'
    },
    '{"question1": "1", "question2": "5"}': {
        title: 'JavaScript Development',
        desc: '<p>Learn to code in JavaScript, the native language of the web used by developers the world over.</p>'
    },
    '{"question1": "1", "question2": "4"}': {
        title: 'React Development',
        desc: '<p>Start building maintainable web applications that can handle constantly changing data at scale. Expand your programming toolkit, and discover why both developers and employers favor this robust JavaScript library. </p>'
    },
    '{"question1": "1", "question2": "3", "question3": "2", "question4": "1"}': {
        title: 'Python Programming Remote"',
        desc: '<p>Learn online and discover why professionals ranging from analysts to web developers rely on Python programming to excel in their work. Dive into fundamental concepts and techniques, and build your own custom web or data application.</p>'
    },
    '{"question1": "2", "question3": "2", "question4": "1"}': {
        title: 'User Experience Design Remote',
        desc: '<pLearn online and apply tools like Adobe, Sketch, Illustrator and Invision to create UX documentation for digital products; conduct research to gain insights into customer behavior.</p>'
    },
    '{"question1": "4", "question3": "2", "question4":"1"}': {
        title: 'Digital Marketing Remote',
        desc: '<p> Learn online and become a driver of your company\'s bottom line by using cutting‐edge techniques and platforms to market products and acquire users.</p>'
    },
    '{"question1": "3", "question3": "2", "question4": "1"}': {
        title: 'Data Science Remote',
        desc: '<p> Learn online and use Python to mine datasets and predict patterns.</p>'
    },
    '{"question1:5", "question3": "2", "question4:1"}': {
        title: 'Product Management Remote',
        desc: '<pLearn online and gain leadership and communication skills to succeed in this in-demand field. Learn to launch viable, market-ready products and features that solve real problems for your customers.</p>'
    },

    '{"question1:" "1", "question2": "2",  "question4": "1"}': {
        title: 'Front End Web Development Remote',
        desc: '<p> Learn online and use HTML5, CSS3, JavaScript, jQuery, GitHub, and Sublime in concert.</p>'
    },
    '{"question1": "1", "question2": "5", "question4":"1"}': {
        title: 'JavaScript Development Remote',
        desc: '<p> Learn online and Learn to code in JavaScript, the native language of the web used by developers the world over.</p>'
    },
    '{"question1": "1", "question2": "4", "question4": "1"}': {
        title: 'React Development Remote',
        desc: '<p>Learn online and start building maintainable web applications that can handle constantly changing data at scale. Expand your programming toolkit, and discover why both developers and employers favor this robust JavaScript library. </p>'
    },
    '{"question1": "1", "question2":"6"}': {
        title: 'iOS Development Immersive',
        desc: '<p>Create App Store-ready products by gaining key industry knowledge and specialized skills in Swift, Xcode, mobile design, and more. </p>'
    },
    '{"question1": "1", "question2":"7"}': {
        title: 'Android Development Immersive',
        desc: '<p>Join our Android Development Immersive program, and train in the coding, design, and iteration skills essential to starting a career in the sought-after field. </p>'
    }
  };



// function processForm(e, n) {
//     e.preventDefault();
//     var resultsTitle = document.querySelector('#results h1'), resultsDesc = document.querySelector('#results .desc');
//     var x = document.getElementsByClassName("tab");
//     if (n == 1 && !validateForm()) return false;
//     x[currentTab].style.display = "none";
//     currentTab = currentTab + n;
//     if (currentTab >= x.length) {
//     resultsTitle.replaceWith('<h1>' + resultOptions[n].title + '</h1>');
//                 resultsDesc.replaceWith('<p class=\'desc\'>' + resultOptions[n].desc + '</p>');
//     return false;
//               }             

// var form = document.getElementById('regForm');
// if (form.attachEvent) {
//     form.attachEvent("submit", processForm);
// } else {
//     form.addEventListener("submit", processForm);
// }
// }



function validateForm() {
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    }
  }
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; 
}

// function StepIndicator(n) {
//   //removes active class of all steps
//   var i, x = document.getElementsByClassName("step");
//   for (i = 0; i < x.length; i++) {
//     x[i].className = x[i].className.replace(" active", "");
//   }
//   //adds the active class from current step
//   x[n].className += " active";
// }



};



// VISUAL DESIGN HAS SAME PATH AT UX and DATA ANALYTICS HAS SAME PATH AS DATA SCIENCE
    // {
    //     title: 'Visual Design',
    //     desc: '<p> Apply fundamental tools of visual communication - typography, color and layout - to design beautiful digital products.</p>'
    // },

    //  {
    //     title: 'Visual Design Remote',
    //     desc: '<p>Learn online and apply fundamental tools of visual communication - typography, color and layout - to design beautiful digital products. </p>'
    // },
