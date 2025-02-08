function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  let user = makeUser();
  alert( user.ref.name ); // Error: Cannot read property 'name' of undefined,
 //Here the value of this inside makeUser() is undefined, because it is called as a function, not as a method with “dot” syntax.
 //correct one is this - ref: user.ref()