import ContactForm from "./content/ContactForm.jsx";
import Project from "./content/Project.jsx";
import Section from "./content/Section.jsx";
import Skill from "./content/Skill.jsx";

import htmlLogo from "../assets/icons/html.png";
import cssLogo from "../assets/icons/css.png";
import jsLogo from "../assets/icons/js.png";
import nodeLogo from "../assets/icons/nodejs.png";
import expressLogo from "../assets/icons/expressjs.png";
import dockerLogo from "../assets/icons/docker.png";
import reduxLogo from "../assets/icons/redux.png";
import formikLogo from "../assets/icons/formik.png";
import muiLogo from "../assets/icons/mui.png";
import tailwindLogo from "../assets/icons/tailwind.png";
import devToolsLogo from "../assets/icons/devTools.png";
import firebaseLogo from "../assets/icons/firebase.png";
import gitLogo from "../assets/icons/git.png";
import nextLogo from "../assets/icons/nextjs.png";
import VSLogo from "../assets/icons/vscode.png";
import reactLogo from "../assets/icons/react.png";
import tsLogo from "../assets/icons/typescript.png";
import mongoLogo from "../assets/icons/mongodb.png";
import vercelLogo from "../assets/icons/vercel.png";
import GHLogo from "../assets/icons/github-logo.png";

import profilePic from "../assets/images/portfolioPic.png";
import foodOrderAppPic from "../assets/images/FoodOrderApp.png";
import projectAppPic from "../assets/images/ProjectApp.png";
import ytAppPic from "../assets/images/Youtube.png";
import amazonAppPic from "../assets/images/Amazon.png";

export default function Content() {
  return (
    <main>
      <Section id="intro">
        <figure className="profile_pic_container">
          <img className="profile_pic" src={profilePic} alt="Profile picture" />
        </figure>
        <header>
          <h1>
            Hello, I'm <span>Muhammed,</span>
            <br />a fullstack web developer.
          </h1>
          <p>
            I design elegant, smooth user experiences with clean, precise code.
          </p>
        </header>
      </Section>

      <Section id="skills">
        <h1>About</h1>
        <article>
          Back in 2023, I wrapped up my social media marketing agency to enter the world of tech and pursue
          a career in software development. What felt like a step into the unknown soon became a profound realisation of my professional calling 😅!
          <br />
          <br />
          I love the fusion between the technical and creative aspects of coding as I bring my ideas to life on screen. There are few things more satisfying than seeing a project come together, from the initial concept to the final product 💫.
          <br />
          <br />
          When I’m not building software, you'll find me either building hardware (I'm an avid DIY kind of guy 🛠), cooking, hiking, doing calisthenics or enjoying a lovely evening chai with a tech buddy ☕.
          <br />
          <br />
          Some of my skills include...
        </article>
        <aside>
          <Skill logo={htmlLogo} name="HTML" />
          <Skill logo={cssLogo} name="CSS" />
          <Skill logo={jsLogo} name="JavaScript" />
          <Skill logo={tsLogo} name="TypeScript" />
          <Skill logo={reactLogo} name="React" />
          <Skill logo={nextLogo} name="NextJS" />
          <Skill logo={nodeLogo} name="NodeJS" />
          <Skill logo={expressLogo} name="ExpressJS" />
          <Skill logo={dockerLogo} name="Docker" />
          <Skill logo={reduxLogo} name="Redux" />
          <Skill logo={formikLogo} name="Formik" />
          <Skill logo={muiLogo} name="MUI" />
          <Skill logo={tailwindLogo} name="Tailwind" />
          <Skill logo={devToolsLogo} name="DevTools" />
          <Skill logo={gitLogo} name="Git" />
          <Skill logo={GHLogo} name="GitHub" />
          <Skill logo={VSLogo} name="VSCode" />
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
            liveLink="https://food-order-app-fullstack-32wppvlig-mh-rashids-projects.vercel.app/"
            codeLink="https://github.com/MH-Rashid/food-order-app"
          />
          <Project
            projectImg={amazonAppPic}
            projectName="Amazon clone"
            liveLink="https://amazon-clone-frontend-lesm.onrender.com/"
            codeLink="https://github.com/MH-Rashid/amazon-clone"
          />
          <Project
            projectImg={projectAppPic}
            projectName="Project Manager"
            liveLink="https://project-manager-nextjs-5gpvl2anl-mh-rashids-projects.vercel.app/"
            codeLink="https://github.com/MH-Rashid/Project-manager-nextjs-ts/tree/master"
          />
          <Project
            projectImg={ytAppPic}
            projectName="Youtube clone"
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
