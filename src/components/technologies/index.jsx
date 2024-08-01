/* eslint-disable react/no-unescaped-entities */
import styles from "./styles.module.css"
import * as React from 'react';
import { FaGolang } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import Image from "next/image";
import { Card } from "@mui/material";
import { SiGnometerminal } from "react-icons/si";
import { FaCode } from "react-icons/fa6";

export default function Technologies() {

    return (
        <div className={styles.technologies}>
            <div className={styles.title}>
                <h1>Minhas skills</h1>
            </div>

            <div className={styles.skills}>
                <h2>Linguagens</h2>
                <h3>JavaScript <RiJavascriptFill /> </h3>
                <h3>GoLang <FaGolang /></h3>
            </div>

            <SiGnometerminal />
            <Card className={styles.card}>
                <FaCode className={styles.iconTec} />

                <div className={styles.linguagens}>
                    <h2>Eu curto criar coisas do zero e transformar ideias em realidade com Go e JavaScript.</h2>
                    <h1>Linguagens</h1>
                    <h3>JavaScript <RiJavascriptFill /> </h3>
                    <h3>GoLang <FaGolang /></h3>
                </div>

            </Card>
        </div>
    )
}