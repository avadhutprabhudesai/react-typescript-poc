/**
 * Example of structural typing
 * Issue of literal objects with Interface and type
 */

//strctural typing
(function () {
  interface IUser {
    id: number;
    name: string;
  }
  interface IPerson {
    id: number;
    name: string;
  }

  const user: IUser = {
    id: 1,
    name: 'John',
  };

  /**
   * Since TS uses structural typing, it is perfectly ok with assigning object of IUser to object of IPerson as both types are structurally same
   */
  const person: IPerson = user;
})();

//issues with literal object
(function () {
  interface IUser {
    id: number;
    name: string;
  }

  /**
   * TS is not happy when a literal is assigned to IUser. But if we store it in a separate object and then assign it then it doesn't seem to complain
   */

  const another: IUser = {
    id: 1,
    name: 'John',
    city: 'Pune',
  };
  const obj = {
    id: 1,
    name: 'John',
    city: 'Pune',
  };

  const user: IUser = obj;

  /**
   * TS is happy when we are assigning output of UserFactory to IUser. It doesn't mind the extra 'email' prop
   * But as soon as we try to type the return value in EmployeeFactory, it throws an error
   * Weird behavior of TS
   */

  function UserFactory(id: number, name: string) {
    return {
      id,
      name,
      email: 'default',
    };
  }
  const u1: IUser = UserFactory(1, 'John');

  function EmployeeFactory(id: number, name: string): IUser {
    return {
      id,
      name,
      email: 'default',
    };
  }
})();
