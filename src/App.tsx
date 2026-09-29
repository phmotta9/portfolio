import { useRef } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Disc,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MoveUp,
  User,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import {
  SiCplusplus,
  SiCss,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";

import { Header } from "./components/header";
import profileImage from "./assets/foto-portfolio.png";
import devCurrency from "./assets/devCurrency.png";
import filmHive from "./assets/filmHive.png";
import rmDiesel from "./assets/rmDiesel.png";
import linkHub from "./assets/linkHub.png"
import "./index.css";

const technologies = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "C++", icon: SiCplusplus, color: "#00599c" },
  { name: "Python", icon: SiPython, color: "#3776ab" },
  { name: "HTML", icon: SiHtml5, color: "#e34f26" },
  { name: "CSS", icon: SiCss, color: "#663399" },
];

const projects = [
  {
    title: "Link Hub",
    description: "Plataforma para criar perfis personalizados e reunir seus links em um só lugar.",
    tags: ["React", "TypeScript", "Firebase"],
    image: linkHub,
    githubUrl: "https://github.com/phmotta9/projeto-linktree",
    deployUrl: "",
  },
  {
    title: "Film Hive",
    description: "Plataforma para avaliar filmes e séries.",
    tags: ["React", "JavaScript", "TMDB API"],
    image: filmHive,
    githubUrl: "https://github.com/phmotta9/film-hive",
    deployUrl: "",
  },
  {
    title: "Dev Currency",
    description: "Projeto web para visualização de criptomoedas.",
    tags: ["React", "TypeScript", "CoinCap API"],
    image: devCurrency,
    githubUrl: "https://github.com/phmotta9/criptomoedas",
    deployUrl: "",
  },
  {
    title: "RM Diesel",
    description: "Meu primeiro projeto desenvolvido para uma mecânica.",
    tags: ["HTML", "CSS"],
    image: rmDiesel,
    githubUrl: "https://github.com/phmotta9/site-rm-diesel",
    deployUrl: "",
  },
  {
    title: "Próximo projeto",
    description: "Novas interfaces e aplicações estão em desenvolvimento.",
    tags: ["Em breve"],
    image: "",
    githubUrl: "",
    deployUrl: "",
  },
];

function downloadCV() {
  const link = document.createElement("a");
  link.href = "/curriculo.pdf";
  link.download = "curriculo-pedro-motta.pdf";
  link.click();
}

export default function App() {
  const techListRef = useRef<HTMLDivElement>(null);
  const projectListRef = useRef<HTMLDivElement>(null);

  function scrollTechList(direction: "left" | "right") {
    techListRef.current?.scrollBy({
      left: direction === "left" ? -180 : 180,
      behavior: "smooth",
    });
  }

  function scrollProjectList(direction: "left" | "right") {
    const projectList = projectListRef.current;

    if (!projectList) {
      return;
    }

    const maxScroll = projectList.scrollWidth - projectList.clientWidth;
    const isAtStart = projectList.scrollLeft <= 0;
    const isAtEnd = projectList.scrollLeft >= maxScroll - 5;

    if (direction === "right" && isAtEnd) {
      projectList.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    if (direction === "left" && isAtStart) {
      projectList.scrollTo({ left: maxScroll, behavior: "smooth" });
      return;
    }

    projectList.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  }

  return (
    <div className="App">
      <Header />

      <section className="home" id="home">
        <div className="content-home">
          <h2>
            <Disc size={8} fill="currentColor" strokeWidth={0} style={{ color: "#5eff00" }} />
            DISPONÍVEL PARA OPORTUNIDADES
          </h2>
          <h1 id="nome">Pedro Motta</h1>
          <h1 id="cargo">Software Engineer</h1>
          <p>
            Transformo ideias em aplicações modernas, performáticas e intuitivas.
            Apaixonado por criar experiências digitais incríveis.
          </p>

          <div className="buttons">
            <a className="projectsButton" href="#projects">
              Ver Projetos <ArrowRight size={20} />
            </a>
            <a className="contactButton" href="#contact">
              Entrar em Contato <Mail size={20} />
            </a>
          </div>

          <div className="social-icons">
            <a href="https://github.com/phmotta9" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/pedro-motta-1b5a41277/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:pedromotta135@gmail.com" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <img src={profileImage} alt="Foto de Pedro Motta" className="profile-image" />
      </section>

      <section className="about" id="about">
        <div className="content-about">
          <h2>SOBRE MIM</h2>
          <h1>Mais sobre mim</h1>
          <p>
            Sou estudante de Engenharia de Software e desenvolvedor full-stack. Gosto de transformar
            problemas complexos em soluções simples e elegantes.
            <br />
            <br />
            Atualmente focado em construir produtos escaláveis utilizando as melhores tecnologias do mercado.
          </p>

          <button onClick={downloadCV} className="contactButton" type="button">
            Baixar CV <Download size={20} />
          </button>
        </div>

        <div className="container-info">
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

          <div className="tech-stack">
            <h3>MINHAS TECNOLOGIAS</h3>
            <div className="tech-carousel">
              <button
                className="tech-arrow"
                type="button"
                aria-label="Rolar tecnologias para a esquerda"
                onClick={() => scrollTechList("left")}
              >
                <ChevronLeft size={18} />
              </button>

              <div className="tech-list" ref={techListRef}>
                {technologies.map(({ name, icon: Icon, color }) => (
                  <div className="tech-item" key={name}>
                    <Icon size={26} color={color} />
                    <span>{name}</span>
                  </div>
                ))}
              </div>

              <button
                className="tech-arrow"
                type="button"
                aria-label="Rolar tecnologias para a direita"
                onClick={() => scrollTechList("right")}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="projects-content">
          <div className="projects-header">
            <div>
              <h2>PROJETOS</h2>
              <h1>Meus projetos</h1>
            </div>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/phmotta9?tab=repositories"
              className="projects-link"
            >
              Ver todos os projetos <ArrowRight size={22} />
            </a>
          </div>

          <div className="projects-carousel">
            <button
              className="projects-arrow"
              type="button"
              aria-label="Rolar projetos para a esquerda"
              onClick={() => scrollProjectList("left")}
            >
              <ChevronLeft size={22} />
            </button>

            <div className="projects-grid" ref={projectListRef}>
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-preview">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`Preview do projeto ${project.title}`}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div className="preview-window">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    )}
                  </div>

                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <div className="project-actions">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Ver repositório do projeto ${project.title}`}
                        >
                          <FaGithub size={24} />
                        </a>
                      )}
                      {project.deployUrl ? (
                        <a
                          href={project.deployUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Abrir projeto ${project.title}`}
                        >
                          <ExternalLink size={24} />
                        </a>
                      ) : (
                        <span className="project-action-inert" aria-hidden="true">
                          <ExternalLink size={24} />
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <button
              className="projects-arrow"
              type="button"
              aria-label="Rolar projetos para a direita"
              onClick={() => scrollProjectList("right")}
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="footer-content">
          <div className="footer-contact">
            <div>
              <h2>Vamos construir algo incrível?</h2>
              <p>Estou sempre aberto a novas oportunidades e projetos. Vamos conversar!</p>
            </div>

            <div className="footer-actions">
              <a href="mailto:pedromotta135@gmail.com">
                <Mail size={18} />
                Enviar Email
              </a>
              <a href="https://www.linkedin.com/in/pedro-motta-1b5a41277/" target="_blank" rel="noreferrer">
                <FaLinkedin size={18} />
                LinkedIn
              </a>
              <a href="https://wa.me/5567998263314" target="_blank" rel="noreferrer">
                <FaWhatsapp size={18} />
                WhatsApp
              </a>
              <a href="https://github.com/phmotta9" target="_blank" rel="noreferrer">
                <FaGithub size={18} />
                GitHub
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <h2>PH<span>.</span></h2>
            <a href="#home" className="footer-top" aria-label="Voltar ao topo">
              <MoveUp size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
