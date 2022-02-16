import style from "./CardImage.module.css";

export default function Category( props ){
  const { title, image } = props;

  return(
    <div className={style.container}>
      <div className={style.title}>{title}</div>
      <img className={style.image} src={image} alt=""/>
    </div>
  );
}