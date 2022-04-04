let arr=[1,2,3,4,5];
//! map function -> applies the given function to each element
//* Higher order functions -> either takes a function as argument or returns a function
let newArr=arr.map((ele)=>ele*2);
console.log(newArr);
console.log(arr); // original array unchanged

//! filter -> filters the element based on conditions  (higher order function)
let arr=["abcd","efgh","aaaaa","bbbbbb"];
let newArr=arr.filter((ele)=> ele.length>=5);
console.log(newArr);   // filters word whose length is gt than equal to 5;

//! reduce -> its retuns a value based on the given function
//? lot similar to accumulate function in c++
let arr=[1,2,3,4,5]; //  by default acc-> points to zeroth element and and cval points to element
 // ^ one by one starting from first index;
let sum=arr.reduce(function(acc,cval){
    return acc+cval;
})
console.log(sum);

//! Destructuring 
//& for Arrays
let names=["ab","cd","ef","gh"];
let [name1,name2,name3,name4]=names;
console.log(name1," ",name2," ",name2," ",name4);

let [name1, ,name3,name4] =names;
console.log(name1," "," ",name3," ",name4);  //^ skipping values

let [name1="default1",name2="default",name3="default"]=["Abc","def"];
console.log(name1+" "+name2+" "+name3);  //& undefined can be avoided by any default values

let a=3,b=4;
[a,b]=[b,a];
console.log(a,b);  // * swapping the values

//& Destructuring for objects
let obj={name:"abc",age:30,from:"earth"};

let {name,from,age}=obj;  // ^name of lhs should be same as keys in object order doesnt matter
console.log(name+" "+from+" "+age);  //^ it simply searches on the basis of keys

let {name,age,love,from}=obj;  // ! which is not key will get undefined value
console.log(name+" "+from+" "+age+" "+love);  

//! we can use alises also
let {name:a,age:currAge,from:place}=obj;
console.log(a+" "+currAge+" "+place);

// & nested - objects destructuring
let user={
    id:339,
    name:"fred",
    age:42,
    education:{
        degree:"Masters",
        school:{
            name:"magical",
            location:"magic-Land"
        }
    }
}

let {education}=user;
console.log(education);

let {education:{degree}}=user;
console.log(degree);

let {education:{school:{name,location}}}=user;
console.log(name,location);


//! Spread operator
let arr=[1,2,3,4,5,6,7,8];
let [fv,sv,...restOfArr]=arr;
console.log(fv,sv);
console.log(restOfArr);