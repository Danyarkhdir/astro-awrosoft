import Project from "./Project";
import { projects } from "../data/projects";
export default function Projects() {
  return (
    <section class="infetech-projects-grid-area pt-120 pb-90">
      <div class="container">
        <div class="row">
          {projects.map((project) => (
            <Project
              image={project.image}
              name={project.name}
              info={project.info}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
