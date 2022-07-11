// static = belongs to the class, not the objects
// properties:useful for caches, fixed-configuration
// methods:useful for utility functions

class Car{

    //property
    //insted of each car havinf a copy, the class has the copy so we use STATIC
    static numberOfCars = 0;

    constructor(model){
        this.model = model;
        Car.numberOfCars += 1;
    }
    static startRace(){
        console.log("3...2...1...GO!");
    }
}

const car1 = new Car("Mustang");
const car2 = new Car("Corvette");
const car3 = new Car("BMW");

console.log(Car.numberOfCars);

//belongs to class and not the objects of the class (car1,2,3)
Car.startRace();