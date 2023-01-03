import { CTA } from './DynamicCmps/cta'
import { HeaderSocials } from './DynamicCmps/header-socials'
import imageOfMe  from '../../src/assets/imgs/me.png'

export const Header = () => {
  return (
  <header id="header">
    <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>David ELBAZ</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
            <img src={imageOfMe} alt="me" title="David ELBAZ" className="me-image"/>
        </div>

        <a href="#contact" className="scroll-down">Scroll Down</a>
    </div>
  </header>
  )
}
