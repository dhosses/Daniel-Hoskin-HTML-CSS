const questions = [
    {
        Title: "NZ Sports Quiz",
        description: "A Quiz about New zealand's past, present and future of sports.",
        questions:[
            {
                question: "In which year did New Zealand last host the Rugby World Cup leading to a historic victory for the All Blacks?",
                optionA: "1989",
                optionB: "2003",
                optionC: "2011",
                optionD: "2018",
                correctOption: "optionA"
            },
            {
                question: "What was the outcome of the 1995 America's Cup, a significant sailing event hosted by New Zealand?",
                optionA: "New Zealand bet Italy in the final regatta",
                optionB: "America won against New Zealand in the final regatta by 2 seconds",
                optionC: "New Zealand Dominated the entire event",
                optionD: "The event was called off due to bad weather issues",
                correctOption: "optionC"
                
            },
            {
                question: "Who was the iconic cricketer that played a pivotal role in New Zealand's dominance in cricket during the late 1970s and early 1980s?",
                optionA: "Sir Richard Hadlee",
                optionB: "Sir Lance Cairns",
                optionC: "Ian Smith",
                optionD: "Clar Bulfin",
                correctOption:"optionA"
                
            },
            {
                question: "Can you name the national team that triumphed in the 2011 Rugby World Cup, capturing the hearts of New Zealanders?",
                optionA: "Samoa",
                optionB: "Tonga",
                optionC: "All Blacks",
                optionD: "South Africa",
                correctOption: "optionC"
            },
            {
                question:"Which sport event ignited a nationwide passion for sailing in New Zealand, thanks to Team New Zealand's victory in a prestigious competition?",
                optionA:"People Started to Recognise sailing",
                optionB:"It ignited a nationwide passion for sailing in New Zealand",
                optionC:"Nobody really cared",
                optionD:"Everyone honored the sport at the time and got over it",
                correctOption:"optionB"
                
            },    
            
            {
                question:"What are some key sports in New Zealand today.",
                optionA:"rugby, cricket, hiking, sailing, basketball, esports and adventure racing",
                optionB:"football, jiu jitsu, judo, kick boxing, rugby league, touch rugby",
                optionC:"rugby sevens, olympics sports such as Sprints, long distance running and Biking",
                optionD:"Skateborading, Surfing, Netball, Softball, Free Running, Paddle Borading",
                correctOption:"optionA"
            },
            {
                question:"What are some of the notable rugby events that draw significant crowds?",
                optionA:"When the All Blacks play at home.",
                optionB:"During the Super Rugby season",
                optionC:"During the The National Provincial Championship season",
                optionD:"Rugby World Cup Games",
                correctOption:"optionA"
            },
            {
                question:"How are the Black Caps performing on the international stage?",
                optionA:"The Black Caps are performing admirably on the international stage.",
                optionB:"The Black Caps are performing terribly on the international stage.",
                optionC:"The Black Caps are gaining better performaces over time.",
                optionD:"The Black Caps are slowly lossing there great performances",
                correctOption:"optionA"
            },
            {
                question:"Which sports are particularly popular enjoyed in outdoor sporting activities?",
                optionA: "Mountain Biking, Hiking and Sailing",
                optionB: "Walking, Running, Track Biking",
                optionC: "Football, Rugby, Cricket",
                optionD: "Surfborading, Skateborading, Netball",
                correctOption:"optionA"
            },
            {
                question: "Which sport is growing intrest in NZ",
                optionA: "Football, Rugby Sevens, Judo",
                optionB: "Esports, Basketball, Adventure Racing",
                optionC: "Jiu Jitsu",
                optionD: "Cricket, Rugby, American football",
                correctOption:"optionB"
            },
            {
                question:"What type of Sporting event could we see in the future",
                optionA: "Sailing Ragattas",
                optionB: "Football tournaments",
                optionC: "Surfing  tournaments",
                optionD: "Hosting the Olympics",
                correctOption: "optionA"
            },
            {
                question: "How will New Zealand's beautiful waters be used for upcoming sporting events?",
                optionA: "Rowing events",
                optionB: "Sailing events",
                optionC: "Swimming events",
                optionD: "Diving events",
                correctOption: "optionB"
            },
            {
                question: "What kind of terrain will challenge athletes in New Zealand's upcoming off-road races?",
                optionA: "Rugged terrain, which includes mountains, forests, and coastal areas.",
                optionB: "Nice flat road, which include nice smooth grounds.",
                optionC: "Bumpy roads, which include real mudd roads throught the middle of the north island.",
                optionD: "Icey road, Which would mean that the car would slide more.",
                correctOption: "optionA"
            },
            {
                question: "Will New Zealand continue to emphasize rugby?",
                optionA: "No, they will not contune to emphasize rugby.",
                optionB: "Yes, New Zealand will continue to emphasize rugby.",
                optionC: "Yes, But New Zealand will put less effort into rugby",
                optionD: "No, But New Zealand will still provide funding for rugby",
                correctOption: "optionB"
            },
            {
                question: "How is New Zealand incorporating its stunning landscapes into these sporting events, and what kind of experiences do they promise for attendees?",
                optionA: "They have promised more stadiums closer to home and better experiences",
                optionB: "Immersive experiences that combine sports with New Zealand's scenic landscapes",
                optionC: "More events happening giving less popluar teams a chance to have a go",
                optionD: "They are giving the Attendees nothing more than they have got",
                correctOption: "optionB"
            }
            
        ]
    }   
]  

// We need to dumb everthing down below this line

const data = reactive({
    name: '',
    started: false,
    completed: '',
    selectedQuiz: 0,
    currentQuestion: 0,
    correctAnswer: '',
    incorrectAnswer: '',
    quizes: [
        {
            type: "selectQuiz",
            description: "Select a quiz",
            questions: [
                {
                    question: "Which quiz would you like to try",
                    choices: quizes.map((quiz) => { return `${quiz.title} - ${quiz.description}` }),
                    answer: "Start the quiz",
                    answerText: "Quiz started"
                }
            ]
        },
        ...quizes
    ]
})

function selectedQuizData() {
    // console.log('Selected quiz: ' + data.selectedQuiz)
    return data.quizes[data.selectedQuiz]
}

function selectedQuizQuestions() {
    return selectedQuizData().questions
}

function currentQuestionData() {
    // console.log('Current question: ' + data.currentQuestion)
    return selectedQuizQuestions()[data.currentQuestion]
}

function descriptionText() {
    return selectedQuizData().description
}

function questionText() {
    return currentQuestionData().question
}

// I want a function that will provide the current description inside a <p> tag

const description = () => {
    return html`<h3>${() => descriptionText()}</h3>`
}

const question = () => {
    return html`<p>${data.name}: ${() => questionText()}</p>`
}

const nextQuestion = (answerIndex, answer) => {
    data.incorrectAnswer = ''

    // This is the quiz chooser, it tells us which quiz to move to next
    if (data.selectedQuiz === 0) {
        data.selectedQuiz = answerIndex + 1
        data.currentQuestion = 0
        data.correctAnswer = ''
    } else {
        data.correctAnswer = `Correct ${data.name}! ${currentQuestionData().answerText}`
        if ((data.currentQuestion + 1) >= selectedQuizQuestions().length) {
            // If this is the last question in the quiz, stop here
            data.completed = `Congratulations ${data.name}! You have completed the quiz!`
        } else {
            data.currentQuestion += 1
        }
    }
}

const choiceButton = (choice, idx) => {
    return html`<a href="#" @click="${() => {
        const correctAnswer = currentQuestionData().answer
        // If on quiz 1 or 2 (i.e. the start/choose a quiz step, then the answer is always correct)
        if (data.selectedQuiz === 0) {
            nextQuestion(idx)
        } else if (choice === correctAnswer) {
            nextQuestion(idx, correctAnswer)
        } else {
            data.correctAnswer = ''
            data.incorrectAnswer = `This answer is incorrect: ${choice}. Please try again.`
        }
    }}">${choice}</a>`
}

// Randomise the order of the choices array
const shuffle = (array) => { 
    return array.sort(() => Math.random() * Math.random() - 0.5); 
}

const choices = () => {
    return html`
        <div class="flex-column">
            ${() => shuffle(currentQuestionData().choices.map(choiceButton))}
        </div>
    `
}

function reset() {
    data.completed = ''
    data.selectedQuiz = 0
    data.currentQuestion = 0
    data.correctAnswer = ''
    data.incorrectAnswer = ''
}

function startQuiz() {
    if (data.name.length) {
        data.started = true
    } else {
        data.incorrectAnswer = 'Please enter your name'
    }
}

function enterName(e) {
    data.name = e.target.value
    if (data.name.length) {
        data.incorrectAnswer = ''
    }
}

const body = () => {
    if (!data.started) {
        return html`
            <p>Do a sports quiz to test your knowledge</p>
            <p>Are you ready to take the quiz? Enter your name then click the button below to start.</p>
            <input type="text" @input="${(e) => enterName(e)}" placeholder="Enter your name">
            <a href="#" @click="${() => startQuiz()}">Start quiz</a>
            <p class="incorrect-answer">${() => data.incorrectAnswer}</p>
        `
    } else if (data.completed.length) {
        return html`
            <p class="correct-answer">${() => data.correctAnswer}</p>
            <p class="quiz-completed">${() => data.completed}</p>
            <a href="#" @click="${() => reset()}">Start over</a>
        `
    } else {
        return html`
            ${description}
            <p class="correct-answer">${() => data.correctAnswer}</p>
            ${question}
            ${choices}
            <p class="incorrect-answer">${() => data.incorrectAnswer}</p>
        `
    }
}

html`
    ${body}
`(document.getElementById('quiz-content'))
