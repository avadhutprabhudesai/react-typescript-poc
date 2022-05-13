import globalClassNames, { ClassNames as GlobalClassNames } from '..style.d';
declare const classNames: typeof globalClassNames & {
  readonly header: 'header';
};
export default classNames;
export type ClassNames = 'header' | GlobalClassNames;
