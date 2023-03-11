import User from '../src/js/user.js';

describe('User', () => {
  let user1;

  beforeEach(() => {
    user1 = new User('Matt', 30);
  });

  test('should correctly create a user object with name and age attributes', () => {
    expect(user1.name).toEqual('Matt');
    expect(user1.age).toEqual(30);
  });

  test('should correctly calculate users age in years on Mercury', () => {
    expect(user1.age).toEqual()
  })
})

