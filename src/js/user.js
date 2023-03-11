export default class User {
  constructor(name, age,) {
    this.name = name;
    this.earthAge = age;
  }

  yearsUntil(futureBirthday) {
    let futureYearDifference = futureBirthday - this.earthAge;
    return futureYearDifference;
  }

  yearsSince(pastBirthday) {
    let pastYearDifference = this.earthAge - pastBirthday;
    return pastYearDifference;
  }

  mercuryYears() {
    const mercuryAge = parseFloat(((this.earthAge * 365) / 88).toFixed(2));
    return mercuryAge;
  }

  venusYears() {
    const venusAge = parseFloat(((this.earthAge * 365) / 225).toFixed(2));
    return venusAge;
  }
}