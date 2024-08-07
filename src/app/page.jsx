import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="containerGlobal">
      <div className={styles.containerTitulo}>
        <h1 className={styles.txtTitulo}>Aula Next</h1>
        <h2>Aprendendo Next</h2>
        <h3>Testando</h3>
        <p>Aprendendo Next</p>
      </div>  
    </div>
  );
}