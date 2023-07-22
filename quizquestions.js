const quizDB = [
    {
        question: "Question-1:	Grand Central Terminal, Park Avenue, New York is the world's",

        a: "largest railway station",
        b: "highest railway station",
        c: "longest railway station",
        d: "None of the above",

        ans: "ans1"
    },
    {
        question: "Question-2:	Entomology is the science that studies",

        a: "Behavior of human beings",
        b: "Insects",
        c: "The origin of technical terms",
        d: "The formation of rocks",

        ans: "ans2"
    },
    {
        question: "Question-3:	Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",

        a: "Asia",
        b: "Africa",
        c: "Europe",
        d: "Australia",

        ans: "ans2"
    },
    
    {
        question: "Question-4:	For which of the following disciplines is Nobel Prize awarded?",

        a: "Physics and Chemistry",
        b: "Physiology or Medicine",
        c: "Literature, Peace and economics",
        d: "All of the above",

        ans: "ans4"
    },
   
    {
        question: "Question-5:	Hitler party which came into power in 1933 is known as",

        a: "Labour party ",
        b: "Nazi party",
        c: "Ku-Klux-Klan",
        d: "Democratic party",

        ans: "ans2"
    },

    {
        question: "Question-6:	First Afghan War took place in",

        a: "1839",
        b: "1843",
        c: "1833",
        d: "1848",

        ans: "ans1"
    },
   
    {
        question: "Question-7:	FFC stands for -----.",

        a: "Foreign Finance Corporation",
        b: "Film Finance Corporation",
        c: "Federation of Football Council",
        d: "None of the above",

        ans: "ans2"
    },

    {
        question: "Question-8:	Fastest shorthand writer was -----.",

        a: "Dr G.D. Bist",
        b: "J.R.D. Tata",
        c: "J.M. Tagore",
        d: "Khudada Khan",

        ans: "ans1"
    },
    
    {
        question: "Question-9:	Galileo was an Italian astronomer who -----.",

        a: "developed the telescope",
        b: "discovered four satellites of Jupiter",
        c: "discovered that the movement of pendulum produces a regular time measurement",
        d: "All of the above",

        ans: "ans4"
    },

    {
        question: "Question-10:	Exposure to sunlight helps a person improve his health because",

        a: "the infrared light kills bacteria in the body",
        b: "resistance power increases",
        c: "the pigment cells in the skin get stimulated and produce a healthy tan",
        d: "the ultraviolet rays convert skin oil into Vitamin D",

        ans: "ans4"
    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answer = document.querySelectorAll('.answer');
let questioncount = 0;
let score = 0;
const loadQuestion = () => {

    const questionlist = quizDB[questioncount];

    question.innerText = quizDB[0].question;

    option1.innerText = questionlist.a;
    option2.innerText = questionlist.b;
    option3.innerText = questionlist.c;
    option4.innerText = questionlist.d;
}



loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answer.forEach((curanselem) => {
        if(curanselem.checked){
            answer = curanselem.id;
        }
        
    });

    return answer;
};

const deselctall = () =>
{
    answer.forEach((curanselem) => curanselem.checked = false);
}


submit.addEventListener('click',() => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer == quizDB[questioncount].ans){
        score++;
    };

    questioncount++;

    deselctall();

    if(questioncount < quizDB.length){
        loadQuestion();
    }
});
