import User from '../src/js/user.js';

describe('User', () => {
  let user1;

  beforeEach(() => {
    user1 = new User('Matt', 30);
  });

  test('should correctly create a user object with name, age, and 4 planetary age attributes', () => {
    expect(user1.name).toEqual('Matt');
    expect(user1.earthAge).toEqual(30);
    expect(user1.mercuryAge).toEqual(7.2);
    expect(user1.venusAge).toEqual(18.6);
    expect(user1.marsAge).toEqual(56.4);
    expect(user1.jupiterAge).toEqual(355.8);
    expect(user1.saturnAge).toEqual(884.4);
    expect(user1.uranusAge).toEqual(2522.1);
    expect(user1.neptuneAge).toEqual(4947);
  });

  test('should calculate how many years until a specific user birthday', () => {
    expect(user1.yearsUntil(40)).toEqual(10);
  });

  test('should calculate how many years have passed since a specific user birthday', () => {
    expect(user1.yearsSince(25)).toEqual(5);
  });
})

