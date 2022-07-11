// promise = object that encapsulates the result of an asynchronous operation
// let asynchronous methods return values like synchronous methods
// promise to return something in the future

//when this is done the promise will return a value



//  the STATE is 'pending' then: 'fulfilled' or 'rejected'
//  the RESULT is what can be returned
//  2 parts producing & consuming


/*
// ------------- Example 1 -------------
//producing
const promise = new Promise((resolve,reject) => 
{

  let fileLoaded = true;

  if(fileLoaded)
  {
    resolve("File loaded");   //value
  }else{
    reject("File not loaded"); //error
  }
});
  
//conmsuming

promise.then(value => console.log(value))
    .catch(error=> console.log(error));

*/


    // ------------- Example 2 -------------
    const wait = time => new Promise( resolve => {

      setTimeout(reolve,time);
    });

    wait(3000).then( () => console.log("Thanks for waiting"));