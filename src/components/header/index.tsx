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
          <li>Ínicio</li>
          <li>Sobre mim</li>
        </ul>
      </nav>

      <button className={styles.contactButton}>Entrar em Contato <Mail size={20}/></button>
    </header>
  )
}

export default Header;