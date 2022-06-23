// object -> group of key : value pair
// key : value -> property
// key : function -> method

let cap = {
    name : "Steve",
    lastName : "Rogers",
    address : {
        city : "Manhaten",
        state : "New York",
    }
    , age : 35,
    movies : ["First Avenger","Winter Soldier","Civil war"],
    sayHi : function(){
        console.log("cap says Hi");
    }
};

//get
console.log(cap.name);
console.log(cap.age);
console.log(cap.movies[1]);
cap.sayHi();

// set/update
console.log("cap:",cap);
cap.age=36;
cap.friends=["Tony","Bruce","Peter"];
console.log(- - - - - - - - - - -);
console.log("cap:",cap);

// delete
delete cap.address
console.log("cap:")