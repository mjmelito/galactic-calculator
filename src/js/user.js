export default class User {
  constructor(name, age,) {
    this.name = name;
    this.earthAge = age;
    this.mercuryAge = parseFloat((this.earthAge * .24).toFixed(2));
    this.venusAge = parseFloat((this.earthAge * .62).toFixed(2));
    this.marsAge = parseFloat((this.earthAge * 1.88).toFixed(2));
    this.jupiterAge = parseFloat((this.earthAge * 11.86).toFixed(2));
    this.saturnAge = parseFloat((this.earthAge * 29.48).toFixed(2));
    this.uranusAge = parseFloat((this.earthAge * 84.07).toFixed(2));
    this.neptuneAge = parseFloat((this.earthAge * 164.9).toFixed(2));
  }

    yearsUntil(birthday) {
      let futureYearDifference = birthday - this.earthAge;
      return futureYearDifference;
    }
}