import styles from './page.module.css';
import Perfil from '@/components/perfil';
import Projects from '@/components/projects'
import Rodape from '@/components/rodape';
import Technologies from '@/components/technologies';

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.perfil}>
          <Perfil />
      </div>
      <div className={styles.projects}>
        <Projects />
      </div>
      <div className={styles.technologies}>
        <Technologies />
      </div>
      <div className={styles.rodape}>
        <Rodape/>
      </div>
    </main>
  );
}
