/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import styles from "./styles.module.css"
import * as React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Rodape() {

    return (
        <div className={styles.rodape}>
            <h1>Gustavo Duarte</h1>
            <div className={styles.icons}>
                <a href="https://github.com/duarte25" target="_blank"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/gustavo-duarte-46a229169/" target="_blank"><FaLinkedin /></a>
            </div>
            <hr className={styles.barra} />
        </div>
    )
}