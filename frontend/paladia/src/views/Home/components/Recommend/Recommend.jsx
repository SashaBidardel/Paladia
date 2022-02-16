import classes from './Recommend.module.css'

import Card from '../../../Card/Card.jsx';

const Recommend = () => {
  return (
    <div className={classes.Cards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
  )
}

export default Recommend;