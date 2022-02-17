import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card.jsx";
import style from "./Filter.module.css";

export default function Filter( props ){
  const { showHome, filtered } = props
  const [ data, setData ] = useState([]);

  useEffect(() => {
    const consumeApi = async () => {
      fetch(`https://paladia-api.herokuapp.com/api/v1/books/${filtered}`)
      .then(json => json.json())
      .then(resul => setData(resul));
    }

    consumeApi();
  }, [ filtered ]);

  return(
    <div className={`${style.container} ${!showHome ? style.show : style.hide}`}>
      {data?.map(element => 
        <Card key={element.id} data={data}/>)}
    </div>
  );
}