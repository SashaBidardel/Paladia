import style from "./Footer.module.css";

export default function Footer(){
  return(
    <footer className={style.container}>
      <p className={style.rights}>© 2022 Todos los derechos reservados</p>
    </footer>
  );
}