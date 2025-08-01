console.log('hello jee');
// asynchronous code
// setTimeout(function(){
//         console.log('third');
// },3000);

// // synchronous code
// function sync()
// {
//     console.log('first');
// }
// sync();
// console.log('second');


// mera promise
// let meraPromise1=new Promise(function(resolve,reject)
// {
//     setTimeout(function()
// {
//     console.log('mera pehla');
// },3000)
// // to resolve
//   resolve(2233);
// //  reject(new Error('bhaisahab error aaye hai'));
// });
// meraPromise1.then((value)=>{console.log(value)});
// meraPromise1.catch((error)=>{console.log("recieved an error")});
// meraPromise1.catch();

// let meraPromise2=new Promise(function(resolve,reject)
// {
//     setTimeout(function()
// {
//     console.log('mera doosra');
// },5000)
// })

// wadda1 
// let waddaa1=new Promise(function(resolve,reject)
// {
//     setTimeout(function()
// {
//     console.log('settimeout1 is completed');
// },2000)
// resolve(true);
// })

// // wadda2
// let output=waddaa1.then(()=>{
//     let waddaa2=new Promise(function(resolve,reject)
// {
//     setTimeout(function(){
//         console.log('settimeout2 is completed');

//     },3000);
//     resolve(2000);
    

// })
// return waddaa2;
// })

// output.then((value)=>console.log(value));


// async  function
// async function abcd()
// {
//     return 7;
// }
// abcd();

// to return multiple promises
// async function utility() {
//     let delhimausam=new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("delhi mai garmi9 hai");
//         },5000)
//     })
//     let hdmausam=new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("hyderabad mai thand hai");
//         },6000)
//     })
//     let dm=await delhimausam;
//     let hm=await hdmausam;
//     return [dm,hm];


    
// }
// async function utility() {
    

// let content=await fetch('https://jsonplaceholder.typicode.com/todos/1');
// let output=await content.json(); // converting data into json format
// console.log(output);
// }
// utility();


async function helper() {
    
    
let options= {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
  }
    let content=fetch('https://jsonplaceholder.typicode.com/posts',options);
// store this properties of object in the database (link in fetch)
    let response=content.json();
    return response;
}

async function utility() {
    let ans=await helper();
    console.log(ans);
}
utility();


