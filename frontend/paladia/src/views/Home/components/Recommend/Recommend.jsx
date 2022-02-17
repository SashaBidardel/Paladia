import classes from './Recommend.module.css'

import Card from '../../../Card/Card.jsx';
import { useEffect } from 'react';
import { useState } from 'react';

const Recommend = () => {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    const consumeAPI = async () => {
      fetch("https://paladia-api.herokuapp.com/api/v1/books")
      .then(json => json.json())
      .then(resul => {setData(resul); console.log(resul);});
    }
    consumeAPI();
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h2>RECOMENDADOS</h2>
        <hr />
      </div>
      <div className={classes.Cards}>
        {data?.length && <Card data={data[0]}/>}
        {data?.length && <Card data={data[1]}/>}
      </div>
    </div>
  )
}

export default Recommend;