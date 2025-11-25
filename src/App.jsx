import Header from "./components/Header"
import Me from "./components/Me"
import WorkExperience from "./components/WorkExperience"
import Experience from "./data/Experience.js"

function App() {

  return (<>
    <Header />
    <Me />
    <WorkExperience works={Experience} />
  </>)

}

export default App
