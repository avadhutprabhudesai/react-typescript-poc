/**
 * It is critical to understand tsconfig options related to strict checking
 * Without these we might as well use JS
 *
 * - noImplicitAny
 * - noImplicitThis
 * - strictNullChecks
 * - strictFunctionTypes
 */

// noImplicitAny
(function () {
  function getUsername(user: { name: string }) {
    return user.name;
  }

  // TS yells at me becase user arg can virtually accept any type available in TS and taking us back to JS land
  // Thanks to noImplicitAny flag we can rely on the fact that TS type system is working through entire app.
  function acceptUser(user) {
    return getUsername(user);
  }

  console.log(acceptUser('John'));
})();

// noImplicitThis
(function () {
  function getUsername(this: { name: string }) {
    return this.name;
  }

  const objOK = {
    name: 'John',
    getName: getUsername,
  };

  const objNotOK = {
    getName: getUsername,
  };

  console.log(objOK.getName());
  // TS yells at me saying 'this' of objNotOK is not compatible with 'this' of getUsername
  // Thanks to noImplicitThis flag
  console.log(objNotOK.getName());
})();

// strictNullChecks
(function () {
  type User = {
    id: number;
    name: string;
  };

  function printUser(user: User | null): void {
    // TS yells at me because I am accessing id and name on user without null check. Thanks to strictNullChecks flag
    console.log(`${user.id} --> ${user.name}`);
    if (user) {
      console.log(`${user.id} --> ${user.name}`);
    }
  }

  printUser(null);

  printUser({ id: 1, name: 'John' });
})();

// strictFunctionTypes
(function () {
  type NumericAdd = (x: number, y: number) => number;

  function add(x: string, y: string) {
    return x + y;
  }

  // TS yells at me because type NumericAdd has a differenct call signature than function add. Thanks to strictFuntionTypes flag
  const numAdd: NumericAdd = add;
})();
