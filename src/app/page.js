import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.perfil}>
        <div className={styles.blockLeft}>
          <h2>𝕲𝖚𝖘𝖙𝖆𝖛𝖔</h2>

          <div className={styles.description}>

            <h1>Desenvolvedor</h1>
            <h3>Viso transformar ideias inovadoras em soluções tecnológicas que simplifiquem a vida das pessoas.</h3>

            <div className={styles.topicPerfil}>
              <h4>Experiência abrangente em design UI/UX e no desenvolvimento completo de páginas web, desde a concepção inicial até a implementação final.</h4>
              <h4>Especializado em desenvolvimento back-end, com foco em criar soluções que atendem às necessidades dos clientes.</h4>
            </div>

          </div>
        </div>

        <div className={styles.blockRight}>
          <Image src="avatar_perfil.svg" alt="Icon" width={500} height={500} />
        </div>
      </div>
    </main>
  );
}
