import { CTA } from "./DynamicCmps/cta";
import { HeaderAndFooterSocials } from "./DynamicCmps/header-footer-socials";
import imageOfMe from "../../src/assets/imgs/me.png";
import Typewriter from "typewriter-effect";

export const Header = () => {
  return (
    <header id="header">
      <div className="container header-container">
        <h1>David ELBAZ</h1>
        <h5 className="text-light typewritter">
          <Typewriter
            onInit={(typewriter) =>
              typewriter
                .typeString("Full Stack Developer")
                .pauseFor(1000)
                .deleteAll(100)
                .typeString("Front-End Developer")
                .deleteAll(100)
                .pauseFor(1000)
                .typeString("Full Stack Developer")
                .start()
            }
          />
        </h5>
        <CTA />
        <div className="header-socials">
          <HeaderAndFooterSocials />
        </div>

        <div className="me">
          <img
            src={imageOfMe}
            alt="me"
            title="David ELBAZ"
            className="me-image"
          />
        </div>

        <a href="#portfolio" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};
