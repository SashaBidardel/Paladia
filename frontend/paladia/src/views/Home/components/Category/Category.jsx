import style from "./Category.module.css";
import CardImage from "./components/CardImage/CardImage.jsx";
import aventure from "../../../../assets/images/aventure.png";
import children from "../../../../assets/images/children.png";
import comic from "../../../../assets/images/comic.png";
import novel from "../../../../assets/images/novel.png";
import poetry from "../../../../assets/images/poetry.png";
import terror from "../../../../assets/images/terror.png";

export default function Category( props ){
  const { onHide, setFiltered } = props;

  return(
    <div className={style.container}>
      {/* <div className={style.title}>
        <h2>GÉNEROS</h2>
        <hr />
      </div> */}
      <div className={style.container_images}>
        <CardImage onHide={onHide} title="Aventura" image={aventure} setFiltered={setFiltered}/>
        <CardImage onHide={onHide} title="Infantil" image={children} setFiltered={setFiltered}/>
        <CardImage onHide={onHide} title="Comic" image={comic} setFiltered={setFiltered}/>
        <CardImage onHide={onHide} title="Novela" image={novel} setFiltered={setFiltered}/>
        <CardImage onHide={onHide} title="Poesía" image={poetry} setFiltered={setFiltered}/>
        <CardImage onHide={onHide} title="Terror" image={terror} setFiltered={setFiltered}/>
      </div>
    </div>
    
  );
}