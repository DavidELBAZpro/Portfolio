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
            <img src={imageOfMe} alt="David ELBAZ" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward />
              <h5>Experiences</h5>
              <small>Hello</small>
            </article>

            <article className="about-card">
              <FiUsers />
              <h5>Experiences</h5>
              <small>Hello</small>
            </article>

            <article className="about-card">
              <VscFolderLibrary />
              <h5>Experiences</h5>
              <small>Hello</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
