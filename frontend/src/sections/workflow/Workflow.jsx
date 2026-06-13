import steps from "../../data/workflow.js";

import Container from "../../components/layout/Container.jsx";
import Section from "../../components/layout/Section.jsx";
import Heading from "../../components/ui/Heading.jsx"

import StepsWrapper from "./StepsWrapper.jsx";

const Workflow = () => {
    if (!steps) return null;

    return (
        <Container>
            <Section id="workflow">
                <Heading subtitle={'My approach'} title={'How I Work'} />

                <StepsWrapper steps={steps} />
            </Section>
        </Container>
    )
}

export default Workflow;