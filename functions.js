
function fn(){
    'use strict'
    console.log(this);
    //! when we write 'use strict' then the value of this pointer will be undefined when 
    //! the function will be called normally
    console.log(`hii my name is ${this.person}`);  //&* hii my name is undefined
}
 //! in functions the value of this depends upon how the function is called
 //& since the functions are binded at runtime

//  fn();
 //* when a function is called in default way then this is passed as window object.

let obj={
    person:"rk",
    func:fn
}
obj.func();  //! my name is rk will be printed since now this object is wrt to obj.

let newFn=obj.func;
newFn();  //! undefined

setTimeout(obj.func(),1000); //& rk will be printed
setTimeout(obj.func,1000); //& undefined will be printed
