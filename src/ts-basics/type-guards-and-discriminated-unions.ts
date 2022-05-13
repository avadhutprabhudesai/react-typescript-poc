/**
 * Type Guards
 *  - Built in
 *      - truthy/falsy
 *      - equality
 *      - typeof
 *      - instanceof
 *      - value in obj
 *      - built in functions
 *  - Custom
 *
 * Discriminated Unions
 *  - What are they and how to use them
 *  - How to use 'never' data type to exhaust conditionals for discriminated unions
 */

// Built in type guards
(function () {
  function guessType(
    val: string | boolean | number | any[] | Date | { name: string } | null
  ): void {
    if (val === null) {
      console.log('null');
    } else if (typeof val === 'string') {
      console.log('string');
    } else if (typeof val === 'number') {
      console.log('number');
    } else if (val instanceof Date) {
      console.log('Date');
    } else if (Array.isArray(val)) {
      console.log('Array');
    } else if (val) {
      console.log('Boolean');
    }
  }
  guessType([]);
})();

// Custom Typeguard
(function () {
  interface FreeUser {
    type: 'free';
    id: number;
    name: string;
  }

  interface PaidUser {
    type: 'paid';
    id: number;
    name: string;
    features: string[];
  }

  type User = FreeUser | PaidUser;

  function isPaidUser(user: User): user is PaidUser {
    return user.type === 'paid';
  }

  function getPremiumFeatures(user: User) {
    if (isPaidUser(user)) {
      console.log(user.features);
    } else {
      console.log('Free users are not entitled to premium features');
    }
  }

  getPremiumFeatures({
    type: 'paid',
    id: 1,
    name: 'John',
    features: ['HD', 'Multi Device support', '4k'],
  });
})();

// Discriminated unions and exhaustive conditionals
(function () {
  interface Circle {
    type: 'circ';
    rad: number;
  }
  interface Rectangle {
    type: 'rect';
    length: number;
    width: number;
  }
  interface Triangle {
    type: 'tri';
    base: number;
    height: number;
  }
  interface Square {
    type: 'sqr';
    length: number;
  }

  type Shape = Circle | Rectangle | Triangle | Square;

  function calcArea(shape: Shape): number {
    switch (shape.type) {
      case 'circ':
        return Math.PI * Math.pow(shape.rad, 2);
      case 'rect':
        return shape.length * shape.width;
      case 'tri':
        return (shape.height * shape.base) / 2;

      default:
        // eslint-disable-next-line no-case-declarations
        const s: never = shape;
        throw new Error(`Unsupported shape of type: ${s}`);
        break;
    }
  }

  try {
    console.log(
      calcArea({
        type: 'rect',
        length: 2,
        width: 2,
      })
    );
    console.log(
      calcArea({
        type: 'sqr',
        length: 2,
      })
    );
  } catch (error) {
    console.log(error);
  }
})();
