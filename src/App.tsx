import { useState } from 'react'
import './App.css'
import Lightning from './Backgrounds/Lightning/Lightning'
import ProfileCard from './Components/ProfileCard/ProfileCard'
import GradientText from './TextAnimations/GradientText/GradientText'
import RotatingText from './TextAnimations/RotatingText/RotatingText'
import LogoLoop from './Animations/LogoLoop/LogoLoop'
import Sidebar from './Components/Sidebar/Sidebar'
import ContactModal from './Components/ContactModal/ContactModal'
import Footer from './Components/Footer/Footer'
import SocialButtons from './Components/SocialButtons/SocialButtons'

import {
  SiReact,
  SiAngular,
  SiJavascript,
  SiMysql,
  SiDotnet,
  SiPython,
  SiCss3,
  SiHtml5,
  SiDocker,
  SiGithub
} from 'react-icons/si'
import { BiData } from 'react-icons/bi'
import { FaJava } from 'react-icons/fa'

const techLogos = [
  { node: <FaJava />, title: "Java", href: "https://www.java.com" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiAngular />, title: "Angular", href: "https://angular.io" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <BiData />, title: "SQL Server", href: "https://www.microsoft.com/en-us/sql-server" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiDotnet />, title: "C#", href: "https://dotnet.microsoft.com" },
  { node: <SiPython />, title: "Python", href: "https://python.org" },
  { node: <SiCss3 />, title: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiHtml5 />, title: "HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
];

import ProjectCard from './Components/ProjectCard/ProjectCard';

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "Panel de administración completo con gráficos en tiempo real, gestión de inventario y análisis de ventas.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Chart.js", "Tailwind"],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "Task Management App",
    description: "Aplicación de gestión de tareas colaborativa con actualizaciones en tiempo real y sistema de notificaciones.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2372&auto=format&fit=crop",
    tags: ["Next.js", "Node.js", "Socket.io", "MongoDB"],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "AI Image Generator",
    description: "Interfaz moderna para generación de imágenes utilizando modelos de IA, con galería y opciones de edición.",
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=2370&auto=format&fit=crop",
    tags: ["React", "OpenAI API", "Three.js", "Vite"],
    links: {
      demo: "#",
      github: "#"
    }
  }
];


const sidebarNavItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Skills", href: "#skills" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app-container">

      {/* Sidebar con Logo y Navegación GooeyNav */}
      <Sidebar navItems={sidebarNavItems} />

      <div className="background-layer">
        <Lightning
          hue={220}
          xOffset={0}
          speed={1}
          intensity={1}
          size={1}
        />
      </div>

      <div className="content-layer">
        {/* Sección Inicio - Hero con nombre y card */}
        <section id="inicio" className="hero-two-column">
          <div className="hero-left">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
            >
              Marx Cuadros
            </GradientText>
            <h2 className="hero-subtitle">Software Developer</h2>
            <div className="hero-description">
              <RotatingText
                texts={[
                  "Transformando ideas en código",
                  "Transformando conceptos en realidad",
                  "Transformando visiones en aplicaciones",
                  "Transformando desafíos en soluciones"
                ]}
                rotationInterval={3000}
                staggerDuration={0.025}
                staggerFrom="first"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                mainClassName="rotating-text-container"
                splitLevelClassName="rotating-text-word"
                elementLevelClassName="rotating-text-char"
              />
            </div>
            <SocialButtons
              githubUrl="https://github.com/marxcuadros24-png"
              linkedinUrl="https://www.linkedin.com/in/marx-laurof-cuadros-flores-893917388/"
              cvUrl="/Marx_Cuadros_CV.pdf"
            />
          </div>

          <div className="hero-right">
            <ProfileCard
              name="Marx Cuadros"
              title="Software Developer"
              handle="Marx_incode"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/tu-foto.jpg"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked')}
            />
          </div>
        </section>

        {/* Sección About Me */}
        <section id="sobre-mi" className="about-section">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
          >
            Sobre Mí
          </GradientText>
          <div className="about-content">
            <div className="about-text">
              <p className="about-intro">
                Soy un desarrollador web que disfruta convertir ideas en experiencias digitales con propósito. Me gusta crear interfaces claras, soluciones inteligentes y productos que se sientan tan bien como funcionan.
              </p>
              <p className="about-description">
                Siempre estoy aprendiendo, mejorando y buscando la mejor forma de llevar una idea del concepto a la realidad.
              </p>

            </div>
          </div>
        </section>

        {/* Sección de tecnologías */}
        <div className="tech-section" id="skills">
          <h2 className="tech-title">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
            >
              Skills
            </GradientText>
          </h2>
          <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
            <LogoLoop
              logos={techLogos}
              speed={80}
              direction="left"
              logoHeight={96}
              gap={100}
              hoverSpeed={20}
              scaleOnHover
              fadeOut
              fadeOutColor="#000000"
              ariaLabel="Skills"
            />
          </div>
        </div>

        {/* Sección de proyectos - placeholder */}
        <div className="projects-section" id="proyectos">
          <div className="section-header">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
            >
              Proyectos
            </GradientText>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                links={project.links}
              />
            ))}
          </div>
        </div>

        {/* Sección de contacto */}
        <div className="contact-section" id="contacto">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
          >
            Contáctame
          </GradientText>

          <p className="contact-description">
            ¿Tienes un proyecto en mente o quieres colaborar? ¡Me encantaría saber de ti!
          </p>

          <button className="contact-cta-button" onClick={() => setIsModalOpen(true)}>
            <span className="button-text">Enviar Mensaje</span>
            <span className="button-shine"></span>
          </button>
        </div>

        {/* Footer */}
        <Footer />
      </div>

      {/* Modal de Contacto */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default App