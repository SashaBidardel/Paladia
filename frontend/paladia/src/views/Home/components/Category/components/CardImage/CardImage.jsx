import style from "./CardImage.module.css";

export default function Category( props ){
  const { title, image, onHide, setFiltered } = props;

  return(
    <div onClick={() => {onHide(false); setFiltered(title)}} className={style.container}>
      <div className={style.title}>{title}</div>
      <div className={style.effect}>{title}</div>
      <img className={style.image} src={image} alt=""/>
    </div>
  );
}