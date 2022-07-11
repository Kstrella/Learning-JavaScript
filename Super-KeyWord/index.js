// super = Refers to the parent class. 
// Commonly used to invoke constructor of a parent class

class Animal{
  
  //this constructer is a SUPER because it is what is common for all the other 
  //constructors
  constructor(name, age){
      this.name = name;
      this.age = age;
  }
}
class Rabbit extends Animal{

  constructor(name, age, runSpeed){
      //you use super to refer to the constructor from animal that is shared with all the other classes
      super(name, age);
      this.runSpeed = runSpeed;
  }
}
class Fish extends Animal{

  constructor(name, age, swimSpeed){
      super(name, age);
      this.swimSpeed = swimSpeed;
  }
}
class Hawk extends Animal{

  constructor(name, age, flySpeed){
      super(name, age);
      this.flySpeed = flySpeed;
  }
}

const rabbit = new Rabbit("rabbit", 1, 40);
const fish = new Fish("fish", 2, 80);
const hawk = new Hawk("hawk", 3, 200);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);