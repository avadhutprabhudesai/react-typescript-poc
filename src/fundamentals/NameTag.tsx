import style from './style.module.css';

type NameTagProps = {
  name: string;
  children?: ReactNode;
  style?: CSSProperties;
};

export default function NameTag(props: NameTagProps) {
  return (
    <div className={style.tag} style={props.style}>
      <div className={style.tag__header}>
        <h1>Hello</h1>
        <p>My name is</p>
      </div>
      <div className={style.tag__body}>
        <h2>{props.name}</h2>
        {props.children}
      </div>
    </div>
  );
}
