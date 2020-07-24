//initialize namespace
const proj3 = {};

//array used for storing first set of items to display, prior to 'quiz' start
proj3.htmlArray = [
    'Welcome.',
    'Want to learn Web Dev, but not sure where to start?',
    'Let me help, just answer a few questions.'
]

let introLength = 0;
proj3.intro = function introLoop() {
    setTimeout( () => {
        $('p').remove();
        $(`<p>${proj3.htmlArray[introLength]}</p>`)
            .hide()
            .appendTo('.main-div-border')
            .fadeIn(2000)
            .fadeOut(2000);
        // $('.main-div-border').append($(`<p>${proj3.htmlArray[introLength]}</p>`));
        introLength++;
        if ( introLength < proj3.htmlArray.length){
            introLoop();
        }
    }, 4000);
};

//doc ready
$(function() {
    proj3.intro();
});