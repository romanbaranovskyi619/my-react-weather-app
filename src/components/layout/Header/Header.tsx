import Container from "../Container";
import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <Container>
                <h1>Weather App</h1>
            </Container>
        </header>
    );
}

export default Header;
