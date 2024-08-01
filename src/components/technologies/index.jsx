/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import styles from "./styles.module.css"
import * as React from 'react';
import { FaGolang } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import Image from "next/image";
import { Card } from "@mui/material";
import { SiFramework } from "react-icons/si";
import { FaCode } from "react-icons/fa6";

import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiOpenstreetmap } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJest } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiPandas } from "react-icons/si";



export default function Technologies() {

    return (
        <div className={styles.technologies}>
            <div className={styles.title}>
                <h1>Minhas skills</h1>
            </div>
            <div className={styles.cards}>
                <Card className={`${styles.card} ${styles.cardLeft}`}>
                    <FaCode className={styles.iconTec} />
                    <div className={styles.linguagens}>
                        <h1>Linguagens</h1>
                        <h2>Eu curto criar coisas do zero e transformar ideias em realidade com Go e JavaScript.</h2>
                        <h3>JavaScript <IoLogoJavascript className={styles.iconJS} /> </h3>
                        <h3>GoLang <FaGolang className={styles.iconGolang} /></h3>
                    </div>
                </Card>
                <Card className={styles.card}>
                    <SiFramework className={styles.iconTec} />
                    <div className={styles.linguagens}>
                        <h1>Frameworks e Libs</h1>
                        <h2>Analiso onde cada framework ou biblioteca se encaixa para aproveitar suas habilidades específicas em cada projeto.</h2>
                        <div className={styles.frameworkLibs}>
                            <h3>React<FaReact style={{ color: "#4E7AB5", fontSize: "1.3vw" }} /> </h3>
                            <h3>Next.js <SiNextdotjs /></h3>
                            <h3>MUI <SiMui style={{color: "#4E7AB5", fontSize: "1vw"}}/></h3>
                            <h3>Charts <img src={"./iconGoogle.svg"} alt="Icon" style={{width: "1vw"}}/></h3>
                            <h3>Tailwind CSS <RiTailwindCssFill style={{color: "#4E7AB5", fontSize: "1.1vw"}}/></h3>
                            <h3>Open Street Map <img src={"./openstreetmap.svg"} alt="Icon" style={{width: "1vw"}}/></h3>
                            <h3>Node <FaNodeJs style={{color: "#388E3C", fontSize: "1.2vw"}}/></h3>
                            <h3>Jest <SiJest style={{color: "#99415B"}}/></h3>
                            <h3>Express <SiExpress /></h3>
                            <h3>Go-Gota <FaGolang className={styles.iconGolang}/></h3>
                            <h3>Go-Chi <img src={"./chi.svg"} alt="Icon" style={{width: "1.2vw"}}/></h3>
                            <h3>Pandas <img src={"./iconPandas.svg"} alt="Icon" style={{width: "1vw"}}/></h3>
                        </div>
                    </div>
                </Card>
                <Card className={`${styles.card} ${styles.cardRight}`}>
                    <FaCode className={styles.iconTec} />
                    <div className={styles.linguagens}>
                        <h1>Linguagens</h1>
                        <h2>Eu curto criar coisas do zero e transformar ideias em realidade com Go e JavaScript.</h2>
                        <h3>JavaScript <IoLogoJavascript /> </h3>
                        <h3>GoLang <FaGolang /></h3>
                    </div>
                </Card>

            </div>
        </div>
    )
}