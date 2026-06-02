import { useEffect, useRef } from 'react';

const profile = {
  name: 'Josué García',
  role: 'Desarrollador Jr. con base full-stack',
  location: 'Guatemala',
  email: 'josuegarcia5626@gmail.com',
  phone: '+502 5586-6322',
  github: 'https://github.com/zoomjosue',
};

const projects = [
  {
    name: 'Mundial 2010 - Back-end',
    type: 'API REST / Back-end',
    repo: 'https://github.com/zoomjosue/mundial2010-backend',
    summary:
      'Servicio back-end para modelar informacion del Mundial 2010 y exponerla mediante endpoints que son consumibles por un front-end.',
    evidence: ['Diseño de rutas REST', 'Separacion entre servidor y cliente', 'Base para entorno dockerizado'],
    stack: ['Node.js', 'API REST', 'Docker'],
  },
  {
    name: 'Mundial 2010 - Front-end',
    type: 'SPA / Consumo de API',
    repo: 'https://github.com/zoomjosue/mundial2010-frontend',
    summary:
      'Interfaz web conectada al back-end del Mundial 2010, enfocada en consumo de datos, estados de carga y navegacion.',
    evidence: ['React como capa de UI', 'Consumo asincrono de datos', 'Separacion por componentes'],
    stack: ['React', 'JavaScript', 'CSS'],
  },
  {
    name: 'E-commerce',
    type: 'Producto web',
    repo: 'https://github.com/zoomjosue/E-commerce',
    summary:
      'Proyecto de tienda en linea orientado a catalogo, flujo de compra y organizacion de componentes reutilizables.',
    evidence: ['UI responsiva', 'Modelado de productos'],
    stack: ['React', 'JavaScript', 'CSS'],
  },
  {
    name: 'Ejercicio 4 React',
    type: 'Practica React',
    repo: 'https://github.com/zoomjosue/Ejercicio4-React',
    summary:
      'Ejercicio enfocado en fundamentos de React: componentes, props, estado y renderizado declarativo.',
    evidence: ['Composicion de componentes', 'Estado local', 'Base para SPAs modernas'],
    stack: ['React', 'Vite', 'CSS'],
  },
  {
    name: 'Snake Game',
    type: 'Juego web',
    repo: 'https://github.com/zoomjosue/Snake-Game',
    summary:
      'Juego clasico implementado para practicar logica, eventos de teclado, actualizacion de estado y renderizado dinamico.',
    evidence: ['Logica interactiva', 'Manejo de eventos', 'Ciclo de actualizacion'],
    stack: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    name: 'Calculadora',
    type: 'Herramienta UI',
    repo: 'https://github.com/zoomjosue/Calculadora',
    summary:
      'Calculadora web para practicar estructura semantica, control de entradas y operaciones desde la interfaz.',
    evidence: ['HTML semantico', 'CSS organizado', 'Logica de operaciones'],
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
];

const stackChoices = [
  {
    title: 'React + Vite',
    text: 'Usado en Ejercicio 4 React y en los proyectos front-end para crear interfaces por componentes, manejar estado local y tener un entorno de desarrollo rapido.',
  },
  {
    title: 'Node.js + APIs REST',
    text: 'Usado en Mundial 2010 back-end para separar la logica del servidor del front-end y exponer datos mediante endpoints consumibles.',
  },
  {
    title: 'HTML + CSS + JavaScript',
    text: 'Usado en Calculadora y Snake Game para practicar estructura semantica, estilos responsivos, eventos del navegador y logica interactiva.',
  },
  {
    title: 'Docker + GitHub',
    text: 'Usado para documentar, publicar y preparar proyectos reproducibles, especialmente cuando el front-end y back-end deben levantarse como servicios separados.',
  },
];

function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrame = 0;
    let width = 0;
    let height = 0;

    const nodes = [
      { x: 0.18, y: 0.3, label: 'React' },
      { x: 0.5, y: 0.2, label: 'REST' },
      { x: 0.78, y: 0.34, label: 'Docker' },
      { x: 0.26, y: 0.72, label: 'Git' },
      { x: 0.62, y: 0.68, label: 'Build' },
    ];
    const packetRoute = [0, 1, 2, 4, 3, 0, 2, 3, 1, 4, 0];

    function resize() {
      const rect = canvas.getBoundingClientRect();
      const pixelRatio = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    }

    function draw(time) {
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#0f172a');
      gradient.addColorStop(0.55, '#111827');
      gradient.addColorStop(1, '#151515');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = 'rgba(94, 234, 212, 0.2)';
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const from = nodes[i];
          const to = nodes[j];
          ctx.beginPath();
          ctx.moveTo(from.x * width, from.y * height);
          ctx.lineTo(to.x * width, to.y * height);
          ctx.stroke();
        }
      }

      nodes.forEach((node, index) => {
        const x = node.x * width;
        const y = node.y * height;
        const pulse = Math.sin(time / 650 + index) * 4;

        ctx.beginPath();
        ctx.arc(x, y, 35 + pulse, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(20, 184, 166, 0.09)';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, 22, 0, Math.PI * 2);
        ctx.fillStyle = '#111827';
        ctx.fill();
        ctx.strokeStyle = 'rgba(94, 234, 212, 0.75)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = '#e5e7eb';
        ctx.font = '600 12px Inter, system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.label, x, y);
      });

      const routeProgress = (time / 720) % (packetRoute.length - 1);
      const routeIndex = Math.floor(routeProgress);
      const segmentProgress = routeProgress - routeIndex;
      const start = nodes[packetRoute[routeIndex]];
      const end = nodes[packetRoute[routeIndex + 1]];
      const ease = segmentProgress * segmentProgress * (3 - 2 * segmentProgress);
      const packetX = (start.x + (end.x - start.x) * ease) * width;
      const packetY = (start.y + (end.y - start.y) * ease) * height;

      ctx.beginPath();
      ctx.arc(packetX, packetY, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#f59e0b';
      ctx.fill();

      animationFrame = requestAnimationFrame(draw);
    }

    resize();
    animationFrame = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" aria-label="Visualizacion animada de arquitectura web" />;
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="section-header">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card featured-project">
      <div className="project-card__top">
        <span>{project.type}</span>
        <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`Abrir repositorio de ${project.name}`}>
          GitHub
        </a>
      </div>
      <h3>{project.name}</h3>
      <p>{project.summary}</p>
      <ul className="evidence-list">
        {project.evidence.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="tag-row" aria-label={`Tecnologias de ${project.name}`}>
        {project.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </article>
  );
}

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <span>JG</span>
          Portafolio Pixelworks
        </a>
        <nav aria-label="Navegacion principal">
          <a href="#sobre-mi">Sobre mi</a>
          <a href="#tecnologias">Tecnologías</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <section className="hero-section" id="inicio">
        <div className="hero-copy">
          <span className="eyebrow">Aplicación laboral para Pixelworks</span>
          <h1>{profile.name}</h1>
          <p className="hero-role">{profile.role}</p>
          <p>
            Construyo interfaces web con criterio técnico: componentes claros, consumo de APIs, estados de carga y
            error, repositorios ordenados y decisiones con bases fuertes.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#proyectos">
              Ver proyectos
            </a>
            <a className="button button-secondary" href={profile.github} target="_blank" rel="noreferrer">
              GitHub publico
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <HeroCanvas />
          <div className="metric-strip" aria-label="Resumen tecnico">
            <span>6 proyectos</span>
            <span>React</span>
            <span>REST</span>
            <span>Docker</span>
          </div>
        </div>
      </section>

      <section className="section-band about-grid" id="sobre-mi">
        <SectionHeader
          eyebrow="Sobre mi"
          title="Perfil orientado a producto web"
          text="Soy estudiante/desarrollador en formacion con interes en construir aplicaciones utiles, entendibles y faciles de mantener."
        />
        <div className="about-panel">
          <p>
            Mi formación se concentro en los fundamentos de programación, JavaScript, React, HTML, CSS, trabajo con
            terminal y organización de proyectos en GitHub. Para este portafolio priorice evidenciar el proceso tecnico,
            proyectos que separan front-end y back-end, donde hay consumo de APIs y el por que del stack elegido en cada proyecto.
          </p>
          <dl className="contact-list">
            <div>
              <dt>Ubicación</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Correo</dt>
              <dd>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </dd>
            </div>
            <div>
              <dt>GitHub</dt>
              <dd>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  github.com/zoomjosue
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section-band" id="tecnologias">
        <SectionHeader
          eyebrow="Tecnologías utilizadas"
          title="Tecnologías aplicadas en mis proyectos"
          text="Estas son las herramientas usadas en los repositorios del portafolio y el motivo por el que fueron útiles en cada caso."
        />
        <div className="stack-grid">
          {stackChoices.map((choice) => (
            <article className="stack-card" key={choice.title}>
              <h3>{choice.title}</h3>
              <p>{choice.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-band" id="proyectos">
        <SectionHeader
          eyebrow="Proyectos"
          title="Trabajo publicado y revisable"
          text="Cada proyecto incluye el enlace al repositorio publico y una explicación de que demuestra tecnicamente."
        />
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      <footer className="site-footer" id="contacto">
        <div>
          <span className="eyebrow">Contacto</span>
          <h2>Hablemos de tu proxima idea web</h2>
          <p>Estoy abierto a conversar sobre proyectos, oportunidades de practica y colaboraciones donde pueda aportar desde el desarrollo web.</p>
        </div>
        <div className="footer-actions">
          <span className="button button-primary phone-pill">{profile.phone}</span>
          <a className="button button-secondary" href={profile.github} target="_blank" rel="noreferrer">
            Ver GitHub
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
