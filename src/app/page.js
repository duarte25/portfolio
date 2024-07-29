import styles from './page.module.css';
import Perfil from '@/components/perfil';
import Projects from '@/components/projects'

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
        <h1>Technologies</h1>
      </div>
    </main>
  );
}
