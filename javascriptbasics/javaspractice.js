let a=5;
// var b=6; gobal scope
console.log(a);
const num2=4;
// const num2=5;cannot redeclare num2 
console.log(num2);

let b=4;
let c=3;
console.log(4&3);

let age=18;
if(age>18)
{
    console.log('you are overage');
}
else if(age==18)
{
    console.log('you are exact age');
}
else{
    console.log('you are underage');
}
function createRectangle(len,bre){

return rectangle={
    length:len,
    breadth:bre,
    draw()
    {
        console.log('drawing function hai mc');
    }

    }
    // return rectangle;
}
let rectangleobj1= createRectangle(5,6);
let courses=[
    {no:1,name:'vishal'},
    {no:2,name:'vikas'}

]
let course=courses.find