//todo spread for arrays
let arr=[1,2,3,4,5];
console.log(...arr);  // !unpacks the element

let narr=arr;  //& arrays,functions and objects are made in heap memory for for them only their address 
narr[0]=100;   //& is fetched so it will lead to shallow copy
console.log(arr); //* change will be reflected in both the arrays

let narr=[...arr]; // ! it will make a deep copy
narr[0]=100;
console.log(arr);  //* change will not be reflected in original array

//^ insert element 100 at index 3
let idx=3;
let narr=[...arr.slice(0,idx) , 100 , ...arr.slice(idx)];
console.log(narr);

// &*********************************************************************************************** */

//todo spread for objects
let state={
    name:"abc",
    age:123,
    country:"India"
}

let temp=state; //& both objects will get affected since shallow copy is made due to heap memory
temp.age=10;

console.log(state);

let temp={...state};
temp.age=10;
console.log(state);  //! deep copy is made both objects will not get affected


let obj={
    name:"abc",
    add:{
        city:"New York",
        country:{
            countryName:"America",
            countryCode:"USA"
        }
    }
}

let copy={...obj};   //! again outer most objects will undergo deep copy and inner objects will 
copy.add.city="London";  //! undergo shallow copy
console.log(obj);   //& both the objects will be changed
console.log(copy);

let copy={...obj,add:{...obj.add,country:{...obj.add.country}}};
copy.add.city="LONDON";  //! fully DEEP copy 
copy.add.country.countryName="United Kingdom";
copy.add.country.countryCode="UK"; //! both objects are different

console.log(obj);
console.log(copy);


let copy=JSON.parse(JSON.stringify(obj)); //& easier method to make a new deep copy
copy.add.city="LONDON";  //! fully DEEP copy 
copy.add.country.countryName="United Kingdom";
copy.add.country.countryCode="UK"; //! both objects are different

console.log(obj);
console.log(copy);


