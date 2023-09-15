import { html, reactive } from '@arrow-js/core'
import quizes from './quizes.json' assert {type: 'json'}

const data = reactive({
    completed: '',
    selectedQuiz: 0,
    currentQuestion: 0,
    correctAnswer: '',
    incorrectAnswer: '',
    quizes: [
        {
            type: "intro",
            description: "Do a sports quiz to test your knowledge",
            questions: [
                {
                    question: "Are you ready to take the quiz? click the button below to start",
                    choices: [
                        "Start the quiz"
                    ],
                    answer: "Start the quiz",
                    answerText: "Quiz started"
                }
            ]
        },
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
    return html`<p>${() => questionText()}</p>`
}

const nextQuestion = (answerIndex, answer) => {
    data.incorrectAnswer = ''

    // This is the quiz chooser, it tells us which quiz to move to next
    if (data.selectedQuiz === 1) {
        data.selectedQuiz = answerIndex + 2
        data.currentQuestion = 0
        data.correctAnswer = ''
    } else if (data.selectedQuiz === 0) {
       // If this is the first quiz (i.e. intro, then show the quiz chooser)
        data.currentQuestion = 0
        data.selectedQuiz = 1
        data.correctAnswer = ''
    } else {
        data.correctAnswer = 'Correct! ' + currentQuestionData().answerText
        if ((data.currentQuestion + 1) >= selectedQuizQuestions().length) {
            // If this is the last question in the quiz, stop here
            data.completed = 'Congratulations! You have completed the quiz!'
        } else {
            data.currentQuestion += 1
        }
    }
}

const choiceButton = (choice, idx) => {
    return html`<li><button @click="${() => {
        const correctAnswer = currentQuestionData().answer
        // If on quiz 1 or 2 (i.e. the start/choose a quiz step, then the answer is always correct)
        if (data.selectedQuiz === 0 || data.selectedQuiz === 1) {
            nextQuestion(idx)
        } else if (choice === correctAnswer) {
            nextQuestion(idx, correctAnswer)
        } else {
            data.correctAnswer = ''
            data.incorrectAnswer = 'Incorrect answer: ' + choice
        }
    }}">${choice}</button></li>`
}

const choices = () => {
    return html`
        <ul>
            ${() => currentQuestionData().choices.map(choiceButton)}
        </ul>
    `
}

function reset() {
    data.completed = ''
    data.selectedQuiz = 0
    data.currentQuestion = 0
    data.correctAnswer = ''
    data.incorrectAnswer = ''
}

const body = () => {
    if (data.completed.length) {
        return html`
            <p class="correct-answer">${() => data.correctAnswer}</p>
            <p class="quiz-completed">${() => data.completed}</p>
            <button @click="${() => reset()}">Start over</button>
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
