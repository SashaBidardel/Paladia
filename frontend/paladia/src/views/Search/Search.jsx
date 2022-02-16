import style from "./Search.module.css";
import { FaSearch } from "react-icons/fa";

export default function Search(){
  return(
    <div className={style.container}>
      <input className={style.input} placeholder="Buscar..." type="text" />
      <button className={style.icon}><FaSearch /></button>
      <h1 className={style.title}>dakjsdakjsd</h1>
    </div>
  );
}