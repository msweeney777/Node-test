const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('Matt', 24);
    expect(spy).toHaveBeenCalledWith('Matt', 24);
  });

  it('should call saveUser with user object', () => {
    var email = 'msweeney777@gmail.com';
    var password = 'Trinity=3';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  })
});
