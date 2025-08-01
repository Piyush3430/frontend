console.log('hello jee');
// to calculate time for code to run
// const t1=performance.now();
// let mydiv=document.createElement('div');
// for(let i=0;i<10;i++)
// {
//     let Newelement=document.createElement('p');
//     Newelement.textContent='this is pra'+i;
//     mydiv.appendChild(Newelement);
    
// }
// document.body.appendChild(mydiv);
// const t2=performance.now();
// console.log('this took '+(t2-t1)+'ms');

// to optimise time of the document
const t1=performance.now();
let fragment=document.createDocumentFragment();
for(let i=0;i<10;i++)
{
    let element=document.createElement('p');
    element.textContent='this is para'+i;
    fragment.appendChild(element);

}
let t2=performance.now();
console.log(t2-t1);
document.body.appendChild(fragment);
// set timeout function
setTimeout(function(){
    console.log('hey');

},5000);
