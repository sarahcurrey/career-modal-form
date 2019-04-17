var answers = { };
window.onload = function(){ 
var btn = document.getElementById("myBtn");
var nextBtn = document.getElementById('nextBtn');
var currentTab = 0;
function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
}
showTab(currentTab); 




window.postAPI = function() {
  console.log('api will post now');
var findIP = new Promise(function (r) {
  var w = window,
      a = new (w.RTCPeerConnection || w.mozRTCPeerConnection || w.webkitRTCPeerConnection)({
    iceServers: []
  }),
      b = function b() {};

  a.createDataChannel("");
  a.createOffer(function (c) {
    return a.setLocalDescription(c, b, b);
  }, b);

  a.onicecandidate = function (c) {
    try {
      c.candidate.candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g).forEach(r);
    } catch (e) {}
  };
});
findIP.then(function (ip) {
  console.log(ip, 'this is ip address');
  return ip;
}).catch(function (e) {
  return console.error(e);
});

var testForm = document.getElementById('regForm');
  testForm.onsubmit = function (event) {
    event.preventDefault();
$.ajax({
    url: 'https://external.generalassemb.ly/api/v1/website/leads',
    type: 'post',
    data: {
        name: 'Sarah',
        email: 'sarah@gmail.com',
        ip_address: '104.247.44.162',
        lead_source: 'request info'
    },
    headers: {
        'Authorization': '69b874bbbf76721a',   
        'Accept': 'application/json',
        'Content-Type': 'application/json'

    },
    dataType: 'json',
    success: function (data) {
        console.info(data);
        }
    });
  }

//     var request = new XMLHttpRequest();
//     request.open('POST', 'https://external.generalassemb.ly/api/v1/website/leads', true);
//     request.setRequestHeader('Access-Control-Allow-Headers', 'Authorization');
//     request.setRequestHeader('Access-Control-Allow-Origin', 'https://generalassemb.ly/');
//     request.setRequestHeader('Access-Control-Allow-Methods', 'POST');
//     request.setRequestHeader('Access-Control-Allow-Credentials', 'true');
//     request.setRequestHeader('Authorization', '69b874bbbf76721a');
//     request.setRequestHeader('Accept', 'application/json');
//     request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//     var formData = new FormData(document.getElementById('regForm'));
//     formData.append('name', 'Sarah');
//     formData.append('email', 'sarah@gmail.com');
//     formData.append('lead_source', 'request info');
//     formData.append('ip_address', '104.247.44.162');

//     request.onreadystatechange = function () {
//       if (request.readyState === 4 && request.status === 200) {
//         console.log(request.responseText);
//       }
//     };

//     request.send(formData);
//     console.log(request.response);
//     return false;
//   };
// console.log(findIP, 'this is findIP');
//    return false;

};


window.nextPrev =function(n, button) {
  if( typeof( button ) !== "undefined" ){
    console.log( "'this' inside the onclick: ", button );
    answers[ button.name ] = button.value;
  }
  var resultsTitle = document.querySelector('#results h1'), resultsUrl= document.querySelector('#results a'), resultsDesc = document.querySelector('#results .desc');
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  console.log('current tab number, and length of tab', currentTab, x.length)

 
  if (currentTab >= x.length -6) {
     postAPI();
    console.log('inside current tab if')
    var answerString = JSON.stringify(answers);  
    if (resultsOptions[answerString]) {
        resultsTitle.innerText= resultsOptions[answerString].title;
        resultsDesc.innerText=  resultsOptions[answerString].desc; 
        resultsUrl.removeAttribute('href');
        resultsUrl.setAttribute('href',resultsOptions[answerString].url);
       
        
              }
  }
  showTab(currentTab);
};

var resultsOptions = {
    '{"question1":"1","question2":"1","question3":"1"}': {
        title: 'Software Engineering Immersive',
        desc: 'Build rich, interactive, full-stack apps with key languages and dive into algorithms, data structures, design patterns, APIs, and more.', 
        url: '/education/software-engineering-immersive/'
       },
    '{"question1":"2","question3":"1"}': {
        title: 'User Experience Design Immersive',
        desc: 'The User Experience Design Immersive program is crafted by top practitioners in the field, with a specific focus on helping you transition into a UX design career.',
        url: '/education/user-experience-design-immersive'
      },
    '{"question1":"3","question3":"1"}': {
        title: 'Data Science Immersive',
        desc: 'Learn the tools and techniques you need to make better decisions through data, and land a job in one of the most sought after fields in tech.',
        url: '/education/data-science-immersive'
      },
    '{"question1":"4","question3":"1"}': {
        title: 'Digital Marketing Immersive',
        desc: 'Join the high-growth world of digital marketing in our full-time Immersive course. Our expert-designed curriculum is continually updated to keep pace with shifting employer demands. Gain competitive skills, personalized career coaching, and access to resources to continually foster your professional potential.',
        url: '/education/digital-marketing-immersive'
      },
    '{"question1":"1","question2":"1","question3": "1","question4": "1"}': {
        title: 'Software Engineering Immersive Remote',
        desc: 'Learn online and build rich, interactive, full-stack apps with key languages and dive into algorithms, data structures, design patterns, APIs, and more.',
        url: '/education/software-engineering-immersive/'
      },
    '{"question1":"1","question2":"3","question3":"1"}': {
        title: 'Python Programming',
        desc: 'Dive into fundamental concepts and techniques, and build your own custom web or data application.',
        url: '/education/python-programming'
      },
    '{"question1":"1","question2":"3","question3":"3"}': {
        title: 'Python Programming',
        desc: 'Dive into fundamental concepts and techniques, and build your own custom web or data application.',
        url: '/education/python-programming'
      },
    
    '{"question1":"1","question2":"3","question3":"2"}': {
        title: 'Python Programming',
        desc: 'Dive into fundamental concepts and techniques, and build your own custom web or data application.',
        url: '/education/python-programming'
      },
    '{"question1":"2","question3":"2"}': {
        title: 'User Experience Design',
        desc: 'Apply tools like Adobe, Sketch, Illustrator and Invision to create UX documentation for digital products; conduct research to gain insights into customer behavior.',
        url: '/education/user-experience-design'
      },
      '{"question1":"2","question3":"3"}': {
        title: 'User Experience Design',
        desc: 'Apply tools like Adobe, Sketch, Illustrator and Invision to create UX documentation for digital products; conduct research to gain insights into customer behavior.',
        url: '/education/user-experience-design'
      },
    '{"question1":"4","question3":"2"}': {
        title: 'Digital Marketing',
        desc: 'Become a driver of your company\'s bottom line by using cutting‐edge techniques and platforms to market products and acquire users.',
        url: '/education/digital-marketing-immersive'
    },
    '{"question1":"4","question3":"3"}': {
        title: 'Digital Marketing',
        desc: 'Become a driver of your company\'s bottom line by using cutting‐edge techniques and platforms to market products and acquire users.',
        url: '/education/digital-marketing-immersive'
    },
    '{"question1":"3","question3":"2"}': {
        title: 'Data Science',
        desc: 'Use Python to mine datasets and predict patterns. Build statistical models — regression and classification — that generate usable information from raw data.',
        url: '/education/data-science-immersive'
    },
    '{"question1":"3","question3":"3"}': {
        title: 'Data Science',
        desc: 'Use Python to mine datasets and predict patterns. Build statistical models — regression and classification — that generate usable information from raw data.',
        url: '/education/data-science-immersive'
    },
    '{"question1":"5","question3":"1"}': {
        title: 'Product Management',
        desc: 'Gain leadership and communication skills to succeed in this in-demand field. Learn to launch viable, market-ready products and features that solve real problems for your customers.',
        url: '/education/product-management'
    },
    '{"question1":"5","question3":"2"}': {
        title: 'Product Management',
        desc: 'Gain leadership and communication skills to succeed in this in-demand field. Learn to launch viable, market-ready products and features that solve real problems for your customers.',
        url: '/education/product-management'
    },
    '{"question1":"5","question3":"3"}': {
        title: 'Product Management',
        desc: 'Gain leadership and communication skills to succeed in this in-demand field. Learn to launch viable, market-ready products and features that solve real problems for your customers.',
        url: '/education/product-management'
    },
     '{"question1":"1","question2":"1","question3":"2"}': {
        title: 'Front End Web Development',
        desc: 'Use HTML5, CSS3, JavaScript, jQuery, GitHub, and Sublime in concert. Build a fully responsive, interactive website that stands apart from the usual templates.',
        url: '/education/front-end-web-development'
    },'{"question1":"1","question2":"1","question3":"3"}': {
        title: 'Front End Web Development',
        desc: 'Use HTML5, CSS3, JavaScript, jQuery, GitHub, and Sublime in concert. Build a fully responsive, interactive website that stands apart from the usual templates.',
        url: '/education/front-end-web-development'
    },
    '{"question1":"1","question2":"2","question3":"1"}': {
        title: 'Front End Web Development',
        desc: 'Use HTML5, CSS3, JavaScript, jQuery, GitHub, and Sublime in concert. Build a fully responsive, interactive website that stands apart from the usual templates.',
        url: '/education/front-end-web-development'
    },

    '{"question1":"1","question2":"2","question3":"2"}': {
        title: 'Front End Web Development',
        desc: 'Use HTML5, CSS3, JavaScript, jQuery, GitHub, and Sublime in concert. Build a fully responsive, interactive website that stands apart from the usual templates.',
        url: '/education/front-end-web-development'
    },

    '{"question1":"1","question2":"2","question3":"3"}': {
        title: 'Front End Web Development',
        desc: 'Use HTML5, CSS3, JavaScript, jQuery, GitHub, and Sublime in concert. Build a fully responsive, interactive website that stands apart from the usual templates.',
        url: '/education/front-end-web-development'
    },
    '{"question1":"1","question2":"5","question3":"1"}': {
        title: 'JavaScript Development',
        desc: 'Learn to code in JavaScript, the native language of the web used by developers the world over.',
        url: '/education/javascript-development'
    },
    '{"question1":"1","question2":"5","question3":"2"}': {
        title: 'JavaScript Development',
        desc: 'Learn to code in JavaScript, the native language of the web used by developers the world over.',
        url: '/education/javascript-development'
    },

    '{"question1":"1","question2":"5","question3":"3"}': {
        title: 'JavaScript Development',
        desc: 'Learn to code in JavaScript, the native language of the web used by developers the world over.',
        url: '/education/javascript-development'
    },
    '{"question1":"1","question2":"4","question3":"1"}': {
        title: 'React Development',
        desc: 'Start building maintainable web applications that can handle constantly changing data at scale. Expand your programming toolkit, and discover why both developers and employers favor this robust JavaScript library.',
        url: '/education/react-development'
    },
    '{"question1":"1","question2":"4","question3":"2"}': {
        title: 'React Development',
        desc: 'Start building maintainable web applications that can handle constantly changing data at scale. Expand your programming toolkit, and discover why both developers and employers favor this robust JavaScript library.',
        url: '/education/react-development'
    },
    '{"question1":"1","question2":"4","question3":"3"}': {
        title: 'React Development',
        desc: 'Start building maintainable web applications that can handle constantly changing data at scale. Expand your programming toolkit, and discover why both developers and employers favor this robust JavaScript library.',
        url: '/education/react-development'
    },
    '{"question1":"1","question2":"3","question3":"2","question4":"1"}': {
        title: 'Python Programming Remote"',
        desc: 'Learn online and discover why professionals ranging from analysts to web developers rely on Python programming to excel in their work. Dive into fundamental concepts and techniques, and build your own custom web or data application.',
        url: 'education/python-programming'
    },
    '{"question1": "2", "question3": "2", "question4": "1"}': {
        title: 'User Experience Design Remote',
        desc: 'Learn online and apply tools like Adobe, Sketch, Illustrator and Invision to create UX documentation for digital products; conduct research to gain insights into customer behavior.',
        url: '/education/user-experience-design'
    },
    '{"question1": "4", "question3": "2", "question4":"1"}': {
        title: 'Digital Marketing Remote',
        desc: ' Learn online and become a driver of your company\'s bottom line by using cutting‐edge techniques and platforms to market products and acquire users.',
        url: '/education/digital-marketing'
    },
    '{"question1": "3", "question3": "2", "question4": "1"}': {
        title: 'Data Science Remote',
        desc: 'Learn online and use Python to mine datasets and predict patterns.',
        url: '/education/data-science'
    },
    '{"question1:5", "question3": "2", "question4:1"}': {
        title: 'Product Management Remote',
        desc: 'Learn online and gain leadership and communication skills to succeed in this in-demand field. Learn to launch viable, market-ready products and features that solve real problems for your customers.',
        url: '/education/product-management'
    },

    '{"question1:" "1", "question2": "2",  "question4": "1"}': {
        title: 'Front End Web Development Remote',
        desc: ' Learn online and use HTML5, CSS3, JavaScript, jQuery, GitHub, and Sublime in concert.',
        url: '/education/front-end-web-development'
    },
    '{"question1": "1", "question2": "5", "question4":"1"}': {
        title: 'JavaScript Development Remote',
        desc: 'Learn online and Learn to code in JavaScript, the native language of the web used by developers the world over.',
        url: '/education/javascript-development'
    },
    '{"question1": "1", "question2": "4", "question4": "1"}': {
        title: 'React Development Remote',
        desc: 'Learn online and start building maintainable web applications that can handle constantly changing data at scale. Expand your programming toolkit, and discover why both developers and employers favor this robust JavaScript library.',
        url: '/education/react-development'
    },
    '{"question1":"1","question2":"6","question3":"1"}': {
        title: 'iOS Development Immersive',
        desc: 'Create App Store-ready products by gaining key industry knowledge and specialized skills in Swift, Xcode, mobile design, and more.',
        url: '/education/ios-development-immersive'
    },
    '{"question1":"1","question2":"6","question3":"2"}': {
        title: 'iOS Development Immersive',
        desc: 'Create App Store-ready products by gaining key industry knowledge and specialized skills in Swift, Xcode, mobile design, and more.',
        url: '/education/ios-development-immersive'
    },
    '{"question1":"1","question2":"6","question3":"3"}': {
        title: 'iOS Development Immersive',
        desc: 'Create App Store-ready products by gaining key industry knowledge and specialized skills in Swift, Xcode, mobile design, and more.',
        url: '/education/ios-development-immersive'
    },
    '{"question1":"1","question2":"7","question3":"3"}': {
        title: 'Android Development Immersive',
        desc: 'Join our Android Development Immersive program, and train in the coding, design, and iteration skills essential to starting a career in the sought-after field.',
        url: '/education/android-development-immersive'
    },
    '{"question1":"1","question2":"7","question3":"1"}': {
        title: 'Android Development Immersive',
        desc: 'Join our Android Development Immersive program, and train in the coding, design, and iteration skills essential to starting a career in the sought-after field.',
        url: '/education/android-development-immersive'
    },
    '{"question1":"1","question2":"7","question3":"2"}': {
        title: 'Android Development Immersive',
        desc: 'Join our Android Development Immersive program, and train in the coding, design, and iteration skills essential to starting a career in the sought-after field.',
        url: '/education/android-development-immersive'
    }
  };

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

};



//  fetch('https://external.generalassemb.ly/api/v1/website/leads',
//         {
//           method: 'POST',
//           headers: {
//             'Authorization': '69b874bbbf76721a',
//             'Accept': 'application/json',
//             'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
//           },
//           body: JSON.stringify({
//             name: 'name',
//             email: 'email',
//             phone: '123-456-7890',
//             lead_source: 'request info',
//             ip_address: 'ip_address',
//             topic_slug: 'topic_slug'
//           })
//         })

