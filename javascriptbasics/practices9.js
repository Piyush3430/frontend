console.log('hello jee');
let content=document.querySelector('#wrapper');
let newpara=document.createElement('p');
newpara.textContent='i love para';
newpara.remove();
content.appendChild(newpara);
document.body.appendChild(content)
content.addEventListener('click',function(){
    console.log('i clicked on para');
})

content.removeEventListener("click",function(){},false)