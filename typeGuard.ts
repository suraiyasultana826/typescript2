type Alphaneumeric = string | number;
 const add = (param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric => {
    if(typeof param1 === 'number' && typeof param2 === "number"){
        return param1 + param2;
    } else {
        return param1.toString() + param2.toString();
    }
 };
 const result1 = add('2', '3');
 console.log(result1);

 //in guard 
 type NormalUSer = {
    name: string 
 }
 type AdminUser = {
    name: string;
    role: "admin";
 }

 const getUser = (user: NormalUSer | AdminUser) => {
    if('role' in user){
        console.log(`My name is ${user.name}  and my role is ${user.role}`);
    }else {
        console.log((`My name is ${user.name } `));
    }
 }

  const normalUser: NormalUSer = {
    name : "Mr. Normal bhai",
  };

  const adminUSer : AdminUser = {
    name: "Mr. Admin bhai",
    role: "admin",
  };
  getUser(adminUSer);


  //type guard using instance of

  class Animal {
    name: string;
    species: string;
    constructor (name: string, species: string){
        this.name = name;
        this.species = species;
    }
    makeSound(){
        console.log("I am making sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string){
        super(name, species);
    }
    makeBark(){
        console.log("I am barking");
    }
  }
  class Cat extends Animal {
    constructor(name: string, species: string){
        super(name, species);
    }
    makeMeaw(){
        console.log("I am mewing");
    }
  }
 const getAnimal = (animal:Animal) => {
    if( animal instanceof Dog){
        animal.makeBark()
    } else if(animal instanceof Cat){
        animal.makeMeaw();
    }else {
        animal.makeSound();
    }
   
 }
  const dog = new Dog("Dog bhai", 'dog');
  const cat = new Cat("Cat bhai", 'cat');

  getAnimal(dog);