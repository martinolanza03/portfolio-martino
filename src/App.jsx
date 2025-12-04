import Header from "./components/Header"
import Me from "./components/Me"
import ExperienceAndEducation from "./components/ExperienceAndEducation.jsx"
import Projects from "./components/Projects.jsx"
import Technologies from "./components/Technologies.jsx"
import Footer from "./components/Footer.jsx"



import works from "./data/Works.js"
import projectsdata from "./data/ProjectsData.js"
import languages from "./data/LanguagesTech.js"
import education from "./data/Education.js"

function App() {

  return (<>
    <Header />
    <Me />
    <Projects projects={projectsdata} />
    <Technologies languages={languages} />
    <ExperienceAndEducation works={works} education={education} />
    <Footer />
  </>)

}

export default App
