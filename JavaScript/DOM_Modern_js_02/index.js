// function eventFunction() {
//     console.log('I have clicked on the docuemnt');
// }

// document.addEventListener('click', eventFunction);

// document.removeEventListener('click', eventFunction);

// const content = document.querySelector('#wrapper');

// content.addEventListener('click', function(babbar) {
//     console.log(babbar);
// })

let links = document.querySelectorAll('a');
let thirdLink = links[2];

thirdLink.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('maza aaya, accha laga');
});
