import style from "./Category.module.css";
import CardImage from "./components/CardImage/CardImage.jsx";
import aventure from "../../../../assets/images/aventure.png";
import children from "../../../../assets/images/children.png";
import comic from "../../../../assets/images/comic.png";
import novel from "../../../../assets/images/novel.png";
import poetry from "../../../../assets/images/poetry.png";
import terror from "../../../../assets/images/terror.png";

export default function Category(){
  return(
    <div className={style.container}>
      <CardImage title="Aventura" image={aventure}/>
      <CardImage title="Infantil" image={children}/>
      <CardImage title="Comic" image={comic}/>
      <CardImage title="Novela" image={novel}/>
      <CardImage title="Poesía" image={poetry}/>
      <CardImage title="Terror" image={terror}/>
    </div>
  );
}