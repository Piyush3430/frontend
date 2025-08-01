console.log('hello jee');
// hoisting
run();

function run()
{
    console.log('running');
}

// named function assignament
let stand=function walk()
{
    console.log('walking');
}

// anonymous function assignment
let stand2=function()
{
    console.log('talking');
}
let jump=stand;
jump();
stand2();

let x=1;
x='a';
console.log(x);

// dyanamic function
function sum()
{
    let total=0;
    for(let value of arguments)
        total= total+value;
    return total;
}
let ans=sum(1,2,2);
console.log(ans);

// rest operator
function add(num,value,...args)  //1 and 2 value go in num and value args is an array with remaining values i.e 3,4,5,6
{
    console.log(args);
}
add(1,2,3,4,5,6);

// default parameters
function interest(p,r,y=5)
{
    return p*r*y/100;

}
console.log(interest(1000,8,undefined));

// getter and setter 
let person=
{
    fname:'piyush',
    lname:'babbar',
    get fullName()
    {
        return `${person.fname} ${person.name}`;
    },
    set fullName(value)
    {
        if(typeof value!==String)
        {
            throw new Error("you have not sent a string");
        }
        let parts=value.split('');
        this.fname=parts[0];
        this.lname=parts[1];

    }

};
person.fname='ravi';

console.log(person);


// try catch block
try
{
    // calling setter
    person.fullName='visahal';
}
catch(e)
{
    alert(e);
}

// reducing arrays
let arr=[10,20,30,40];
let totalsum= arr.reduce((accumulator,currentValue)=> accumulator+ currentValue,0);
console.log(totalsum);


