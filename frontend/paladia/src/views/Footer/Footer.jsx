import style from "./Footer.module.css";

export default function Footer(){
  return(
    <footer className={style.container}>
      <h4>© 2022</h4>
      
      <p className={style.rights}>Todos los derechos reservados</p>
    </footer>
  );
}