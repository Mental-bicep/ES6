class abc{
    constructor(name,age){
        this.name=name;
        this.age=age;
        this.hobby="rk";
    }

    sayHii(){
        console.log("hello");
        console.log(this.name);
    }

    sayBye(){
        console.log("Bye");
    }
}

let obj=new abc("rk","NO one knows")
console.log(obj);