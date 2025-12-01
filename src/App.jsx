import Header from "./components/Header"
import Me from "./components/Me"
import WorkExperience from "./components/WorkExperience"
import Projects from "./components/Projects.jsx"
import Technologies from "./components/Technologies.jsx"



import experience from "./data/Experience.js"
import projectsdata from "./data/ProjectsData.js"
import languages from "./data/LanguagesTech.js"

function App() {

  return (<>
    <Header />
    <Me />
    <Projects projects={projectsdata} />
    <Technologies languages={languages} />
    <WorkExperience works={experience} />
  </>)

}

export default App
