//initialize namespace
const proj3 = {};

//array used for storing first set of items to display, prior to 'quiz' start
proj3.introArray = [
    'Welcome.',
    'Want to learn Web Dev?',
    'Not sure where to start?',
    'Let me help.',
    'Just answer a few questions.'
]

proj3.quizArray = [
    {
        question: 'Have you studied any web dev tech before?',
        answers: ['yes', 'no']

    },
    {
        question: 'Which of the following technologies are you already confident with?',
    },
    {
        question: 'Are you interested in front-end, what people see, or back-end, the server-side functionality?',
        answers: ['Front-End', 'Back-End','Not sure yet.']
    },
    {
        question: 'Which of the following technologies are you already confident with?',
        answers: ['Relational', 'Non-relational', 'Not sure yet.']
    },
]

proj3.initialArray = [
    {
        name: 'html',
        icon: 'fab fa-html5',
        link: '',
        color: 'tomato',
    },
    {
        name: 'css',
        icon: 'fab fa-css3-alt',
        link: '',
        color: 'gold',
    },
    {
        name: 'javascript',
        icon: 'fab fa-js-square',
        link: '',
        color: '',
    },
    {
        name: 'sass',
        icon: 'fab fa-sass',
        link: '',
        color: 'lightcoral',
    },
    {
        name: 'git',
        icon: 'fab fa-git-alt',
        link: '',
        color: 'orangered',
    },
    {
        name: 'github',
        icon: 'fab fa-github',
        link: '',
        color: '',
    },
]

proj3.addStackArray = [
    {
        name: 'react',
        icon: 'fab fa-react',
        link: '',
        color: 'aqua',
    },
    {
        name: 'node',
        icon: 'fab fa-node-js',
        link: '',
        color: 'seagreen',
    },
    {
        name: 'mysql',
        icon: 'icon-mysql',
        link: '',
        color: 'darkcyan',
    },
    {
        name: 'mongodb',
        icon: 'icon-mongodb',
        link: '',
        color: 'dodgerblue',
    },
]

let introLength = 0;
proj3.intro = function introLoop() {
    $('.main-div-border > div').hide();
    setTimeout( () => {
        $('p').remove();
        $(`<p>${proj3.introArray[introLength]}</p>`)
            .hide()
            .prependTo('.main-div-border')
            .fadeIn(1500)
            .fadeOut(1500);
        introLength++;
        if ( introLength < proj3.introArray.length){
            introLoop();
        }
        else {
            setTimeout( () => {
                $('p').remove();
                // proj3.quizLoop(proj3.quizArray)
            },3000);
        }
    }, 3000);
};

// proj3.quizLoop = (quiz) => {
//     $(`<p>${quiz[0].question}</p>`)
//         .hide()
//         .prependTo('.main-div-border')
//         .fadeIn(1500);
//     quiz[0].answers.forEach ( (i) => {
//         $('.main-div-border .inside-flex').show();
//         $('button')
//             .text(i)
//             .hide()
//             .appendTo('.inside-flex')
//             .fadeIn(1500);
//     });

// };


//doc ready
$(function() {
    proj3.intro();
});