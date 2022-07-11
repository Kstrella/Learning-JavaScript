// constructor = a special method of a class,
// accepts arguments and assigns properties

class Student{

//when we make a student object , it has what is in the constructor
// name,age,gpa
  constructor(name, age, gpa){
      this.name = name;
      this.age = age;
      this.gpa = gpa;
  }
  study(){
      console.log(`${this.name} is studying`);
  }
}

//with a constructor we can assign new students with attributes like the following
const student1 = new Student("Spongebob", 30, 3.2);
const student2 = new Student("Patrick", 35, 1.5);
const student3 = new Student("Sandy", 27, 4.0);

console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();

console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);
student2.study();

console.log(student3.name);
console.log(student3.age);
console.log(student3.gpa);
student3.study();