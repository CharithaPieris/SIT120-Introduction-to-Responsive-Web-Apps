// setting the questions and answers into  an array.
const questions = [
    {
        question: "	_______ is the smallest unit of data in a computer ?",
        answers: [
            { text: "Gigabyte", correct: false },
            { text: "Bit ", correct: true },  // marking the coreect as true and incorrect answers as false.
            { text: "Byte ", correct: false },
            { text: "Terabyte ", correct: false },
        ]
    },
    {
        question: "Which of the following is NOT an anti-virus software ?",
        answers: [
            { text: "Avast ", correct: false },
            { text: "Norton", correct: false },
            { text: "Kaspersky ", correct: false },
            { text: "Linux ", correct: true },
        ]
    },
    {
        question: "In the context of digital computer, which of the following pairs of digits is referred to as binary code ?",
        answers: [
            { text: "3 and 4 ", correct: false },
            { text: "0 and 1 ", correct: true },
            { text: "2 and 3 ", correct: false },
            { text: "1 and 2 ", correct: false },
        ]
    },
    {
        question: "Which unit of the computer is considered as the brain of the computer ?",
        answers: [
            { text: "Memory unit ", correct: false },
            { text: "Input unit ", correct: false },
            { text: "Output unit ", correct: false },
            { text: "CPU", correct: true },
        ]
    },
    {
        question: "What is the full form of PROM ?",
        answers: [
            { text: "Programmable read-only memory ", correct: true },
            { text: "Program read-output memory ", correct: false },
            { text: "Primary read-only memory ", correct: false },
            { text: "Program read-only memory ", correct: false },
        ]
    },
    {
        question: "In the context of computing, what is the full form of URL ?",
        answers: [
            { text: "Undistributed Resource Locator ", correct: false },
            { text: "Uniform Resource Locator ", correct: true },
            { text: "Uniform Region Locator ", correct: false },
            { text: "Unified Resource Locator ", correct: false },
        ]
    },
    {
        question: "Which of the following is an input device used to enter motion data in computers or other electronic devices ?",
        answers: [
            { text: "Monitor ", correct: false },
            { text: "Plotter", correct: false },
            { text: "Joystick ", correct: false },
            { text: "Trackball ", correct: true },
        ]
    },
    {
        question: "In the context of computing, a byte is equal to _____ bits ?",
        answers: [
            { text: "4", correct: false },
            { text: "8", correct: true },
            { text: "16", correct: false },
            { text: "24", correct: false },
        ]
    },
    {
        question: "	_____ is a small, portable flash memory card that plugs into a computer’s USB port and functions as a portable hard drive ?",
        answers: [
            { text: "ICD-RW ", correct: false },
            { text: "DVD-ROM ", correct: false },
            { text: "Flash drive ", correct: true },
            { text: "CD-ROM ", correct: false },
        ]
    },
    {
        question: "Which of the following devices is NOT used to enter data into a computer ?",
        answers: [
            { text: "Mouse ", correct: false },
            { text: "Monitor", correct: true },
            { text: "Keyboard ", correct: false },
            { text: "Scanner ", correct: false },
        ]
    },
];

//Adding HTML varriables.
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer_btns");
const nextButton = document.getElementById("next_btn");
const timerElement = document.getElementById("timer");

let currentQuestionIndex = 0;  //Adding the varriable currentQuestionIndex to store the question index.
let score = 0;      //Adding the varriable score to store the score.
let timeLeft = 60;
let timerId;

//creating the function startQuiz to start the quizeApp
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 60;
    nextButton.innerHTML = "Next Question"  //changing the text of the nextButton to "Next".
    showQuestion();     
    startTimer();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];   //setting the variable CurrentQuestion to the index of the questions Array.
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;   //displaying the question with the question number.

    //displaying the answers from the questions.
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");    //asigning the button tag to a variable name button.
        button.innerHTML = answer.text;     
        button.classList.add("btn");        
        answerButtons.appendChild(button);      
        if(answer.correct){
            button.dataset.correct = answer.correct;       
        }
        button.addEventListener("click", selectAnswer);    
    });
}

//reffered from W3 Schools.
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);       //removing the previous answers
    }
}

//referd from W3 Schools.
function selectAnswer(e){
    const selectedBtn = e.target;       
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");   //if the selectedBtn dataset is true it will add the class name correct.
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect")      //if the selectedBtn dataset is false it will add the class name incorrect.
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){      
            button.classList.add("correct");
        }
        button.disabled = true;     
    });
    nextButton.style.display = "block";     //displaying the next Question button.
}

function showScore() {
    resetState();
    clearInterval(timerId);
    let timeTaken = 60 - timeLeft;
    questionElement.innerHTML = `You scored ${score} out of ${questions.length} in ${timeTaken} seconds!`;

    // Additional content after showing the score
    const additionalContent = document.createElement("p");
    additionalContent.innerHTML = "Congratulations on completing the quiz!";
    questionElement.appendChild(additionalContent);

//
//    const quizBox = document.querySelector(".box");
//    if (score === questions.length) {
//        quizBox.style.backgroundColor = "#2c8552"; 
//    } else if (score >= questions.length / 2) {
//        quizBox.style.backgroundColor = "#e0a20c"; 
//    } else {
//        quizBox.style.backgroundColor = "#B22222"; 
//    }

    nextButton.innerHTML = "Start Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})


/*------------Quiz Timer-------------------*/

//refered from Stackoverflow.
function startTimer(){
    timerId = setInterval(() => {
        timeLeft --;
        timerElement.innerHTML = `Time Left : ${timeLeft}`;
        if(timeLeft <= 0){
            clearInterval(timerId);
            showScore();
        }
    }, 1000);     
}

startQuiz();