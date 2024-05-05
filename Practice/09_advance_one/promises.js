// const promiseOnel = new Promise(function(resolve, reject){
//     //Do any async task
//     //DB calls, Cryptography, network
//     setTimeout(
//         function(){
//             console.log('Async task is completed')
//             resolve()
//         },2000 )
// })

//const { Promise } = require("mongoose");

// promiseOnel.then(function(){
//     console.log("promise consumed");
// })


// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2")
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved")
// })



const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({"username":"Amit", "email":"amit@ai.com"})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);

});