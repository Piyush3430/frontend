

// method created
// let rectangle ={
//     length:1,
//     breadth:2,
//     draw:function()
//     {
//         console.log('drawing rectangle');
//     }
// };


// factory function    (return a value of object when called)
// function createRectangle(len,bre)
// {
//     return rectangle = {
//         length: len,
//         breadth : bre,
    
//     draw()
//     {
//         console.log('drawing rectangle');
//     }
// };
// }

// let rectangleobj1  = createRectangle(5,4); rectangleobj1 is variable name create rectangle is function call

// constructor function
// function Rectangle(len,bre)
// {
//     this.length=len;
//     this.breadth=bre;
//     this.draw=function()
//     {
//         console.log('drawing');
//     }
// }
// let rectangleobject=new Rectangle(4,6); //rectangleobject is name of the object and new keyword is used to create object with properties such as length,breadth,draw() function 

//  dynamic allocation
// rectangleobject.color='yellow';
// console.log(rectangleobject);
// delete rectangleobject.color;
// console.log(rectangleobject);

// noramal alloacation
// let a=10;
// let b=a;
// a++;
// console.log(a);
// console.log(b);

 //assigning a value to a object
//  let a={value:10} //pointing to same memory address
//  let b=a;
//  a.value++;
//  console.log(a);
//  console.log(b);

// pass by value
 let a=10;
 console.log(a);
 inc(a);
 function inc(a)
 {
     a++;

 }
 console.log(a);

// pass by refernece
// let a={value:10}; // assigning value to a object
// inc(a);
// function inc(a)
// {
//     a.value++;
// }
// console.log(a);
 
// for in loop
let rectangle={
    length:1,
    breadth:2
};
// for(let key in rectangle)
// {
//     // keys are reflected through key variable
//     // values are reflected through rectangle[key]
//     console.log(key,rectangle[key]);
// }

// for of loop
// for(let key in Object.entries(rectangle))
// {
//     console.log(key);
// }

// to check whether a property is present in rectangle
if('length' in rectangle)
{
    console.log('Present');
}
else{
    console.log('Absent');
}
let src={
    a:10,
    b:20
}
let src2={
    value:30
}
// let dest={}
// first method to clone object
// for(let key in src)
// {
//     dest[key]=src[key];
// }
// console.log(dest);
// src.a++;
// console.log(dest);

// second method
// let dest=Object.assign({},src,src2)
// console.log(dest);
// src.a++;
// console.log(dest);

// third method to clone object
let dest={...src};
console.log(dest);
src.a++;
console.log(dest);



