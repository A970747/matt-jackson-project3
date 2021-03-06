//initialize namespace
const proj3 = {};

//Array phrases used in intro loop.
proj3.introArray = [
    'Welcome.',
    'Want to learn web development?',
    'Not sure where to start?',
    'Let me help.',
    'Just answer a few questions.'
]

//Questionnaire object with questions & responses.
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
        question: 'Which type of database would prefer to learn?',
        answers: ['Relational', 'Non-relational', 'Not sure yet.'],
        value: ['end', 'end', 'end'],
        name: ['mysql', 'mongodb', 'mongodb']
    },
}

//Based tech stack object.
proj3.initialObject = {
    html: {
        name: 'html',
        icon: 'fab fa-html5',
        color: 'tomato',
        learn: {
            Wikipedia: 'https://en.wikipedia.org/wiki/HTML5',
            MDN: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Introduction_to_HTML5',
            FreeCodeCamp: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/',
            TheOdinProject: 'https://www.theodinproject.com/courses/web-development-101#the-front-end'
        }
    },
    css: {
        name: 'css',
        icon: 'fab fa-css3-alt',
        color: 'lightskyblue',
        learn: {
            Wikipedia: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets',
            MDN: 'https://developer.mozilla.org/en-US/docs/Learn/CSS',
            FreeCodeCamp: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/',
            TheOdinProject: 'https://www.theodinproject.com/courses/web-development-101#the-front-end'
        }
    },
    javascript: {
        name: 'javascript',
        icon: 'fab fa-js-square',
        color: 'gold',
        learn: {
            Wikipedia: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets',
            MDN: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript',
            FreeCodeCamp: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/',
            TheOdinProject: 'https://www.theodinproject.com/courses/web-development-101#javascript-basics'
        }
    },
    sass: {
        name: 'sass',
        icon: 'fab fa-sass',
        color: 'lightcoral',
        learn: {
            Wikipedia: 'https://en.wikipedia.org/wiki/Sass_(stylesheet_language)',
            SASS: 'https://sass-lang.com/guide',
            FreeCodeCamp: 'https://www.freecodecamp.org/learn/front-end-libraries/sass/',
            TheOdinProject: 'https://www.theodinproject.com/courses/web-development-101#javascript-basics'
        }
    },
    git: {
        name: 'git',
        icon: 'fab fa-git-alt',
        color: 'orangered',
        learn: {
            Wikipedia: 'https://en.wikipedia.org/wiki/Git',
            Git: 'https://git-scm.com/doc',
            FreeCodeCamp: 'https://www.freecodecamp.org/news/best-git-tutorial/',
            TheOdinProject: 'https://www.theodinproject.com/courses/web-development-101/lessons/introduction-to-git'
        }
    },
    github: {
        name: 'github',
        icon: 'fab fa-github',
        color: 'darkslategrey',
        learn: {
            Wikipedia: 'https://en.wikipedia.org/wiki/GitHub',
            GitHub: 'https://lab.github.com/',
            LearnEnough: 'https://www.learnenough.com/git-tutorial/sharing#sec-github'
        }
    },
}

//Object to pull tech from based on questionnaire answers.
proj3.addStackObject = {
    react: {
        name: 'react',
        icon: 'fab fa-react',
        color: 'aqua',
        learn: {
            Wikipedia: 'https://en.wikipedia.org/wiki/React_(web_framework)',
            React: 'https://reactjs.org/tutorial/tutorial.html',
            FreeCodeCamp: 'https://www.freecodecamp.org/learn/front-end-libraries/react/',
            TheOdinProject: 'https://www.theodinproject.com/courses/javascript/lessons/react'
        }
    },
    node: {
        name: 'node',
        icon: 'fab fa-node-js',
        color: 'seagreen',
        learn: {
            Wikipedia: 'https://en.wikipedia.org/wiki/Node.js',
            Node: 'https://nodejs.org/en/docs/guides/',
            NodeJS: 'https://nodejs.dev/learn',
            TheOdinProject: 'https://www.theodinproject.com/courses/nodejs'
        }
    },
    mysql: {
        name: 'mysql',
        icon: 'icon-mysql',
        color: 'darkcyan',
        learn: {
            Wikipedia: 'https://en.wikipedia.org/wiki/MySQL',
            MySQL: 'https://dev.mysql.com/doc/mysql-getting-started/en/',
            CodeAcademy: 'https://www.codecademy.com/learn/learn-sql',
            TheOdinProject: 'https://www.theodinproject.com/courses/databases/lessons/databases-and-sql'
        }
    },
    mongodb: {
        name: 'mongodb',
        icon: 'icon-mongodb',
        color: 'dodgerblue',
        learn: {
            Wikipedia: 'https://en.wikipedia.org/wiki/MongoDB',
            MongoDB: 'https://university.mongodb.com/',
            FreeCodeCamp: 'https://www.freecodecamp.org/learn/apis-and-microservices/mongodb-and-mongoose/',
        }
    },
}

proj3.init = function () {
    proj3.intro();
    proj3.backgroundSetter();
}

//Clean up DOM elements before adding new.
proj3.cleanUp = () => {
    $('.mainDivBorder p').remove();
    $('.mainDivBorder i').remove();
    $('.mainDivBorder button').remove();
    $('.mainDivBorder a').remove();
}

//intro loop with welcome message, moves to first question on completion.
let introLength = 0;
proj3.intro = function introLoop(x = 500) {
    $('.mainDivBorder > div').hide();
    setTimeout(() => {
        $('p').remove();
        $(`<p>${proj3.introArray[introLength]}</p>`)
            .hide()
            .prependTo('.mainDivBorder')
            .fadeIn(1500)
            .fadeOut(1500);
        introLength++;
        if (introLength < proj3.introArray.length) {
            introLoop(3000);
        }
        else {
            setTimeout(() => {
                $('p').remove();
                $('.mainDivBorder > .insideFlex').show();
                proj3.quizLoop('question1')
            }, 3000);
        }
    }, x);
};

//Primary questionnaire logic, uses response values to generate next question/answer set.
//Question 2 has unique arg because responses are icon-based, and needed different logic.
proj3.quizLoop = (questArg) => {
    proj3.cleanUp();
    $(`<p>${proj3.quizObject[questArg].question}</p>`)
        .hide()
        .prependTo('.mainDivBorder')
        .fadeIn(1500);

    if (questArg == 'question2') {
        $('.mainDivBorder > div').show();
        for (let x in proj3.initialObject) {
            $('<i>')
            .hide()
            .addClass(`${proj3.initialObject[x].icon} ${proj3.initialObject[x].color} grayscale questionButton`)
            .attr({
                'aria-label': `${x}`,
                'aria-pressed': false,
                value: `${x}`,
                name: `${x}`,
            })
            .appendTo('.insideFlex')
            .fadeIn(1500);
        }

        $('<button>')
            .text(`Continue`)
            .addClass('submitButtonAlt')
            .attr({
                'aria-label': 'continue',
                role: 'button',
            })
            .hide()
            .appendTo('.submit')
            .fadeIn(1500);

        // changes aria-pressed attribute on the icons
        let iconSelector = document.querySelectorAll('i');
        for (let i = 0; i < iconSelector.length; i++) {
            iconSelector[i].addEventListener('click', function() {
                if (iconSelector[i].getAttribute('aria-pressed') == 'false') {
                    iconSelector[i].setAttribute('aria-pressed',true);
                }
                else {
                    iconSelector[i].setAttribute('aria-pressed',false);
                }
            })
        };

        $('.insideFlex > i').on('click', function () {
            $(this).toggleClass('grayscale delete');          
        });

        
        $('.submit > button').on('click', function () {
            $('i').each(function (i) {
                if ($(this).attr('class').includes('delete')) {
                    delete proj3.initialObject[`${$(this).attr('value')}`];
                };
            });
            proj3.quizLoop('question3');
        });
    }

    else {
        for (let i = 0; i < proj3.quizObject[questArg].answers.length; i++) {
            $('<button>')
                .hide()
                .text(`${proj3.quizObject[questArg].answers[i]}`)
                .addClass('submitButton')
                .attr({
                    'aria-label': `${proj3.quizObject[questArg].answers[i]}`,
                    value: `${proj3.quizObject[questArg].value[i]}`,
                    name: `${proj3.quizObject[questArg].name[i]}`,
                    role: 'button',
                })
                .appendTo('.insideFlex')
                .fadeIn(1500);
        };

        $('.insideFlex > button').on('click', function () {
            for (let x in proj3.addStackObject) {
                $(this).attr('aria-pressed',true);
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

//Similar logic to the Question 2. Generates icons, but no submit button. Could be refactored
//so that another function generates the images, and we don't duplicate as much code.
proj3.end = () => {
    proj3.cleanUp();
    $('.mainDivBorder > .submit').hide();
    for (let x in proj3.initialObject) {
        $('<i>')
            .hide()
            .addClass(`${proj3.initialObject[x].icon} ${proj3.initialObject[x].color} iconsLarge`)
            .attr({
                'aria-label': `${x}`,
                value: `${x}`,
                name: `${x}`,
            })
            .appendTo('.insideFlex')
            .fadeIn(1500);
    }

    $('i').on('click', function () {
        $(this).attr('aria-pressed',true);
        proj3.cleanUp();
        proj3.techInfo($(this).attr('name'))        
    });
}

//Generates solo page with links to learning resources for each tech. 
//Throws back to proj3.end to re-generate the final results, and
//give user opportunity to explore another tech.
proj3.techInfo = function (techName) {
    $('.mainDivBorder > div').show();
    $('<i>')
        .hide()
        .addClass(`${proj3.initialObject[techName].icon} ${proj3.initialObject[techName].color} iconsLargeNoAnim`)
        .attr('aria-label',`${techName} icon`)
        .prependTo('.mainDivBorder')
        .fadeIn(1500);

    for (let x in proj3.initialObject[techName].learn) {
        $('<a>')
            .hide()
            .text(`${x}`)
            .addClass(`linkStyle`)
            .attr({
                'aria-label': `${x}`,
                name: `${x}`,
                href: `${proj3.initialObject[techName].learn[x]}`,
                target: '_blank'
            })
            .appendTo('.insideFlex')
            .fadeIn(1500);
    }  

    $('<button>')
        .hide()
        .text(`Back`)
        .addClass('submitButtonAlt')
        .attr({
            'aria-label': 'back',
            name: 'back',
            role: 'button',
        })
        .appendTo('.submit')
        .fadeIn(1500);

    $('button').on('click', function () {
        $(this).attr('aria-pressed',true);
        proj3.end();      
    });
};

//Just for fun, generates a random background gradient from a list of 15.
proj3.backgroundSetter = function () {

    let n = `background${Math.ceil(Math.random() * 15)}`
    $('<button>')
        .addClass(`bgRandomButton ${n}`)
        .attr({
            'aria-label': 'Background Randomizer',
            role: 'button',
        })
        .appendTo('.wrapperDiv')


    $('.wrapperDiv > button').on('click', function () {
        $(this).attr('aria-pressed',true);
        $('body')
            .removeClass()
            .addClass(`${n}`);
            proj3.backgroundSetter();
    });
}

//doc ready
$(function () {
    proj3.init();
});