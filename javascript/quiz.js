import { html, reactive } from '@arrow-js/core'
import quizes from '../quizes.json' assert {type: 'json'}

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
