// console.log('hello jee');

// let lastName='babbar';
// let FirstName = new String('love');
 let v='you are gar';
 let message=v.split(''); // split on the basis of space
 console.log(message);
// let date=new Date();
// console.log(date);

// arrays 
let numbers=[3,5,7,9,8];
console.log(numbers);
// insert
// at end
// numbers.push(7)
// 6
// console.log(numbers)

// VM1320:1 (6) [3, 5, 7, 9, 8, 7]
// undefined

// // at begin
// numbers.unshift(1)
// 7
// console.log(numbers)
// VM1458:1 (7) [1, 3, 5, 7, 9, 8, 7]
// undefined

// // at center
// numbers.splice(2,0,'a','b')
// []
// console
// console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
// console.log(numbers)
// VM1651:1 (9) [1, 3, 'a', 'b', 5, 7, 9, 8, 7]
// undefined

// searching
console.log(numbers);
console.log(numbers.indexOf(8));

// present in array or not
// console.log(numbers.includes(5));
// // object array created
// let courses=[
//     {no:1, naam:'love'},
//     {no:2, naam:'rahul'}
// ];
// console.log(courses);

// // method to find objects in an array
// let course=courses.find(function(course)
// {
//     return course.naam == 'love';
// })
// console.log(course);

// deleting elements from an array
// let number=[1,2,3,4,5,6];
// // end
// number.pop();
// // begin
// number.shift();

// // in the middle
// number.splice(2,1);
// console.log(number);

// // delete an array
// number.length=0;
// console.log(number);

// last array 
// let first =[1,2,3];
// let second=[4,5,6];
// let combined = first.concat(second);
// console.log(combined);

// // removing substrings from array
// let marks=[10,20,30,40,50,60];

// // let sliced=marks.slice(2,6);
// let sliced=marks.slice();
// console.log(sliced);

// for iterating array for of loop
// let arr=[10,20,30,40];
// for(let value of arr)
// {
//     console.log(value);
// }

// arr.forEach(number=> console.log(number))

// joining arrays
let num=[10,20,30,40,50];
// let joined=num.join(',');
// console.log(joined);

// split arrays
let a='this is my first message';
let b=a.split(' ');
console.log(b);

// join by parts
// let parts=[10,20,30];
// let joined=parts.join('_');
// console.log(jee);

// sort an array
let x=[40,20,30];
x.sort();
console.log(x);

// filtering an array
let z=[10,20,30];
let filtered=z.filter(value=>value>=20);
console.log(filtered);

// mapping values to objects
let y=[10,20,30,40];
// console.log(y);
// let items= y.map(value=> 'student_no'+value);

// console.log(items);

// filtering and mapping values to objects
let items=y.filter(value=>value>20)
           .map(num=>{value:num});
console.log(items);

