import React from "react";
import styles from "./Footer.module.css";

const year = new Date().getFullYear();

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>All Rights Reserved | {year}</p>
        </footer>
    );
}
export default Footer;