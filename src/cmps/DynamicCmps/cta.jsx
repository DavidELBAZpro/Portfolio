import CV from '.././../assets/imgs/cv.pdf'

export const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} className="btn" download>Download CV</a>
            <a href="#contact" className="btn btn-primary">Contact</a>
        </div>
    )
}