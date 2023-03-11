export default class User {
  constructor(name, age,) {
    this.name = name;
    this.earthAge = age;
  }

  mercuryYears(earthYears) {
    const mercuryAge = parseFloat(((earthYears * 365) / 88).toFixed(2));
    return mercuryAge;
  }

  venusYears(earthYears) {
    const venusAge = parseFloat(((earthYears * 365) / 225).toFixed(2));
    return venusAge;
  }

  marsYears(earthYears) {
    const marsAge = parseFloat(((earthYears * 365) / 687).toFixed(2));
    return marsAge;
  }

  jupiterYears(earthYears) {
    const jupiterAge = parseFloat(((earthYears * 365) / 4307).toFixed(2));
    return jupiterAge;
  }

  yearsUntil(futureBirthday) {
    let futureYearDifference = futureBirthday - this.earthAge;
    return futureYearDifference;
  }

  yearsSince(pastBirthday) {
    let pastYearDifference = this.earthAge - pastBirthday;
    return pastYearDifference;
  }
}