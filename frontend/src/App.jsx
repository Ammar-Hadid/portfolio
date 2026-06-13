import Layout from "./components/layout/Layout.jsx";
import Hero from "./sections/hero/Hero.jsx";
import Projects from "./sections/projects/Projects.jsx";
import Skills from "./sections/skills/Skills.jsx";
import About from "./sections/about/About.jsx";
import Workflow from "./sections/workflow/Workflow.jsx";


function App() {

  return (
    <Layout>
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Workflow />
    </Layout>
  )
}

export default App
