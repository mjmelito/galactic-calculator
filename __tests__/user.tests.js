import User from '../src/js/user.js';

describe('User', () => {
  let user1;

  beforeEach(() => {
    user1 = new User('Matt', 30);
  });

  test('should correctly create a user object with name and age', () => {
    expect(user1.name).toEqual('Matt');
    expect(user1.earthAge).toEqual(30);
  });

  test('should calculate how many years until a specific user birthday', () => {
    expect(user1.yearsUntil(40)).toEqual(10);
  });

  test('should calculate how many years have passed since a specific user birthday', () => {
    expect(user1.yearsSince(25)).toEqual(5);
  });

  test('should return age in mercury years', () => {
    expect(user1.mercuryYears(user1.earthAge)).toEqual(124.43);
  });

  test('should return age in venus years', () => {
    expect(user1.venusYears(user1.earthAge)).toEqual(48.67);
  });

  test('should return age in mars years', () => {
    expect(user1.marsYears(user1.earthAge)).toEqual(15.94);
  });

  test('should return age in jupiter years', () => {
    expect(user1.jupiterYears(user1.earthAge)).toEqual(2.54);
  });

  test('should calculate years until future birthday in planet years', () => {
    expect(user1.mercuryYears(user1.yearsUntil(40))).toEqual(41.48);
    expect(user1.venusYears(user1.yearsUntil(40))).toEqual(16.22);
    expect(user1.marsYears(user1.yearsUntil(40))).toEqual(5.31);
    expect(user1.jupiterYears(user1.yearsUntil(40))).toEqual(0.85);
  });

  test('should calculate years since past birthday in planet years', () => {
    expect(user1.mercuryYears(user1.yearsSince(25))).toEqual(20.74);
    expect(user1.venusYears(user1.yearsSince(25))).toEqual(8.11);
    expect(user1.marsYears(user1.yearsSince(25))).toEqual(2.66);
    expect(user1.jupiterYears(user1.yearsSince(25))).toEqual(0.42);
  });
})

