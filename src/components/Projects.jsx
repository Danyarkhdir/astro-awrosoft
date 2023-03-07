import Project from "./Project";
import { projects } from "../data/projects";
export default function Projects() {
  return (
    <>
      <section className="categories-nav-section">
        <ul id="categories-nav" className="categories-nav">
          <li id="all" className="category active">
            <span>All</span>
            <span className="material-symbols-outlined"> all_match </span>
          </li>
          <li id="government" className="category">
            <span>GOVERNMENT</span>
            <span className="material-symbols-outlined">
              {" "}
              assured_workload{" "}
            </span>
          </li>
          <li id="ngo" className="category">
            <span>NGO</span>
            <span className="material-symbols-outlined"> corporate_fare </span>
          </li>
          <li id="ecommerce" className="category">
            <span>ECOMMERCE</span>
            <span className="material-symbols-outlined"> local_mall </span>
          </li>
          <li id="shipping" className="category">
            <span>SHIPPING</span>
            <span className="material-symbols-outlined"> local_shipping </span>
          </li>
          <li id="university" className="category">
            <span>UNIVERSITY</span>
            <span className="material-symbols-outlined"> School </span>
          </li>
          <li id="website" className="category">
            <span>WEBSITE</span>
            <span className="material-symbols-outlined"> web </span>
          </li>
        </ul>
      </section>
      <section className="infetech-projects-grid-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            {projects.map((project) => (
              <Project
                image={project.image}
                name={project.name}
                info={project.info}
                link={project.link}
                dataFilter={project.dataFilter}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
