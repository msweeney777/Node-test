const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');
});

it('should square a number', () => {
  var res = utils.square(11);

  expect(res).toBe(121).toBeA('number');
});

//should verify first and last names are set

it('should set firstName and lastName', () => {
  var user = {location: 'Gilford', age: 24};
  var res = utils.setName(user, 'Matt Sweeney');

  expect(res).toInclude({
    firstName: 'Matt',
    lastName: 'Sweeney'
  });
});

// it('should expect some values', () => {
//   //expect(12).toNotBe(11);
//   //expect({name: 'matt'}).toNotEqual({name: 'Matt'});
//   //expect([2,3,4]).toExclude(1);
//   expect({
//     name:'Matt',
//     age: 24,
//     location: 'Gilford'
//   }).toExclude({
//     age: 23
//   });
// });
