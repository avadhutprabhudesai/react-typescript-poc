/**
 * - funtions
 *   - create
 *   - call
 *   - benefits of generics
 * - interfaces
 *   - create
 *   - use
 * - Branding and Type Tagging
 */

// generic functions
(function () {
  // create
  function head<T>(arr: T[]): T {
    return arr[0];
  }

  function merge<T, V>(obj1: T, obj2: V): T & V {
    return {
      ...obj1,
      ...obj2,
    };
  }

  interface User {
    id: number;
    name: string;
  }

  interface Employee {
    projects: string[];
  }

  // call
  const firstNum = head<number>([1, 2, 3, 4]);
  // benefits: TS knows that head returns a number when T is number so it can type check
  const u: User = head<number>([1, 2, 3, 4]);

  // Explicitly stating the generic type while calling the method has an effect on type of the result.
  // observe types of u1 and u2. u1 has type User and u2 has type {id: 1, name: 'John'}
  const u1 = head<User>([{ id: 1, name: 'John' }]);
  const u2 = head([{ id: 1, name: 'John' }]);

  const e = merge({ id: 1, name: 'John' }, { projects: ['JS', 'TS'] });
  console.log(e);
})();

// generic classes and interfaces
(function () {
  interface List<T> {
    add: (item: T) => void;
    remove: (item: T) => void;
  }

  class ArrayList<T> {
    add(item: T) {
      console.log(`adding item ${item} to the list`);
    }
    remove(item: T) {
      console.log(`removing item ${item} from the list`);
    }
  }

  const nums = new ArrayList<number>();

  nums.add(1);
  nums.add('hello');

  nums.remove(1);
  nums.remove(true);
})();

// Branding and Type Tagging
/**
 * Due to structural typing nature of TS, we cannot prevent users to use types with same structure interchangebly.
 * e.g. if there is a need to logically separate a primitive type into 2 entities, we need to create something called as 'Branding'
 * Branding is a technique through which we add a property to a type which uniquely identifies the logical entity
 * e.g. USD and INR both currencies are numbers but we can create a logical separation by adding another property with different values.
 * Now this property is available at compile time only and has no existence at runtime.
 * 
 * How do we add a property on primitives?
 *  We cannot. But we can take an intersection while declaring types.
 type USD = number & { __brand: 'USD' };
 what we say here is USD should hold a value which is both a number and has __brand property value set to 'USD'.
 There is no such value that exists. But we can make use of type assertion to create such a value.
 If I say, const a = 10 as USD
 We basically tell TS compiler that treat a = 10 as of type USD throughout the app at compile time.
 If anybody tries to assign a to another type such as INR, throw an error.
 This is all virtual concept.
 */
(function () {
  //for primitives
  type USD = number & { __brand: 'USD' };
  type INR = number & { __brand: 'INR' };

  function usdToInr(usd: USD): INR {
    return (usd * 70) as INR;
  }

  const salaryInINR: INR = usdToInr(100 as USD);

  type BRAND<T, V> = T & { __brand: V };

  type INTERVALID = BRAND<NodeJS.Timeout, 'INTERVAL'>;
  type TIMERID = BRAND<NodeJS.Timeout, 'TIMER'>;

  const timerId = setTimeout(() => {
    return 100;
  }, 100) as TIMERID;

  function clearIntervalById(id: INTERVALID) {
    clearInterval(id);
  }
  function clearTimeoutById(id: TIMERID) {
    clearTimeout(id);
  }

  clearTimeoutById(timerId);
  // TS yells as I am passing timerId to clearInterval function
  clearIntervalById(timerId);
})();
