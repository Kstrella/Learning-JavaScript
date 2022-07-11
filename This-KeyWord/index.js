
// this = reference to a particular object the object depends on the immediate context

const car1 = {
    model:"Mustang",
    color:"red",
    year:2023,

    drive : function(){
      //if you just type model and not this.model you will get error
      //because it is in object you are currently in you have to use this
      //car1.model works too but this is prefered 
        console.log(`You drive the ${this.model}`);
    }
}


//using this outside on object, you will edit the window 
//console.log(this.name)  both are the same
//console.log(window.name)

const car2 = {
    model:"Corvette",
    color:"blue",
    year:2024,

    drive : function(){
        console.log(`You drive the ${this.model}`);
    }
}

car1.drive();
car2.drive();