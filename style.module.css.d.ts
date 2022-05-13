import globalClassNames, {
  ClassNames as GlobalClassNames,
} from 'react-typescript-pocstyle.d';
declare const classNames: typeof globalClassNames & {
  readonly layout: 'layout';
  readonly layout__header: 'layout__header';
};
export default classNames;
export type ClassNames = 'layout' | 'layout__header' | GlobalClassNames;
