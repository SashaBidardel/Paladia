import classes from './Recommend.module.css'

import Card from '../../../Card/Card.jsx';

const Recommend = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h2>RECOMENDADOS</h2>
        <hr />
      </div>
      <div className={classes.Cards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Recommend;