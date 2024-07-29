/* eslint-disable react/no-unescaped-entities */
import styles from "./styles.module.css"
import { CgWebsite } from "react-icons/cg";
import { FiFigma } from "react-icons/fi";
import { BottomNavigation, BottomNavigationAction, Card, CardContent, CardMedia, Typography } from "@mui/material";
import * as React from 'react';

export default function Perfil() {

    return (
        <div className={styles.projects}>
            <h1>Projetos</h1>

            <div className={styles.cards}>
                <Card className={styles.card}>
                    <CardMedia
                        className={styles.cardMediaCidades}
                        component="img"
                        image="/cidades.png"
                        alt="Cidades Inteligentes"
                    />
                    <CardContent className={styles.legendCard}>
                        <Typography gutterBottom variant="h6" component="div">
                            Cidades Inteligentes Cerejeiras
                        </Typography>
                        <Typography variant="body2" color="#807f7f">
                            O projeto "Cidades Inteligentes de Cerejeiras" é uma iniciativa importante que visa modernizar a cidade de Cerejeiras com
                            tecnologia e inovação. A iniciativa inclui sistemas de controle de frota municipal, otimizando a gestão dos veículos públicos,
                            e um chat interativo para que a população solicite serviços aos órgãos públicos de maneira rápida e eficient
                        </Typography>
                    </CardContent>
                    <BottomNavigation className={styles.bottomNavigation}>
                        <BottomNavigationAction label="Web" icon={<CgWebsite />} className={styles.icon} />
                    </BottomNavigation>
                </Card>

                <Card className={styles.card}>
                    <CardMedia
                        className={styles.cardMediaSeuUsado}
                        component="img"
                        image="/seuusado.png"
                        alt="Cidades Inteligentes"
                    />
                    <CardContent className={styles.legendCard}>
                        <Typography gutterBottom variant="h6" component="div">
                            Seuusado.com
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>
                    <BottomNavigation className={styles.bottomNavigation}>
                        <BottomNavigationAction label="Web" icon={<CgWebsite />} className={styles.icon} />
                        <BottomNavigationAction label="Web" icon={<FiFigma />} className={styles.icon} />
                    </BottomNavigation>
                </Card>

                <Card className={styles.card}>
                    <CardMedia
                        className={styles.cardMediaSeuUsado}
                        component="img"
                        image="/seuusado.png"
                        alt="Cidades Inteligentes"
                    />
                    <CardContent className={styles.legendCard}>
                        <Typography gutterBottom variant="h6" component="div">
                            Seuusado.com
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>
                    <BottomNavigation className={styles.bottomNavigation}>
                        <BottomNavigationAction label="Web" icon={<CgWebsite />} className={styles.icon} />
                        <BottomNavigationAction label="Web" icon={<FiFigma />} className={styles.icon} />
                    </BottomNavigation>
                </Card>
            </div>
        </div>
    )
}