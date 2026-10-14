
import React, { useRef, useState } from "react";
import html2pdf from "html2pdf.js";
import "./App.css";

const projects = [
  {
    number: "01",
    title: "DRG Supermarket Self Checkout",
    type: "SELF CHECKOUT APPLICATION",
    description:
      "A responsive self-checkout application featuring barcode scanning, cart management and billing.",
    technologies: ["ReactJS", "Firebase", "QuaggaJS"],
    url: "https://tomtog-4c09a.web.app/",
  },
  {
    number: "02",
    title: "Perfume Shop E-Commerce",
    type: "MERN E-COMMERCE APPLICATION",
    description:
      "A full-stack e-commerce application featuring product browsing, user authentication, cart functionality and responsive UI.",
    technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
    url: "https://drg-perfume-shop.netlify.app/",
  },
  {
    number: "03",
    title: "To-Do Task Manager",
    type: "TASK MANAGEMENT APPLICATION",
    description:
      "A task management application with authentication and CRUD features for creating and managing personal tasks.",
    technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
    url: "https://tododrflow.netlify.app/",
  },
];

const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "ReactJS",
      "Responsive Design",
    ],
  },
  {
    title: "Backend Development",
    skills: [
      "NodeJS",
      "ExpressJS",
      "REST API",
      "JWT Authentication",
    ],
  },
  {
    title: "Database & Services",
    skills: ["MongoDB", "MongoDB Atlas", "Firebase"],
  },
  {
    title: "Tools & Deployment",
    skills: ["Git", "GitHub", "Postman", "Netlify", "Render"],
  },
];

function SectionTitle({ icon, children }) {
  return (
    <div className="section-title">
      <span className="section-icon" aria-hidden="true">
        {icon}
      </span>
      <h2>{children}</h2>
    </div>
  );
}

function App() {
  const resumeRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadPDF = async () => {
    if (!resumeRef.current || isDownloading) return;

    setIsDownloading(true);
    const element = resumeRef.current;

    try {
      await document.fonts.ready;

      element.classList.add("pdf-export");

      await html2pdf()
        .set({
          margin: 0,
          filename: "Dhanapal_R_MERN_Developer_Resume.pdf",
          image: {
            type: "jpeg",
            quality: 0.98,
          },
          html2canvas: {
            scale: 2.5,
            useCORS: true,
            backgroundColor: "#ffffff",
            logging: false,
            scrollX: 0,
            scrollY: 0,
            windowWidth: 1200,
          },
          jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "portrait",
            compress: true,
          },
          pagebreak: {
            mode: ["avoid-all"],
          },
        })
        .from(element)
        .save();
    } catch (error) {
      console.error("Resume PDF export failed:", error);
      window.alert("PDF download failed. Please try again.");
    } finally {
      element.classList.remove("pdf-export");
      setIsDownloading(false);
    }
  };

  const portfolioUrl = "https://dr-portfollio.netlify.app/";

  return (
    <div className="resume-app">
      <div className="top-bar">
        <span className="top-bar-label">RESUME PREVIEW</span>

        <button
          type="button"
          className="download-btn"
          onClick={downloadPDF}
          disabled={isDownloading}
        >
          {isDownloading
            ? "Preparing PDF..."
            : "↓ Download Resume PDF"}
        </button>
      </div>

      <article className="resume-container" ref={resumeRef}>
        {/* HEADER */}
        <header className="resume-header">
          <div className="header-intro">
            <h1>Dhanapal R</h1>
            <p className="header-role">MERN STACK DEVELOPER</p>
            <p className="header-tagline">
              Building Scalable &amp; User-Friendly Web Applications
            </p>
          </div>

          <div className="header-contact">
            <a href="tel:+918072780935">
              <span className="contact-symbol" aria-hidden="true">
                ☎
              </span>
              <span>8072780935</span>
            </a>

            <a href="mailto:dhanapalraja583@gmail.com">
              <span className="contact-symbol" aria-hidden="true">
                ✉
              </span>
              <span>dhanapalraja583@gmail.com</span>
            </a>

            <p>
              <span className="contact-symbol" aria-hidden="true">
                ⌖
              </span>
              <span>Salem, Tamil Nadu</span>
            </p>

            <a
              href={portfolioUrl}
              target="_blank"
              rel="noreferrer"
              className="contact-url"
            >
              <span className="contact-symbol" aria-hidden="true">
                ↗
              </span>
              <span className="link-text">{portfolioUrl}</span>
            </a>
          </div>

          <div className="profile-mark" aria-label="DR initials">
            DR
          </div>
        </header>

        <div className="resume-columns">
          {/* LEFT COLUMN */}
          <main className="left-column">
            <section className="resume-section summary-section">
              <SectionTitle icon="●">
                Professional Summary
              </SectionTitle>

              <p className="summary-text">
                M.Sc. Computer Science postgraduate with hands-on
                experience building responsive web applications using
                ReactJS and MERN stack technologies. Familiar with
                NodeJS, ExpressJS, MongoDB and Firebase, with project
                experience in authentication, database integration and
                user-friendly interfaces. Eager to contribute to a
                development team and grow as a Full Stack Developer.
              </p>
            </section>

            <section className="resume-section skills-section">
              <SectionTitle icon="⚙">
                Technical Skills
              </SectionTitle>

              {skillGroups.map((group) => (
                <div className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>

                  <div className="skill-list">
                    {group.skills.map((skill) => (
                      <span className="skill-chip" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            <section className="resume-section projects-section">
              <SectionTitle icon="</>">
                Projects
              </SectionTitle>

              <div className="projects-list">
                {projects.map((project) => (
                  <article
                    className="project-item"
                    key={project.number}
                  >
                    <div className="project-number">
                      {project.number}
                    </div>

                    <div className="project-content">
                      <h3>{project.title}</h3>
                      <p className="project-type">
                        {project.type}
                      </p>

                      <p className="project-description">
                        {project.description}
                      </p>

                      <div className="project-tech">
                        <strong>Tech Used:</strong>

                        <div className="skill-list">
                          {project.technologies.map((tech) => (
                            <span
                              className="skill-chip"
                              key={tech}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <a
                        className="live-demo"
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <strong>Live Demo:</strong>
                        <span className="full-url">
                          {project.url}
                        </span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </main>

          {/* RIGHT COLUMN */}
          <aside className="right-column">
            <section className="resume-section education-section">
              <SectionTitle icon="◆">Education</SectionTitle>

              <div className="timeline">
                <article className="timeline-item">
                  <div className="timeline-heading">
                    <h3>M.Sc Computer Science</h3>
                    <span>2025</span>
                  </div>
                  <p>Periyar University, Salem</p>
                  <p>Percentage: 75%</p>
                </article>

                <article className="timeline-item">
                  <div className="timeline-heading">
                    <h3>B.Sc Computer Science</h3>
                    <span>2021</span>
                  </div>
                  <p>Sowdeswari College, Salem</p>
                  <p>Percentage: 70%</p>
                </article>

                <article className="timeline-item">
                  <div className="timeline-heading">
                    <h3>HSC</h3>
                    <span>2018</span>
                  </div>
                  <p>GHSS, Muthunaicken Patty</p>
                  <p>Percentage: 60%</p>
                </article>

                <article className="timeline-item">
                  <div className="timeline-heading">
                    <h3>SSLC</h3>
                    <span>2016</span>
                  </div>
                  <p>GHSS, Muthunaicken Patty</p>
                  <p>Percentage: 80%</p>
                </article>
              </div>
            </section>

            <section className="resume-section experience-section">
              <SectionTitle icon="▣">Experience</SectionTitle>

              <div className="timeline">
                <article className="timeline-item">
                  <h3>Full Stack Web Development Intern</h3>
                  <p>Cognitive I IT Solutions Pvt Ltd, Salem</p>
                  <p className="experience-date">
                    Jan 2025 – Apr 2025
                  </p>
                  <ul>
                    <li>
                      Gained practical exposure to full-stack
                      application development workflows.
                    </li>
                    <li>
                      Developed understanding of frontend,
                      backend and database integration concepts.
                    </li>
                  </ul>
                </article>

                <article className="timeline-item">
                  <h3>Data Visualization with Tableau Intern</h3>
                  <p>Cognitive I IT Solutions Pvt Ltd, Salem</p>
                  <p className="experience-date">
                    Mar 2024 – Jul 2024
                  </p>
                  <ul>
                    <li>
                      Explored datasets and data visualization
                      techniques using Tableau.
                    </li>
                    <li>
                      Practiced presenting data through visual
                      reports and dashboards.
                    </li>
                  </ul>
                </article>
              </div>
            </section>

            <section className="resume-section additional-section">
              <SectionTitle icon="✦">
                Additional Learning
              </SectionTitle>

              <ul className="certification-list">
                <li>Responsive Web Design</li>
                <li>JavaScript Fundamentals</li>
                <li>ReactJS</li>
              </ul>
            </section>

            <section className="resume-section links-section">
              <SectionTitle icon="↗">Links</SectionTitle>

              <div className="portfolio-row">
                <span
                  className="portfolio-icon"
                  aria-hidden="true"
                >
                  ↗
                </span>

                <div className="portfolio-details">
                  <h3>Portfolio</h3>
                  <a
                    className="portfolio-link"
                    href={portfolioUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {portfolioUrl}
                  </a>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </article>
    </div>
  );
}

export default App;
