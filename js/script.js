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

proj3.quizObject = {
    question1: {
        question: 'Have you studied any web dev tech before?',
        answers: ['yes', 'no'],
        value: ['question2', 'question3'],
        name: ['', '']
    },
    question2: {
        question: 'Which of the following technologies are you already confident with?',
        answers: ['html', 'css', 'javascript', 'sass', 'git', 'github'],
        value: 'question3',
        name: ['', '']
    },
    question3: {
        question: 'Are you interested in front-end, what people see, or back-end, the server-side functionality?',
        answers: ['Front-End', 'Back-End', 'Not sure yet.'],
        value: ['end', 'question4', 'end'],
        name: ['react', 'node', 'none']
    },
    question4: {
        question: 'Which of the following technologies are you already confident with?',
        answers: ['Relational', 'Non-relational', 'Not sure yet.'],
        value: ['end', 'end', 'end'],
        name: ['mysql', 'mongodb', 'none']
    },
}


proj3.initialObject = {
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
    sass: {
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

proj3.addStackObject = {
    react: {
        name: 'react',
        icon: 'fab fa-react',
        link: '',
        color: 'aqua',
    },
    node: {
        name: 'node',
        icon: 'fab fa-node-js',
        link: '',
        color: 'seagreen',
    },
    mysql: {
        name: 'mysql',
        icon: 'icon-mysql',
        link: '',
        color: 'darkcyan',
    },
    mongodb: {
        name: 'mongodb',
        icon: 'icon-mongodb',
        link: '',
        color: 'dodgerblue',
    },
}

proj3.cleanUp = () => {
    $('p').remove();
    $('i').remove();
    $('button').remove();
}

let introLength = 0;
proj3.intro = function introLoop() {
    $('.main-div-border > div').hide();
    setTimeout(() => {
        $('p').remove();
        $(`<p>${proj3.introArray[introLength]}</p>`)
            .hide()
            .prependTo('.main-div-border')
            .fadeIn(1500)
            .fadeOut(1500);
        introLength++;
        if (introLength < proj3.introArray.length) {
            introLoop();
        }
        else {
            setTimeout(() => {
                $('p').remove();
                $('.main-div-border > .inside-flex').show();
                proj3.quizLoop('question1')
            }, 3000);
        }
    }, 3000);
};

proj3.quizLoop = (questArg) => {
    proj3.cleanUp();
    $(`<p>${proj3.quizObject[questArg].question}</p>`)
        .hide()
        .prependTo('.main-div-border')
        .fadeIn(1500);

    if (questArg == 'question2') {
        $('.main-div-border > div').show();
        for (let x in proj3.initialObject) {
            $('<i>')
                .hide()
                .addClass(`${proj3.initialObject[x].icon} ${proj3.initialObject[x].color} grayscale button-yes`)
                .attr('value', `${x}`)
                .appendTo('.inside-flex')
                .fadeIn(1500);
        }

        $('<button>')
            .text(`Continue`)
            .addClass('submit-button')
            .hide()
            .appendTo('.submit')
            .fadeIn(1500);

        $('i').on('click', function () {
            $(this).toggleClass('grayscale transform')
        });

        $('button').on('click', function () {
            //todo you need to add functionality when you submit the form it'll pop or something from the object.
            $('i').each(function (i) {
                if ($(this).attr('class').includes('transform')) {
                    delete proj3.initialObject[`${$(this).attr('value')}`];
                };
            });
            proj3.quizLoop('question3');
            $('.main-div-border > .submit').hide();
        });
    }

    else {
        for (let i = 0; i < proj3.quizObject[questArg].answers.length; i++) {
            $('<button>')
                .text(`${proj3.quizObject[questArg].answers[i]}`)
                .addClass('submit-button')
                .attr('value', `${proj3.quizObject[questArg].value[i]}`)
                .attr('name', `${proj3.quizObject[questArg].name[i]}`)
                .hide()
                .appendTo('.inside-flex')
                .fadeIn(1500);
        };

        $('button').on('click', function () {
            for (let x in proj3.addStackObject) {
                if ($(this).attr('name') == x && !proj3.initialObject[`${x}`]) {
                    proj3.initialObject[`${x}`] = proj3.addStackObject[`${x}`];
                }
            }

            if($(this).attr('value') == 'end') {
                proj3.end();
            } else {
                proj3.quizLoop($(this).attr('value'));
            }
        });
    }
}

proj3.end = () => {
    proj3.cleanUp();
    for (let x in proj3.initialObject) {
        $('<i>')
            .hide()
            .addClass(`${proj3.initialObject[x].icon} ${proj3.initialObject[x].color} icons-large`)
            .attr('value', `${x}`)
            .appendTo('.inside-flex')
            .fadeIn(1500);
    }
}

//doc ready
$(function () {
    proj3.intro();
});