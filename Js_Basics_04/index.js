// // console.log('kya haaal');


// //function call or invoke
// run();


// //function declaration
// function run() {
//     console.log('running');
// }




// //Named function assignment
// let stand = function walk() {
//     console.log('walking');
// };

// //Anonymous function assignment
// let stand2 = function() {
//     console.log('walking');
// };

// stand();

// let jump = stand;

// jump();

// stand2();


// let x = 1;
// x = 'a';

// console.log(x);


// function sum() {
//     let total = 0;
//     for(let value of arguments) 
//         total = total + value;
//     return total;
// }

// // console.log(sum(1,2));
// //console.log(sum(1));
// // console.log(sum());
// //console.log(sum(1,2,,3,4,5));

// let ans = sum(1,2,2,3);
// console.log(ans);


 
// Rest operator

// function sum(num, value , ...args){
//     console.log(args);
// }

// sum(1,2,3,4,5,5,6,6,7,7);




// Default parameters

// function interest(p,r=2,y=4){
//     return p*r*y/100 ;
// }
// console.log(interest(1000,33));
// if we want to bypass default parameter
// console.log(interest(1000,undefined,6));



// GETTER SETTER
// getter -> access properties
// setter -> change or mutate  properties


// let person = {
//     fName : 'jaydeep',
//     lName : 'yaduwanshi',

//     get fullName(){
//          return `${person.fName}    ${person.lName} ` },

//     set fullName(value){
//         let parts = value.split(' ');
//         this.fName = parts[0];   // jis bhi object par kam kar rha uska first name
//         this.lName = parts[1];
        
//     }
// };
 
// console.log(person.fullName);
// person.fullName = "rahul rajput";


// // console.log(person.fullName);

  
// try {
//     person.fullName = true;
// }
// catch (e) {
//     alert(e);
// }

// console.log(person.fullName);


// GETTER SETTER

// getter -> access properties
// setter -> change or mutate properties


let person = {
    fName : 'Love',
    lName : 'Babbar',
    get fullName() {
        return `${person.fName} ${person.lName}`;
    },
    set fullName(value) {
        if(typeof value !== String) {
            throw new Error("You have not sent a string");
        }
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
};



console.log(person);
// issue - > read only


console.log(person.fullName);

try {
    person.fullName = true;
}
catch (e) {
    alert(e);
}


console.log(person.fullName);