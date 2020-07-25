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

proj3.quizArray = {
    question1: {
        question: 'Have you studied any web dev tech before?',
        answers: ['yes', 'no'],
        value: ['question3','question2']
    },
    question2: {
        question: 'Which of the following technologies are you already confident with?',
        answers: ['html', 'css','javascript','sass','git','github'],
        value: 'question3',
    },
    question3 : {
        question: 'Are you interested in front-end, what people see, or back-end, the server-side functionality?',
        answers: ['Front-End', 'Back-End','Not sure yet.'],
        value: ['end','question4','end']
    },
    question4: {
        question: 'Which of the following technologies are you already confident with?',
        answers: ['Relational', 'Non-relational', 'Not sure yet.'],
        value: ['end', 'end','end']
    },
}


proj3.initialArray = {
    html: {
        name: 'html',
        icon: 'fab fa-html5',
        link: '',
        color: 'tomato',
    },
    css: {
        name: 'css',
        icon: 'fab fa-css3-alt',
        link: '',
        color: 'lightskyblue',
    },
    javascript: {
        name: 'javascript',
        icon: 'fab fa-js-square',
        link: '',
        color: 'gold',
    },
    sass : {
        name: 'sass',
        icon: 'fab fa-sass',
        link: '',
        color: 'lightcoral',
    },
    git: {
        name: 'git',
        icon: 'fab fa-git-alt',
        link: '',
        color: 'orangered',
    },
    github: {
        name: 'github',
        icon: 'fab fa-github',
        link: '',
        color: 'darkslategrey',
    },
}

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
                proj3.quizLoop(question1)
            },3000);
        }
    }, 3000);
};

proj3.quizLoop = (questArg) => {

    $(`<p>${proj3.quizArray[questArg].question}</p>`)
        .hide()
        .prependTo('.main-div-border')
        .fadeIn(1500);

    if (questArg == 'question2') {
        for (let x in proj3.initialArray) {
            $('<i>')
                .addClass(`${proj3.initialArray[x].icon} unchecked button-yes ${proj3.initialArray[x].color}`)
                .attr('value',`${x}`)
                .hide()
                .appendTo('.inside-flex')
                .fadeIn(1500);
        }
        $('<submit>')
            .text(`Continue`)
            .addClass('submit-button')
            .hide()
            .appendTo('.submit')
            .fadeIn(1500);

        $('i').on('click', function() {
            $(this).toggleClass('unchecked checked')
        });

        // $('submit').on('click', function() {
        //     document.preventDefault();
        // })
    }
    else {
        for (let i = 0; i < proj3.quizArray[questArg].answers.length; i++) {
            $('<button>')
                .text(`${proj3.quizArray[questArg].answers[i]}`)
                .addClass('button-yes')
                .attr('value',`${proj3.quizArray[questArg].value[i]}`)
                .hide()
                .prependTo('.inside-flex')
                .fadeIn(1500);
        };
    }
}

//doc ready
$(function() {
    // proj3.intro();
    proj3.quizLoop('question2');
});