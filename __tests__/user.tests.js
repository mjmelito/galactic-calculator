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
  })
})

