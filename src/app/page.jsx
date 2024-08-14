import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="containerGlobal">
      <div className={styles.containerTitulo}>
        <h1 className={styles.txtTitulo}>Aula Next</h1>
        <h2 >Aprendendo Next</h2>
        <h3>Testando</h3>
        <p>Aprendendo Next</p>
        <div className="styles.containerImagem">
        <Image
          src="/avre.jpg"
          width={100}
          height={100}
          alt="Imagem de uma Avre"
          className={styles.imagemHome}
        />
        <Image
          src="/avre.jpg"
          width={500}
          height={500}
          alt="Imagem de uma Avre"
          className={styles.imagemHome}
        /> 
        </div>
      </div>  
    </div>
  );
}