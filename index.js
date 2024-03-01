// First Challenge

const person = {
  id: 1138,
  name: "Random Person",
  age: 25,
  dob: "1999-5-03",
  gradesCompleted: [10, 11, 12],
  nestedObject: {
    nestedKey: "Nested Value",
  },
  "delete me": "This should be deleted",
};

console.log(
  `Person ${person.id} has been through grade ${person.gradesCompleted.length},  etc...`
);

console.log("Original Object:");
console.log(person);

delete person["delete me"];

console.log("Object after deleting 'delete me' key:");
console.log(person);

// Second Challenge

const user = {
  firstName: "Another",
  lastName: "Person",
  city: "Somewhere",
  semesters: {
    semesterOne: "incomplete",
    semesterTwo: "incomplete",
    semesterThree: "incomplete",
    semesterFour: "incomplete",
  },
};

user.semesters.semesterOne = "complete";
user.semesters.semesterTwo = "complete";

delete user.semesters.semesterFour;

user.favoriteLanguage = "JavaScript";

console.log("User Object:");
console.log(user);

// Third Challenge

class ArrayManipulator {
  constructor(array) {
    this.array = array;
    this.front = true;
  }

  method() {
    if (this.array.length === 0) {
      return undefined;
    }

    if (this.front) {
      this.front = false;
      return this.array.shift();
    } else {
      this.front = true;
      return this.array.pop();
    }
  }
}

const instance = new ArrayManipulator([1, 2, 3, 4, 5]);

console.log(instance.method());
console.log(instance.method());
console.log(instance.method());
console.log(instance.method());
console.log(instance.method());
console.log(instance.method());
