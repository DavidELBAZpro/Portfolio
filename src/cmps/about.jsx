import imageOfMe from "../../src/assets/imgs/me.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img loading="lazy" src={imageOfMe} alt="David ELBAZ" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward />
              <h5>Experiences</h5>
            </article>

            <article className="about-card">
              <FiUsers />
              <h5>Clients</h5>
            </article>

            <article className="about-card">
              <VscFolderLibrary />
              <h5>Projects</h5>
            </article>
          </div>

          <p>
            A <strong>highly motivated team player</strong> , hard worker, focusing on problem
            solving and detailed orientation, self-learner, responsible, with
            leadership skills and <span className="underlined">adapting quickly to new environments.</span> 
            <br />
            <span>Let's collaborate !</span>
          </p>

          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
