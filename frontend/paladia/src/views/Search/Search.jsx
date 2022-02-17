import style from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function Search( props ){
  const { setSearchText } = props;
  const [ value, setValue ] = useState("");

  return(
    <div className={style.container}>
      <input 
        className={style.input} 
        placeholder="Buscar..."
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <button onClick={() => setSearchText(value)} className={style.icon}><FaSearch /></button>
    </div>
  );
}
