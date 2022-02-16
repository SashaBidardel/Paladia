import style from "./Home.module.css";

export default function Home( props ){
  const { showHome, children } = props;

  return(
    <div className={`${style.container} ${showHome ? style.show : style.hide}`}>
      {children}
    </div>
  );
}