import { HeaderAndFooterSocials } from "./DynamicCmps/header-footer-socials";

export const Footer = () => {
  return (
    <footer >
      <a href="#" className="footer-logo">David ELBAZ</a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experiences">Experiences</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer-socials">
        <HeaderAndFooterSocials />
      </div>

      <div className="footer-copyright">
        <small>
          <pre>
            &copy;{new Date().getFullYear()}. <strong>David ELBAZ.</strong> All
            rights reserved.
          </pre>
        </small>
      </div>
    </footer>
  );
};
