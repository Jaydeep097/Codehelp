// setTimeout ( function(){
//      console.log('third');   
// },3000)

// function sync(){
//     console.log('first');
// }
// sync();

// console.log('second');


// promise 

let meraPromise =  new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('i am inside promise');
    }, 5000);
    resolve(2233);
});

console.log('pehla');