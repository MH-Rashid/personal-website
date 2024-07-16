import ContactForm from "./content/ContactForm.jsx";
import Project from "./content/Project.jsx";
import Section from "./content/Section.jsx";
import Skill from "./content/Skill.jsx";

import htmlLogo from "../assets/icons/html.png";
import cssLogo from "../assets/icons/css.png";
import jsLogo from "../assets/icons/js.png";
import firebaseLogo from "../assets/icons/firebase.png";
import gitLogo from "../assets/icons/git.png";
import nextLogo from "../assets/icons/nextjs.png";
import VSLogo from "../assets/icons/vscode.png";
import reactLogo from "../assets/icons/react.png";
import tsLogo from "../assets/icons/typescript.png";
import mongoLogo from "../assets/icons/mongodb.png";
import vercelLogo from "../assets/icons/vercel.png";
import GHLogo from "../assets/icons/github-logo.png";

import profilePic from "../assets/images/profile-pic.jpg";
import foodOrderAppPic from "../assets/images/FoodOrderApp.png";
import projectAppPic from "../assets/images/ProjectApp.png";
import ytAppPic from "../assets/images/Youtube.png";
import amazonAppPic from "../assets/images/Amazon.png";

export default function Content() {
  return (
    <main>
      <Section id="intro">
        <figure>
          <img className="profile_pic" src={profilePic} alt="Profile picture" />
        </figure>
        <header>
          <h1>
            Hello, I'm <span>Muhammed,</span>
            <br />a frontend web developer.
          </h1>
          <p>
            I develop user-centred websites and apps by writing clean, precise
            code.
          </p>
        </header>
      </Section>

      <Section id="skills">
        <h1>About</h1>
        <article>
          Back in 2023, I wrapped up my social media marketing agency to pursue
          a career in web development. I love the fusion of creativity and
          coding, and the fact there are always new challenges and things to
          learn. When I’m not coding, I like to spend my time in nature and
          keeping fit.
        </article>
        <aside>
          <Skill logo={htmlLogo} name="HTML" />
          <Skill logo={cssLogo} name="CSS" />
          <Skill logo={jsLogo} name="JavaScript" />
          <Skill logo={tsLogo} name="TypeScript" />
          <Skill logo={reactLogo} name="React" />
          <Skill logo={gitLogo} name="Git" />
          <Skill logo={GHLogo} name="GitHub" />
          <Skill logo={VSLogo} name="VSCode" />
          <Skill logo={nextLogo} name="NextJS" />
          <Skill logo={vercelLogo} name="Vercel" />
          <Skill logo={firebaseLogo} name="Firebase" />
          <Skill logo={mongoLogo} name="MongoDB" />
        </aside>
      </Section>

      <Section id="portfolio">
        <h1>Portfolio</h1>
        <div className="projects">
          <Project
            projectImg={foodOrderAppPic}
            projectName="Food Order App"
            description="Frontend food order app with complete cart functionality and start-to-end workflow for placing orders. Built with React and CSS."
            liveLink="https://mh-rashid.github.io/food-order-app/"
            codeLink="https://github.com/MH-Rashid/food-order-app"
          />
          <Project
            projectImg={projectAppPic}
            projectName="Project Manager"
            description="Allows users to add / delete projects and associated tasks. Built with React and Tailwind CSS."
            liveLink="https://mh-rashid.github.io/Todo-app/"
            codeLink="https://github.com/MH-Rashid/S9_Project-mngt-app"
          />
          <Project
            projectImg={amazonAppPic}
            projectName="Amazon clone"
            description="A clone site mimicking the core functionality of Amazon.com -- manipulating the cart, placing orders, and tracking packages. Built with HTML, CSS and vanilla JavaScript."
            liveLink="https://mh-rashid.github.io/amazon-clone/"
            codeLink="https://github.com/MH-Rashid/amazon-clone"
          />
          <Project
            projectImg={ytAppPic}
            projectName="Youtube clone"
            description="A static clone site mimicking the style of the original. Uses CSS grid and positioning properties for the header and sidebar. Built with HTML and CSS."
            liveLink="https://mh-rashid.github.io/youtube-clone/"
            codeLink="https://github.com/MH-Rashid/youtube-clone"
          />
        </div>
      </Section>

      <Section id="contact">
        <h1>Contact</h1>
        <p>
          If you'd like to reach out, please leave a message and I'll get back
          to you as soon as I can.
        </p>

        <ContactForm />
      </Section>
    </main>
  );
}
