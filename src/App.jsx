import Header from "./components/Header"
import Me from "./components/Me"
import WorkExperience from "./components/WorkExperience"
import Projects from "./components/Projects.jsx"



import Experience from "./data/Experience.js"
import projectsdata from "./data/ProjectsData.js"

function App() {

  return (<>
    <Header />
    <Me />
    <Projects projects={projectsdata} />
    <WorkExperience works={Experience} />
  </>)

}

export default App
