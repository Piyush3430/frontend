const countval=document.querySelector('.mid');
const val=document.querySelector('#land');
const val1=document.querySelector('#sand');
val.addEventListener('click',function(event){
    let value=parseInt(countval.innerText);
    value=value-1;
    countval.innerText=value;

})


val1.addEventListener('click',function(event){
    let value=parseInt(countval.innerText);
    value=value+1;
    countval.innerText=value;

})
