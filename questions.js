var resultOptions = [
    {   
        title: 'Software Engineering Immersive',
        desc: '<p>Build rich, interactive, full-stack apps with key languages and dive into algorithms, data structures, design patterns, APIs, and more.</p>'},

    {   
        title: 'User Experience Design Immersive',
        desc: '<p>The User Experience Design Immersive program is crafted by top practitioners in the field, with a specific focus on helping you transition into a UX design career.</p>'},
    {   
        title: 'Data Science Immersive',
        desc: '<p>Learn the tools and techniques you need to make better decisions through data, and land a job in one of the most sought after fields in tech.</p>'},
    {   
        title: 'Digital Marketing Immersive',
        desc: '<p>Join the high-growth world of digital marketing in our full-time Immersive course. Our expert-designed curriculum is continually updated to keep pace with shifting employer demands. Gain competitive skills, personalized career coaching, and access to resources to continually foster your professional potential.</p>'},
    {   
        title: 'Software Engineering Immersive Remote',
        desc: '<p>Learn online and build rich, interactive, full-stack apps with key languages and dive into algorithms, data structures, design patterns, APIs, and more.</p>'},
    {   
        title: 'Python Programming',
        desc: '<p>Dive into fundamental concepts and techniques, and build your own custom web or data application.</p>'},
    {   
        title: 'User Experience Design',
        desc: '<p>Apply tools like Adobe, Sketch, Illustrator and Invision to create UX documentation for digital products; conduct research to gain insights into customer behavior.</p>'},
    {   
        title: 'Data Analytics',
        desc: '<p>Confidently make — and defend — critical decisions using the results of your data analysis.Collect, clean, and analyze data. Skills, Tools, & Strategies. Use Excel, SQL, and Tableau to spot trends and drive business decisions with real‐world data.</p>'},
    {
        title: 'Digital Marketing',
        desc: '<pBecome a driver of your company\'s bottom line by using cutting‐edge techniques and platforms to market products and acquire users.</p>'
    },
    {
        title: 'Data Science',
        desc: '<p>Use Python to mine datasets and predict patterns. Build statistical models — regression and classification — that generate usable information from raw data.</p>'
    },
    {
        title: 'Product Management',
        desc: '<pGain leadership and communication skills to succeed in this in-demand field. Learn to launch viable, market-ready products and features that solve real problems for your customers.</p>'
    },
    {
        title: 'Visual Design',
        desc: '<p> Apply fundamental tools of visual communication - typography, color and layout - to design beautiful digital products.</p>'
    },
    {
        title: 'Front End Web Development',
        desc: '<p>Use HTML5, CSS3, JavaScript, jQuery, GitHub, and Sublime in concert. Build a fully responsive, interactive website that stands apart from the usual templates. </p>'
    },
    {
        title: 'JavaScript Development',
        desc: '<p>Learn to code in JavaScript, the native language of the web used by developers the world over.</p>'
    },
    {
        title: 'React Development',
        desc: '<p>Start building maintainable web applications that can handle constantly changing data at scale. Expand your programming toolkit, and discover why both developers and employers favor this robust JavaScript library. </p>'
    },
    {
        title: 'Python Programming Remote',
        desc: '<p>Learn online and discover why professionals ranging from analysts to web developers rely on Python programming to excel in their work. Dive into fundamental concepts and techniques, and build your own custom web or data application.</p>'
    },
    {
        title: 'User Experience Design Remote',
        desc: '<pLearn online and apply tools like Adobe, Sketch, Illustrator and Invision to create UX documentation for digital products; conduct research to gain insights into customer behavior.</p>'
    },
    {
        title: 'Data Analytics Remote',
        desc: '<p> Learn online and confidently make — and defend — critical decisions using the results of your data analysis.</p>'
    },
    {
        title: 'Digital Marketing Remote',
        desc: '<p> Learn online and become a driver of your company\'s bottom line by using cutting‐edge techniques and platforms to market products and acquire users.</p>'
    },
    {
        title: 'Data Science Remote',
        desc: '<p> Learn online and use Python to mine datasets and predict patterns.</p>'
    },
    {
        title: 'Product Management Remote',
        desc: '<pLearn online and gain leadership and communication skills to succeed in this in-demand field. Learn to launch viable, market-ready products and features that solve real problems for your customers.</p>'
    },
    {
        title: 'Visual Design Remote',
        desc: '<p>Learn online and apply fundamental tools of visual communication - typography, color and layout - to design beautiful digital products. </p>'
    },
    {
        title: 'Front End Web Development Remote',
        desc: '<p> Learn online and use HTML5, CSS3, JavaScript, jQuery, GitHub, and Sublime in concert.</p>'
    },
    {
        title: 'JavaScript Development Remote',
        desc: '<p> Learn online and Learn to code in JavaScript, the native language of the web used by developers the world over.</p>'
    },
    {
        title: 'React Development Remote',
        desc: '<p>Learn online and start building maintainable web applications that can handle constantly changing data at scale. Expand your programming toolkit, and discover why both developers and employers favor this robust JavaScript library. </p>'
    },
    {
        title: 'iOS Development Immersive',
        desc: '<p>Create App Store-ready products by gaining key industry knowledge and specialized skills in Swift, Xcode, mobile design, and more. </p>'
    },
    {
        title: 'Android Development Immersive',
        desc: '<p>Join our Android Development Immersive program, and train in the coding, design, and iteration skills essential to starting a career in the sought-after field. </p>'
    },
];


var quizSteps = $('#quizzie .quiz-step'), totalScore = 0;
quizSteps.each(function () {
    var currentStep = $(this), ansOpts = currentStep.children('.quiz-answer');
    ansOpts.each(function () {
        var eachOpt = $(this);
        eachOpt[0].addEventListener('click', check, false);
        function check() {
            var $this = $(this), value = $this.attr('data-quizIndex'), answerScore = parseInt(value);
            if (currentStep.children('.active').length > 0) {
                var wasActive = currentStep.children('.active'), oldScoreValue = wasActive.attr('data-quizIndex'), oldScore = parseInt(oldScoreValue);
                currentStep.children('.active').removeClass('active');
                $this.addClass('active');
                totalScore -= oldScoreValue;
                totalScore += answerScore;
                calcResults(totalScore);
            } else {
                $this.addClass('active');
                totalScore += answerScore;
                calcResults(totalScore);
                updateStep(currentStep);
            }
        }
    });
});
function updateStep(currentStep) {
    if (currentStep.hasClass('current')) {
        currentStep.removeClass('current');
        currentStep.next().addClass('current');
    }
}
function calcResults(totalScore) {
    if (quizSteps.find('.active').length == quizSteps.length) {
        var resultsTitle = $('#results h1'), resultsDesc = $('#results .desc');
        var lowestScoreArray = $('#quizzie .low-value').map(function () {
            return $(this).attr('data-quizIndex');
        });
        var minScore = 0;
        for (var i = 0; i < lowestScoreArray.length; i++) {
            if (window.CP.shouldStopExecution(1)) {
                break;
            }
            minScore += lowestScoreArray[i] << 0;
        }
        window.CP.exitedLoop(1);
        var highestScoreArray = $('#quizzie .high-value').map(function () {
            return $(this).attr('data-quizIndex');
        });
        var maxScore = 0;
        for (var i = 0; i < highestScoreArray.length; i++) {
            if (window.CP.shouldStopExecution(2)) {
                break;
            }
            maxScore += highestScoreArray[i] << 0;
        }
        window.CP.exitedLoop(2);
        var range = maxScore - minScore, numResults = resultOptions.length, interval = range / (numResults - 1), increment = '', n = 0;
        while (n < numResults) {
            increment = minScore + interval * n;
            if (totalScore <= increment) {
                resultsTitle.replaceWith('<h1>' + resultOptions[n].title + '</h1>');
                resultsDesc.replaceWith('<p class=\'desc\'>' + resultOptions[n].desc + '</p>');
                return;
            } else {
                n++;
            }
        }
    }
}





// function request(){
//  var url = 'https://api.github.com/users/smcurrey528/repos';
 
//  fetch(url).then(data => data.json()).then(data => {
//      var repolink = data.map(repo => {
//          console.log(repo.url)
//      })
//  })
    

// }

// request()

// //POSTING FORM DATA 
//   var testForm = document.getElementById('regForm');
//   testForm.onsubmit = function(event) {
//     event.preventDefault();

//     var request = new XMLHttpRequest();
//     // POST to httpbin which returns the POST data as JSON
//     request.open('POST', 'https://external.generalassemb.ly/api/v1/website/leads', /* async = */ false);

//     var formData = new FormData(document.getElementById('regForm'));

//     request.send(formData);

//     console.log(request.response);

// }







// var questionArray = [
//   ["What Do You Want to Accomplish?", "Coding: I want to build dynamic websites and applications.", "Design: I want to create user-friendly digital experiences.", "Data: I want to drive decision-making with accurate analyses.", "Marketing: I want to craft campaign strategies that audiences love.", "Product Management: I want to take the lead, bringing big ideas to life."], 
//   ["How much time can you commit to learning?", "Full Time", "Nights & Weekends", "Part Time"]
// ];

// //populate document
// for (var i = 0; i < questionArray.length; i++){
//   document.write("<form><span class='question'>" + questionArray[i][0] + "</span><br>");
//   for (var x = 1; x < 4; x++){
//     document.write("<input type='radio' class='answer' name='answer' value='" + questionArray[i][x] + "'>" + questionArray[i][x] + "");
//   }
//   document.write("</form><br>");
// }

// var characterAnswer = [
//   [0, 0, 0,'Code'],
//   [0, 0, 1,'Code'],
//   [1, 1, 1,'UX'],
//   [1, 1, 2,'UX'],
//   [2, 2, 2,'Data Science']
// ];

// //add click check event listeners
// var inputs = document.getElementsByTagName('input');
// for(var i = 0; i < inputs.length; i++){
//   inputs[i].addEventListener('click', check);
// }

// var userAnswers = [];

// //check questions answers
// function check(){
//   userAnswers = [];
//   var c = 0;
//   for(var i = 0; i < inputs.length; i++){
//     if(inputs[i].checked) {
//       userAnswers.push(i%3);
//       c++;
//     }
//   }
//   if(c==questionArray.length) rate();
// }

// //rate the answers per char
// function rate(){
//   console.log(userAnswers);
//   for(var i = 0; i < userAnswers.length; i++){
//     for(var j = 0; j < characterAnswer.length; j++){
//       characterAnswer[j][4] = 0;
//       for(var x = 0; x < 4; x++){
//         if(userAnswers[i] == characterAnswer[j][x])
//           characterAnswer[j][4]++;
//       }
//     }