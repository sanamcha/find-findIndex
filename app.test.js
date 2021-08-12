
// For Question 1:
/* Question 1:
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/
describe("#findUserByUsername", function() {
  let users;
  beforeEach(function() {
    users = [
      { username: "mlewis" },
      { username: "akagen" },
      { username: "msmith" }
    ];
  });
  it("returns the object if the username matches the string passed", function() {
    expect(findUserByUsername(users, "akagen")).toEqual({ username: "akagen" });
  });
  it("returns undefined if a username is not found", function() {
    expect(findUserByUsername(users, 'taco')).toEqual(undefined);
  });
});


// For Question 2:
/*Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined 
*/

describe("#removeUser", function() {
  let users;
  beforeEach(function(){
      users = [
        { username: "mlewis" },
        { username: "akagen" },
        { username: "msmith" }
      ];
  })
  it("removes a user from an array", function() {
    removeUser(users, "mlewis");
    expect(users.length).toEqual(2)
    
  });
  it("returns the removed user", function() {
    expect(removeUser(users,"mlewis")).toEqual({ username: "mlewis" });
  });
  it("returns undefined a user from an array", function() {
    expect(removeUser(users, "taco")).toEqual(undefined);
    expect(users.length).toEqual(3);

  });
});
