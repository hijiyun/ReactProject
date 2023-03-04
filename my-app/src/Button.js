import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Buttton({ text }) {
    return <button className={styles.btn}>{text}</button>;
}

Buttton.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Buttton;