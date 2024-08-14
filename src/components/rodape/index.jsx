/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import styles from "./styles.module.css"
import * as React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbBrandGmail } from "react-icons/tb";

export default function Rodape() {

    return (
        <div className={styles.rodape}>
            <div className={styles.icons}>
                <a href="https://github.com/duarte25" target="_blank"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/gustavo-duarte-46a229169/" target="_blank"><FaLinkedin /></a>
                <a href="mailto:duarte.guga2025@gmail.com" target="_blank"><TbBrandGmail /></a>
            </div>
            <hr className={styles.barra} />
            <img src="logo.svg" alt="logo" className={styles.logo} />
        </div>
    )
}