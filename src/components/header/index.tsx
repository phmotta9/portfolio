import styles from './header.module.css';
import { Mail } from "lucide-react";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>PH<span>.</span></h1>
      </div>

      <nav className={styles.nav}>
        <ul>
          <li><a href="#home">Início</a></li>
          <li><a href="#about">Sobre mim</a></li>
          <li><a href="#projects">Projetos</a></li>
        </ul>
      </nav>

      <a className={styles.contactButton} href="#contact">
        Entrar em Contato <Mail size={20}/>
      </a>
    </header>
  )
}

export default Header;
