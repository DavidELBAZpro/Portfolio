// import MelodifyImg2 from "../assets/imgs/portfolio2.jpg";
// import MelodifyImg3 from "../assets/imgs/portfolio3.jpg";
import { portfolioData } from "../data/portfolio.data";

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {portfolioData.map(({ id, image, title, githubUrl, demoUrl }) => {
          return (
            <article key={id} className="portfolio-item">
              <div  className="portfolio-item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio-item-cta">
                <a href={githubUrl} className="btn" target="_blank">
                  Github
                </a>
                <a href={demoUrl} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
