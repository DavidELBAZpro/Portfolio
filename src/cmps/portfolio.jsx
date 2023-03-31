import { portfolioData } from '../data/portfolio.data'
import { PortfolioModal } from './DynamicCmps/modal'
import { Fade } from 'react-reveal'

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <Fade bottom cascade>
        <div className="container portfolio-container">
          {portfolioData.map(
            ({ id, image, video, title, githubUrl, demoUrl, description }) => {
              return (
                <article key={id} className="portfolio-item">
                  <div className="portfolio-item-image">
                    <img loading="lazy" src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio-item-cta">
                    <a href={githubUrl} className="btn" target="_blank">
                      Github
                    </a>
                    <a
                      href={demoUrl}
                      className="btn btn-primary"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                    <PortfolioModal
                      title={title}
                      image={image}
                      video={video}
                      description={description}
                    />
                  </div>
                </article>
              )
            }
          )}
        </div>
      </Fade>
    </section>
  )
}
