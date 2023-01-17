import { BiCheckDouble } from "react-icons/bi";
import {
  uiServicesData,
  webServicesData,
  softSkillsData,
} from "../data/services.data";

export const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services-container">
        <article className="services">
          <div className="services-head">
            <h3>UI/UX Design</h3>
          </div>
          {uiServicesData.map(({ services }, index) => {
            return (
              <ul key={index} className="services-list">
                <li>
                  <BiCheckDouble className="services-list-icon" />
                  <p>{services}</p>
                </li>
              </ul>
            );
          })}
        </article>

        <article className="services">
          <div className="services-head">
            <h3>Web Development</h3>
          </div>
          {webServicesData.map(({ services }, index) => {
            return (
              <ul key={index} className="services-list">
                <li>
                  <BiCheckDouble className="services-list-icon" />
                  <p>{services}</p>
                </li>
              </ul>
            );
          })}
        </article>

        <article className="services">
          <div className="services-head">
            <h3>Soft Skills</h3>
          </div>
          {softSkillsData.map(({ services }, index) => {
            return (
              <ul key={index} className="services-list">
                <li>
                  <BiCheckDouble className="services-list-icon" />
                  <p>{services}</p>
                </li>
              </ul>
            );
          })}
        </article>
      </div>
    </section>
  );
};
