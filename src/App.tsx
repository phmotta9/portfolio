import { Header } from './components/header'
import './index.css'
import { Mail } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function App() {
  return (
    <div className="App">
      <Header />

      <section className="home">
        <div className="content-home">
          <h1 id='nome'>Pedro Motta</h1>
          <h1 id='cargo'>Software Engineer</h1>
          <p>Tranformo ideias em aplicações modernas,<br /> performáticas e intuitivas. Apaixonado por criar <br /> experiências digitais incríveis.</p>

          <div className="buttons">  
            <button className='projectsButton'>Ver Projetos <ArrowRight size={20}/></button>  <button className="contactButton">Entrar em Contato <Mail size={20}/></button>
          </div>  
        </div> 
        
      </section>

      <section className="about">
      </section>
    </div>
  )
}