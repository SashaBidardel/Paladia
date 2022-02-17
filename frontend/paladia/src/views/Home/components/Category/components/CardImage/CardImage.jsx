import style from "./CardImage.module.css";

export default function Category( props ){
  const { title, image, onHide } = props;

  return(
    <div onClick={() => onHide(false)} className={style.container}>
      <div className={style.title}>{title}</div>
      <img className={style.image} src={image} alt=""/>
    </div>
  );
}