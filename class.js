// class abc{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//         this.hobby="rk";
//     }

//     sayHii(){
//         console.log("hello");
//         // console.log(this.name);
//         console.log(this);
//     }

//     sayBye(){
//         console.log("Bye");
//     }
// }

// let obj=new abc("rk","NO one knows")
// // console.log(obj);  //! works fine everthing

// // let ret=obj.sayHii;// ? now we got reference of function so this should point to window
// // ret();  //^ but for classes by default "use strict is implicitly written by the compiler"
// //~ so value of this will be undefined and we willl get an error.

// let btn=document.querySelector("button");
// btn.addEventListener("click",obj.sayHii);
// //~ now this of the member function of class abc changes to button object


//!******************************************
// class abc{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//         this.hobby="rk";
//         this.sayHii=this.sayHii.bind(this);
//     }

//     sayHii(){
//         console.log("hello");
//         // console.log(this.name);
//         console.log(this);
//     }

//     sayBye(){
//         console.log("Bye");
//     }
// }

// //& solution using bind
// let obj=new abc("rk","NO one knows");
// let btn=document.querySelector("button");
// btn.addEventListener("click",obj.sayHii);
// //~ Now working fine


//~~******************************************
//! second solution using arrow function
class abc{
    constructor(name,age){
        this.name=name;
        this.age=age;
        this.hobby="rk";
        
    }

    sayHii=()=>{
        console.log("hello");
        // console.log(this.name);
        console.log(this);
    }

    sayBye(){
        console.log("Bye");
    }
}

let obj=new abc("rk","NO one knows");
let btn=document.querySelector("button");
btn.addEventListener("click",obj.sayHii);