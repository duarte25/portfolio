/* eslint-disable react/no-unescaped-entities */
import styles from "./styles.module.css"
import { CgWebsite } from "react-icons/cg";
import { FiFigma } from "react-icons/fi";
import { BottomNavigation, BottomNavigationAction, Card, CardContent, CardMedia, Typography } from "@mui/material";
import * as React from 'react';
import Image from "next/image";

export default function Perfil() {

    return (
        <div className={styles.projects}>
            <div className={styles.titleProjects}>
                <h1>Projetos</h1>
                <h2>Aqui estão alguns dos projetos anteriores onde trabalhei.</h2>
            </div>
            <div className={styles.cards}>
                <Card className={styles.card}>
                    <CardMedia
                        className={styles.cardMediaCidades}
                        component="img"
                        image="/cidades.png"
                        alt="Cidades Inteligentes"
                    />
                    <CardContent className={styles.legendCard}>
                        <Typography className={styles.title} gutterBottom variant="h6" component="div">
                            Cidades Inteligentes Cerejeiras
                        </Typography>
                        <Typography className={styles.legend} variant="body2" color="#807f7f">
                            O projeto "Cidades Inteligentes de Cerejeiras" é uma iniciativa importante que visa modernizar a cidade de Cerejeiras com
                            tecnologia e inovação. A iniciativa inclui sistemas de controle de frota municipal, otimizando a gestão dos veículos públicos,
                            e um chat interativo para que a população solicite serviços aos órgãos públicos de maneira rápida e eficiente.
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
                        <Typography className={styles.title} gutterBottom variant="h6" component="div">
                            Seuusado.com
                        </Typography>
                        <Typography className={styles.legend} variant="body2" color="text.secondary">
                            SeuUsado.com é uma plataforma em construção, criada para facilitar a compra e
                            venda de veículos de todos os portes. O site, ainda em desenvolvimento, busca
                            conectar vendedores e compradores de maneira eficiente e segura.
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
                        image="/adat.png"
                        alt="Cidades Inteligentes"
                    />
                    <CardContent className={styles.legendCard}>
                        <Typography className={styles.title} gutterBottom variant="h6" component="div">
                            ADAT - Análise de Dados de Acidentes de Trânsito
                        </Typography>
                        <Typography className={styles.legend} variant="body2" color="text.secondary">
                            ADAT, uma plataforma transparente que oferece dados detalhados sobre
                            acidentes de trânsito no Brasil. Com um design inovador, você pode explorar e filtrar
                            informações de forma fácil e intuitiva.
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