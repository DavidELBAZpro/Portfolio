import MelodifyImg from "../assets/imgs/portfolio1.jpg";
import MelodifyImg2 from "../assets/imgs/portfolio2.jpg";
import MelodifyImg3 from "../assets/imgs/portfolio3.jpg";

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={MelodifyImg} alt="Melodify" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio-item-cta">
            <a href="" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};
