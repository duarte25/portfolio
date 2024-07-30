import styles from "./styles.module.css"
import Image from "next/image";
import Avatar from '@mui/material/Avatar';

export default function Perfil() {
    return (
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
                <div className={styles.containerPerfil}>
                    <div className={styles.avatarWrapper}>
                        <Avatar className={styles.photoPerfil} variant="square">
                            <Image
                                className={styles.image}
                                src="/photo_perfil2.jpeg"
                                alt="Foto"
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center -8vh"
                            />
                        </Avatar>
                        <Image className={styles.square} src="/square.svg" alt="square" layout="fill" objectFit="contain" />
                        <Image className={styles.squarePoints} src="/avatar_perfil.svg" alt="Icon" layout="fill" objectFit="contain" />
                    </div>
                </div>
            </div>
        </div>
    )
}