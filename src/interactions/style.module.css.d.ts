import globalClassNames, { ClassNames as GlobalClassNames } from '..style.d';
declare const classNames: typeof globalClassNames & {
  readonly content: 'content';
};
export default classNames;
export type ClassNames = 'content' | GlobalClassNames;
