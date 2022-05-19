'use strict';

//constructor functions
const Person = function (firstName, birthYear) {
  //instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
/*
//1.New {} is created;
//2. function is called,this={}
//3. Linked to prototype
//4. function automatically return {}


//object   
const awais = new Person('Awais', 1994);
console.log(awais)

//static function
Person.hey = function() {
    console.log('hey there');
    console.log(this) //entire constructor function 
};
Person.hey();


//prototype inheritence 
Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
}


awais.calcAge()

//check
// console.log(awais.__proto__);
// console.log(awais.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(awais)) //true
// console.log(Person.prototype.isPrototypeOf(Person)); //False

//.prototypeOfLinkedObjects
Person.prototype.species = 'Homo Sapiens'; //ad property inside person prototype
// console.log(awais.species); //access person.prototype

// console.log(awais.hasOwnProperty('firstName'));
// console.log(awais.hasOwnProperty('species'));

// console.log(awais.__proto__);
//Object.prototype(top of prototype chain)
// console.log(awais.__proto__.__proto__);

console.dir(Person.prototype.constructor); //to Access orignal object

const arr = [3, 4, 5, 5, 3, 2, 4];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

Array.prototype.unique = function() {
        return [new Set(this)];
    }
    // console.log(arr.unique())
    */
////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
//class Declaration
//1. Classses are NOT hoisted
//1. Classses are NOT hoisted
//1. Classses are executed in strict mode

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Instance methods
  //Methods will be addes to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}
/*
    greet() {
        console.log(`Hey ${this.fullName}`)
    }


    //Set a property that already exist
    set fullName(name) {

        console.log(name);
        if (name.includes(' ')) this._fullName = name
        else alert(`${name} is not a full name!`)
    }
    get fullName() {
        return this._fullName;
    }

    //static method///////////////////////////////////
    //Not implemented on instances
    static hey() {
        console.log('hey bro')
        console.log('hey there');
        console.log(this) //entire constructor function 
    }
}
// const awaisg = new PersonCl('awais', 1965)
const rana = new PersonCl('rana awais', 1996)

rana.calcAge();
rana.greet()
PersonCl.hey();
// rana.fullName();*/

////////////////////////////////////////////////////////////////////////
//Inheritance Between "classes":Constructor Functions

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`my name is ${this.firstName} and I study ${this.course}`);
};
const awais = new Student('Awais', 1994, 'Computer Science');
awais.introduce();
awais.calcAge();
console.log(awais);
console.log(awais.__proto__); //prototype of child (student)
console.log(awais.__proto__.__proto__); //prototype of parent(Person)

//awais instansOf Student
//awais instansOf Person
//awais instansOf Object

//set constructor to Student
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
console.log(awais);

//////////////////////////////////////////////////////////////////////
//same with classes
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I Study ${this.course}`);
  }
  calcAge() {
    console.log(`I am ${2037 - this.birthYear}year old
        but as a student I feel more like ${2037 - this.birthYear + 10}`);
  }
}
const ahmad = new StudentCl('Ahmad', 1995, 'Computer Science');
ahmad.introduce();
ahmad.calcAge();
////////////////////////////////////////////////////
//class Example

// 1)public field
// 2)private field
// 3)public method
// 4)private method
class Account {
  // 1) Public fields (instances not on prototype)
  locale = navigator.language;
  // 2) private fields (instances not on prototype)
  #movements = []; //for private field use # with fields
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    //protected property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;
    console.log(`Thanks for opening an account,
         ${owner}`);
  }

  //public interface
  getMovements() {
    return this.#movements;
  }
  getPin() {
    return this.#pin;
  }
  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }
  _approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
    }
  }
}

const acc1 = new Account('Awais', 'EUR', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000); //Encapsolation
console.log(acc1);
// console.log(acc1.#pin);//private field are not accesible
console.log(acc1.getMovements());
console.log(acc1.getPin());
