// import { Icon } from "react-3d-icons";
import { frontData, backData } from "../data/experiences.data";

export const Experiences = () => {
  return (
    <section id="experiences">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            {frontData.map(({ id, Img, color, title }) => {
              return (
                <article className="experience-details" key={id}>
                  <div style={{ height: "100px", width: "100px" }}>
                    <Img color={color} fontSize="4em" />
                    <h4>{title}</h4>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="experience-backend">
          <h3>Backend Development & Tools</h3>
          <div className="experience-content">
            {backData.map(({ id, Img, color, title }) => {
              return (
                <article className="experience-details" key={id}>
                  <div
                    className="experience-logo-title"
                    style={{ height: "100px", width: "100px" }}
                  >
                    <Img color={color} fontSize="4em" />
                    <h4 className="logo-title" style={{ color:{color} }}>{title}</h4>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
