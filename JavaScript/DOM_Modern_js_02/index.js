// function eventFunction() {
//     console.log('I have clicked on the docuemnt');
// }

// document.addEventListener('click', eventFunction);

// document.removeEventListener('click', eventFunction);

// const content = document.querySelector('#wrapper');

// content.addEventListener('click', function(babbar) {
//     console.log(babbar);
// })




// this -> prevent default functionality of any function 

// select all anchor tags
// let links = document.querySelectorAll('a');

// let thirdLink =  links[2];   // index 2

// thirdLink.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log('thik hai acha laga');

// });



let myDiv =  document.createElement('div');

function paraStatus(event){
        console.log('clicked on para ' + event.target.textContent );
    }
  
   myDiv.addEventListener('click', paraStatus);

for (let i=1; i <=100; i++ ){
    let newElement = document.createElement('p');
    newElement.textContent = 'THIS IS PARA ' + i;


    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);


 