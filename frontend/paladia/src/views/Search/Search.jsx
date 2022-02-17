import style from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function Search( props ){
  const [ value, setValue ] = useState("");
  const { setSearchText, onHide } = props;

  return(
    <div className={style.container}>
      <input 
        className={style.input} 
        placeholder="Buscar..." 
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <button onClick={() => {setSearchText(value);onHide()}} className={style.icon}><FaSearch /></button>
    </div>
  );
}
