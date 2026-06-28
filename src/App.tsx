import { Header } from './components/header'
import './index.css'
import { Mail } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Disc } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Download } from "lucide-react";
import { User } from "lucide-react";
import { GraduationCap } from "lucide-react";


export default function App() {
  return (
    <div className="App">
      <Header />

      <section className="home">
        <div className="content-home">
          <h2>  <Disc size={8} fill="currentColor" strokeWidth={0} style={{ color: "#5eff00" }} /> DISPONÍVEL PARA OPORTUNIDADES</h2>
          <h1 id='nome'>Pedro Motta</h1>
          <h1 id='cargo'>Software Engineer</h1>
          <p>Tranformo ideias em aplicações modernas,<br /> performáticas e intuitivas. Apaixonado por criar <br /> experiências digitais incríveis.</p>

          <div className="buttons">  
            <button className='projectsButton'>Ver Projetos <ArrowRight size={20}/></button>  <button className="contactButton">Entrar em Contato <Mail size={20}/></button>
          </div>  

          <div className="social-icons">
            <a
              href="https://github.com/phmotta9"
              target="_blank"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/pedro-motta-1b5a41277/"
              target="_blank"
            >
              <FaLinkedin size={24} />
            </a>

            <a 
              href="mailto:pedromotta135@gmail.com"
              target="_blank"
            >
              <Mail size={24} />
            </a>
          </div>
        </div> 
      </section>

      <section className="about">
        <div className="content-about">
          <h2>SOBRE MIM</h2>
          <h1>Mais sobre mim</h1>
          <p>Sou estudante de Engenharia de Software e desenvolvedor <br /> full-stack. Gosto de transformar problemas complexos em <br /> soluções simples e elegantes. <br /> <br />Atualmente focado em construir produtos escaláveis <br /> utilizando as melhores tecnologias do mercado.</p>

          <button className="contactButton">Baixar CV <Download size={20} /></button>
        </div>

        <div className="info-about">
          <div className="info-icons">
            <User size={45} />
            <GraduationCap size={45} />
            <Mail size={45} />
          </div>
          <div className="info-item">
            <h3>Nome</h3>
            <p>Pedro Henrique Motta Rodrigues</p>

            <h3>Formação</h3>
            <p>Engenharia de Software</p>

            <h3>Email</h3>
            <p>pedromotta135@gmail.com</p>
          </div>
        </div>
      </section>
    </div>
  )
}