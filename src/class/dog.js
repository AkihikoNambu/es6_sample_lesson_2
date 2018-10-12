import Animal from './animal.js';

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  info() {
    // object destructuring
    const {
      name,
      breed,
      age,
    } = this
    const humanAge = this.getHumanAge();

    this.greet();
    console.log(`名前は${name}です`);
    console.log(`犬種は${breed}です`);
    console.log(`${age}歳です`);
    console.log(`人間年齢で${humanAge}歳です`);
  }

  getHumanAge() {
    return this.age * 7;
  }
}

export default Dog;
