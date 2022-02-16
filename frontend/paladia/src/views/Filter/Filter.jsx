import style from "./Filter.module.css";

export default function Filter( props ){
  const { showHome, searchText } = props

  return(
    <div className={`${style.container} ${!showHome ? style.show : style.hide}`}>
      <h1>SOY EL COMPONETE FILTER</h1>
    </div>
  );
}