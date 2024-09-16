import styles from './Header.module.css'
import desafioLogo from '../assets/desafio-logo.svg'
import todoEscrita from '../assets/todo-escrita.svg'

export function Header() {
    return(
        <header className={styles.header}>
            <img src={desafioLogo} alt="logotipo desafio" />
            <img src={todoEscrita} alt="texto To Do" />
        </header>
    );
}