import Container from "../Container";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <Container>
                <p>© 2026 Weather App</p>
            </Container>
        </footer>
    );
}

export default Footer;