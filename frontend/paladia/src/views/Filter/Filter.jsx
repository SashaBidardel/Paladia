import { useState } from "react";
import { useEffect } from "react";
import style from "./Filter.module.css";

export default function Filter( props ){
  const { showHome, searchText, filtered } = props
  const [ data, setData ] = useState([]);

  useEffect(() => {
    const consumeApi = async () => {
      fetch(`${filtered}`)
      .then(json => json.json())
      .then(resul => setData(resul));
    }
  }, [ filtered ]);

  return(
    <div className={`${style.container} ${!showHome ? style.show : style.hide}`}>
      {}
    </div>
  );
}