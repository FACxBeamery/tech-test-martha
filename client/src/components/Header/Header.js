import React from "react";
import styles from "./Header.module.css";

const Title = () => {
    return <h1 className={styles["header"]}>Job Search Genie</h1>;
};
const Header = () => {
    return <Title />;
};

export default Header;
