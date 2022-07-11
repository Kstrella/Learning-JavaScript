// inheritance = a child class can inherit all the methods and properties from another class
//making class rabbit,fish,and hawk
//all the animals have to eat and sleep so we just make it that animals habve to eat and sleep
//we use extends animal for all the animal classes so we can use the methods in those other classes
//they can also have their own methods that arent shared 
//this saves us reapeting a lot of code , so we font have to add eat and sleep to every animal class


//what all classes have in common
class Animal{

    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{

    name = "rabbit";

    run(){
        console.log(`This ${this.name} is running`);
    }
}
class Fish extends Animal{

    name = "fish";

    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}
class Hawk extends Animal{

    name = "hawk";

    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

//new animal objects
const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();