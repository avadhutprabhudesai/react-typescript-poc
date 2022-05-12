import globalClassNames, { ClassNames as GlobalClassNames } from '..style.d';
declare const classNames: typeof globalClassNames & {
  readonly content: 'content';
  readonly tag: 'tag';
  readonly tag__header: 'tag__header';
  readonly tag__body: 'tag__body';
};
export default classNames;
export type ClassNames =
  | 'content'
  | 'tag'
  | 'tag__header'
  | 'tag__body'
  | GlobalClassNames;
