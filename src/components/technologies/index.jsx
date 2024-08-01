/* eslint-disable react/no-unescaped-entities */
import styles from "./styles.module.css"
import * as React from 'react';
import { FaGolang } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import Image from "next/image";
import { Card } from "@mui/material";
import { SiGnometerminal } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa6";

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
                <FaLaptopCode className={styles.iconTec}/>
                <h1>Linguagens</h1>
                <h1>Ola!</h1>
            </Card>
        </div>
    )
}