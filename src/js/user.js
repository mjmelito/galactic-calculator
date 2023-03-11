export default class User {
  constructor(name, age,) {
    this.name = name;
    this.age = age;
    this.mercuryAge = parseFloat((this.age * .24).toFixed(2));
    this.venusAge = parseFloat((this.age * .62).toFixed(2));
    this.marsAge = parseFloat((this.age * 1.88).toFixed(2));
    this.jupiterAge = parseFloat((this.age * 11.86).toFixed(2));
    this.saturnAge = parseFloat((this.age * 29.48).toFixed(2));
    this.uranusAge = 0;
    this.neptuneAge = 0;
  }

}