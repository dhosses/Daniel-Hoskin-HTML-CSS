const questions = [
    {
        question: "In which year did New Zealand last host the Rugby World Cup leading to a historic victory for the All Blacks?",
        options: [
            "1989",
            "2003",
            "2011",
            "2018"
        ],
        correctOption: 2
    },
    {
        question: "What was the outcome of the 1995 America's Cup, a significant sailing event hosted by New Zealand?",
        options: [
            "New Zealand bet Italy in the final regatta",
            "America won against New Zealand in the final regatta by 2 seconds",
            "New Zealand Dominated the entire event",
            "The event was called off due to bad weather issues"
        ],
        correctOption: 2
        
    },
    {
        question: "Who was the iconic cricketer that played a pivotal role in New Zealand's dominance in cricket during the late 1970s and early 1980s?",
        options: [
            "Sir Richard Hadlee",
            "Sir Lance Cairns",
            "Ian Smith",
            "Clar Bulfin"
        ],
        correctOption: 0
        
    },
    {
        question: "Can you name the national team that triumphed in the 2011 Rugby World Cup, capturing the hearts of New Zealanders?",
        options: [
            "Samoa",
            "Tonga",
            "All Blacks",
            "South Africa"
        ],
        correctOption: 2
    },
    {
        question:"Which sport event ignited a nationwide passion for sailing in New Zealand, thanks to Team New Zealand's victory in a prestigious competition?",
        options: [
            "People Started to Recognise sailing",
            "It ignited a nationwide passion for sailing in New Zealand",
            "Nobody really cared",
            "Everyone honored the sport at the time and got over it"
        ],
        correctOption: 1 
    },
    {
        question:"What are some key sports in New Zealand today.",
        options: [
            "rugby, cricket, hiking, sailing, basketball, esports and adventure racing",
            "football, jiu jitsu, judo, kick boxing, rugby league, touch rugby",
            "rugby sevens, olympics sports such as Sprints, long distance running and Biking",
            "Skateborading, Surfing, Netball, Softball, Free Running, Paddle Borading"
        ],
        correctOption: 0
    },
    {
        question:"What are some of the notable rugby events that draw significant crowds?",
        options: [
            "When the All Blacks play at home.",
            "During the Super Rugby season",
            "During the The National Provincial Championship season",
            "Rugby World Cup Games"
        ],
        correctOption: 0
    },
    {
        question:"How are the Black Caps performing on the international stage?",
        options: [
            "The Black Caps are performing admirably on the international stage.",
            "The Black Caps are performing terribly on the international stage.",
            "The Black Caps are gaining better performaces over time.",
            "The Black Caps are slowly lossing there great performances"
        ],
        correctOption: 0
    },
    {
        question:"Which sports are particularly popular enjoyed in outdoor sporting activities?",
        options: [
            "Mountain Biking, Hiking and Sailing",
            "Walking, Running, Track Biking",
            "Football, Rugby, Cricket",
            "Surfborading, Skateborading, Netball"
        ],
        correctOption: 0
    },
    {
        question: "Which sport is growing intrest in NZ",
        options: [
            "Football, Rugby Sevens, Judo",
            "Esports, Basketball, Adventure Racing",
            "Jiu Jitsu",
            "Cricket, Rugby, American football"
        ],
        correctOption: 1
    },
    {
        question:"What type of Sporting event could we see in the future",
        options: [
            "Sailing Ragattas",
            "Football tournaments",
            "Surfing  tournaments",
            "Hosting the Olympics"
        ],
        correctOption: 0
    },
    {
        question: "How will New Zealand's beautiful waters be used for upcoming sporting events?",
        options: [
            "Rowing events",
            "Sailing events",
            "Swimming events",
            "Diving events"
        ],
        correctOption: 1
    },
    {
        question: "What kind of terrain will challenge athletes in New Zealand's upcoming off-road races?",
        options: [
            "Rugged terrain, which includes mountains, forests, and coastal areas.",
            "Nice flat road, which include nice smooth grounds.",
            "Bumpy roads, which include real mudd roads throught the middle of the north island.",
            "Icey road, Which would mean that the car would slide more."
        ],
        correctOption: 0
    },
    {
        question: "Will New Zealand continue to emphasize rugby?",
        options: [
            "No, they will not contune to emphasize rugby.",
            "Yes, New Zealand will continue to emphasize rugby.",
            "Yes, But New Zealand will put less effort into rugby",
            "No, But New Zealand will still provide funding for rugby"
        ],
        correctOption: 1
    },
    {
        question: "How is New Zealand incorporating its stunning landscapes into these sporting events, and what kind of experiences do they promise for attendees?",
        options: [
            "They have promised more stadiums closer to home and better experiences",
            "Immersive experiences that combine sports with New Zealand's scenic landscapes",
            "More events happening giving less popluar teams a chance to have a go",
            "They are giving the Attendees nothing more than they have got"
        ],
        correctOption: 1
    }
]  

const element = document.getElementById("quiz-content");
const correctElement = document.getElementById("correct-answer");
const incorrectElement = document.getElementById("incorrect-answer");

var currentQuestion = 0;

function question() {
    return questions[currentQuestion].question;
}

function options() {
    // <a class="option" href="#" id="0">Answer</a>
    return questions[currentQuestion].options.map((option, idx) => {
        return `<a class="option" href="#" id="${idx}">${option}</a>`;
    }).join('');
}

function content() {
    const questionCount = questions.length;
    if (currentQuestion < questionCount) {
        // If there is a question at "currentQuestion", show it
        return `<p>${question()}</p><div class="flex-column">${options()}</div>`
    } else {
        // Otherwise show the "quiz completed" text
        return '<p>Congratulations! You have completed the quiz!</p><a class="restart" href="#">Go back to start</a>'

    }
}

function handleOptionClick(event) {         
    correctElement.innerHTML = "";
    incorrectElement.innerHTML = "";

    // Log the clicked element in the console
    console.log(event.target);

    // Check if the button clicked was correct or not
    // First, load the correct answer from the top of this file
    const question = questions[currentQuestion];
    // Get the index of the option the user has clicked (convert from string to integer)
    const idClicked = Number.parseInt(event.target.id);
    // Check if the user has selected the correct option (triple === compares type and value)
    if (idClicked === question.correctOption) {
        // If the user clicks the right answer, move to the next question and show them the "correct status"
        correctElement.innerHTML = "Correct!";
        currentQuestion += 1;
        element.innerHTML = content();
    } else {
        // If the user clicks the wrong answer, show them the "incorrect" status
        incorrectElement.innerHTML = "Incorrect"
    }
}

function handleRestartClick(event) {
    // Go back to the first question
    currentQuestion = 0;
    element.innerHTML = content();
    correctElement.innerHTML = "";
    incorrectElement.innerHTML = "";
}

function handleClick(event) {
    // If the clicked element isn't an option answer, don't continue
	if (event.target.matches('.option')) {
        // Don't follow the link on this page
        event.preventDefault();
        handleOptionClick(event);
    }
    if (event.target.matches('.restart')) {
        // Don't follow the link on this page
        event.preventDefault();
        handleRestartClick(event);
    }
}

// Populate the first screen of content when the page loads
element.innerHTML = content();

// Watch for clicks on the page
document.addEventListener('click', function (event) {
    handleClick(event);
}, false);

