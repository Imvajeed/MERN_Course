console.log("Script kiddie");

class Person{
    constructor(firstName){
        this.firstName = firstName;
    }
    walk(){
        console.log(`"${this.firstName} will start walking"`);
    }
}
let obj1 = new Person("Vajeed");
obj1.walk();
class Employe extends Person {
    constructor(firstName){
        super(firstName); 
    }
    work(){
        console.log(`${this.firstName} is a coder`);
    }
} 

let obj2 = new Employe("vajeed");

obj2.work();

