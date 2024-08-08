/* eslint-disable react/no-unescaped-entities */
import styles from "./styles.module.css"
import { CgWebsite } from "react-icons/cg";
import { FiFigma } from "react-icons/fi";
import { BottomNavigation, BottomNavigationAction, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { GrInstagram } from "react-icons/gr";
import * as React from 'react';
import Image from "next/image";
import { FaGithub } from "react-icons/fa";


export default function Projects() {

    return (
        <div className={styles.projects}>
            <div className={styles.titleProjects}>
                <div>
                    <h1>Projetos</h1>
                    <h2>Aqui estão alguns dos projetos anteriores onde trabalhei.</h2>
                </div>
                <Image className={styles.planet} width={100} height={100} src="planet.svg" alt="Cloud" />
            </div>
            <div className={styles.cards}>
                <div className={styles.blocoCard}>
                    <Card className={styles.card}>
                        <CardMedia
                            className={styles.cardMediaCidades}
                            component="img"
                            image="cidades.png"
                            alt="Cidades Inteligentes"
                        />
                        <CardContent className={`${styles.legendCard} ${styles.legendCidadesInteligentes}`}>
                            <Typography className={styles.title} gutterBottom variant="h6" component="div">
                                Cidades Inteligentes 
                            </Typography>
                            <Typography className={styles.legend} variant="body2" color="#807f7f">
                                O projeto "Cidades Inteligentes de Cerejeiras" é uma iniciativa importante que visa modernizar a cidade de Cerejeiras com
                                tecnologia e inovação. A iniciativa inclui sistemas de controle de frota municipal, otimizando a gestão dos veículos públicos,
                                e um chat interativo para que a população solicite serviços aos órgãos públicos.
                            </Typography>
                        </CardContent>
                        <BottomNavigation className={styles.bottomNavigation}>
                            <BottomNavigationAction icon={<CgWebsite />} className={styles.icon} />
                            <BottomNavigationAction href="https://www.instagram.com/cidadesinteligentes.cerejeiras/" target="_blank" icon={<GrInstagram />} className={styles.icon} />
                        </BottomNavigation>
                    </Card>
                    <Card className={styles.card}>
                        <CardMedia
                            className={styles.cardMediaSeuUsado}
                            component="img"
                            image="seuusado.png"
                            alt="SeuUsado"
                        />
                        <CardContent className={styles.legendCard}>
                            <Typography className={styles.title} gutterBottom variant="h6" component="div">
                                Seuusado.com
                            </Typography>
                            <Typography className={styles.legend} variant="body2" color="#807f7f">
                                SeuUsado.com é uma plataforma em construção, criada para facilitar a compra e
                                venda de veículos de todos os portes. O site, ainda em desenvolvimento, busca
                                conectar vendedores e compradores de maneira eficiente e segura.
                            </Typography>
                        </CardContent>
                        <BottomNavigation className={styles.bottomNavigation}>
                            <BottomNavigationAction href="https://seuusado.com/" target="_blank" icon={<CgWebsite />} className={styles.icon} />
                            <BottomNavigationAction href="https://www.figma.com/proto/v4RPiAKX3uel5FaiupPvH0/seuUsado.com" target="_blank" icon={<FiFigma />} className={styles.icon} />
                        </BottomNavigation>
                    </Card>
                </div>

                <div className={styles.blocoCard}>
                    <Card className={styles.card}>
                        <CardMedia
                            className={styles.cardMediaSeuUsado}
                            component="img"
                            image="adat.png"
                            alt="ADAT"
                        />
                        <CardContent className={styles.legendCard}>
                            <Typography className={styles.title} gutterBottom variant="h6" component="div">
                                ADAT - Análise de Dados de Acidentes de Trânsito
                            </Typography>
                            <Typography className={styles.legend} variant="body2" color="#807f7f">
                                ADAT, uma plataforma transparente que oferece dados detalhados sobre
                                acidentes de trânsito no Brasil. Com um design inovador, você pode explorar e filtrar
                                informações de forma fácil e intuitiva.
                            </Typography>
                        </CardContent>
                        <BottomNavigation className={styles.bottomNavigation}>
                            <BottomNavigationAction href="https://github.com/duarte25/adat" target="_blank" icon={<FaGithub />} className={styles.icon} />
                            <BottomNavigationAction href="https://www.figma.com/proto/ZChblLGz6g4Qcz0nMW7UlQ/TCC-Gustavo?node-id=58-11&t=DrRHuYmyoNdE2pph-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=58%3A11&show-proto-sidebar=1" target="_blank" icon={<FiFigma />} className={styles.icon} />
                        </BottomNavigation>
                    </Card>

                    <Card className={styles.card}>
                        <CardMedia
                            className={styles.cardMediaSeuUsado}
                            component="img"
                            image="levantamento.svg"
                            alt="Cidades Inteligentes"
                            style={{ width: 200 }}
                        />
                        <CardContent className={styles.legendCard}>
                            <Typography className={styles.title} gutterBottom variant="h6" component="div">
                                Mobile Levantamento Patrimonial IFRO
                            </Typography>
                            <Typography className={styles.legend} variant="body2" color="text.secondary">
                                Levantamento Patrimonial, um aplicativo que facilita a consulta e o levantamento de informações
                                sobre o patrimônio do IFRO de forma intuitiva e acessível.
                            </Typography>
                        </CardContent>
                        <BottomNavigation className={styles.bottomNavigation}>
                            <BottomNavigationAction href="https://api-levantamento.app.fslab.dev/docs/" target="_blank" icon={<CgWebsite />} className={styles.icon} />
                            <BottomNavigationAction href="https://www.figma.com/proto/dhz0w3tJg13HKijbPizq5Y/Levantamento-de-Invent%C3%A1rio?node-id=1430-1563&t=eAzz6tDksQhtrmCf-1&scaling=scale-down&content-scaling=fixed&page-id=719%3A546&starting-point-node-id=1430%3A1563" target="_blank" icon={<FiFigma />} className={styles.icon} />
                        </BottomNavigation>
                    </Card>
                </div>
            </div>

        </div>
    )
}