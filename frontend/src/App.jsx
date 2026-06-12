import Layout from "./components/layout/Layout.jsx";
import Hero from "./sections/hero/Hero.jsx";
import Projects from "./sections/projects/Projects.jsx";
import Skills from "./sections/skills/Skills.jsx";


function App() {

  return (
    <Layout>
      <Hero />
      <Skills />
      <Projects />
    </Layout>
  )
}

export default App
