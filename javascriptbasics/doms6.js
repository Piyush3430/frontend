console.log('hello jee');

//  add event listener on event object to show what it consists
 let content=document.querySelector('#wrapper');
 content.addEventListener('click',function(event)
 {
     console.log(event);
 })

// to prevent deafult action 
// let content=document.querySelectorAll('a');
// let links=content[2];
// links.addEventListener('click',function(event)
// {
//     event.preventDefault();
//     console.log('maza aaya');

// })
// to add target to all span tag

// let element = document.querySelector('#wrapper');
// element.addEventListener('click',function(event)
// {
//     if(event.target.nodeName==='SPAN')
//     console.log('span par click kiya hai'+event.target.console);
// })



