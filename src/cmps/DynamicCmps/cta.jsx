import CV from '/Users/dvdelbaz/Desktop/portfolioWebsite/davidElbaz_portfolio/src/assets/imgs/CV-DAVID-ELBAZ.pdf'

export const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} className="btn" download>Download CV</a>
            <a href="#contact" className="btn btn-primary">Contact</a>
        </div>
    )
}