import Layout from "./components/layout/Layout.jsx";
import Hero from "./sections/hero/Hero.jsx";
import Services from "./sections/services/Services.jsx";
import Projects from "./sections/projects/Projects.jsx";
import Testimonials from "./sections/testimonials/Testimonials.jsx";
import Skills from "./sections/skills/Skills.jsx";
import Workflow from "./sections/workflow/Workflow.jsx";
import About from "./sections/about/About.jsx";
import Faq from "./sections/faq/Faq.jsx";
import Contact from "./sections/contact/Contact.jsx";

import { ToastProvider } from "./contexts/ToastContext.jsx";


function App() {

  return (
    <ToastProvider>
      <Layout>
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <Skills />
        <Workflow />
        <About />
        <Faq />
        <Contact />
      </Layout>
    </ToastProvider>
  )
}

export default App
