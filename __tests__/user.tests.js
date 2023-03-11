import User from '../src/js/user.js';

describe('User', () => {
  let user1;

  beforeEach(() => {
    user1 = new User('Matt', 30);
  });

  test('should correctly create a user object with name, age, and 4 planetary age attributes', () => {
    expect(user1.name).toEqual('Matt');
    expect(user1.age).toEqual(30);
    expect(user1.mercuryAge).toEqual(7.2);
    expect(user1.venusAge).toEqual(0);
    expect(user1.marsAge).toEqual(0);
    expect(user1.jupiterAge).toEqual(0);
  });

})

