function fn(){
    console.log(this.person); //! rk
    console.log(this);   //! obj 
    function abc(){
        console.log(this);  //^ window
        console.log(this.person); // ^undefined
    }
    abc(); //&*  called like normal function so this will be window
}

let obj={
    person:"rk",
    func:fn
}
// obj.func();

//&*****************************************************************************************
//todo Soln -1 using bind method
//& bind is a method
//~ let ret=function1.bind(arg)    bind does not changes the original function  
//! bind method returns another function whose this is set equal to the arg passed in the bind

function fn(){
    console.log(this.person); //! rk
    console.log(this);   //! obj 
    function abc(){
        console.log(this); //~ obj
        console.log(this.person); //~ rk
    }

    let ret=abc.bind(this);
    ret(); //~ now this is set to obj


    // abc(); //&*  called like normal function so this will be window
}

let obj={
    person:"rk",
    func:fn
}
obj.func();


//~***************************************************************************************
//! soln 3 Arrow function
//~ this of arrow function is equal to its lexical superior this.

function fn(){
    console.log(this.person); //! rk
    console.log(this);   //! obj 
    let abc=()=>{
        console.log(this); //~ obj
        console.log(this.person); //~ rk
    }

    abc(); //&*  since arrow function therefore this is equal to outer this ie.OBJ
}

let obj={
    person:"rk",
    func:fn
}
obj.func();


let fn=()=>{
    console.log(this.person); //! window
    console.log(this);   //! undefined 
    let abc=()=>{
        console.log(this); //~ window
        console.log(this.person); //~ undefined
    }

    abc(); //&*  since arrow function therefore this is equal to outer this ie.OBJ
}

let obj={
    person:"rk",
    func:fn
}
obj.func();



