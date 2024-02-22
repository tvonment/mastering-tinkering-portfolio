import AboutSection from "./AboutSection"

function CurrentSection(props: { currentSection: string }) {
    return (
        <>
            {
                props.currentSection === "about" ? <AboutSection /> : <h1>Portfolio</h1>
            }
        </>
    )
}

export default CurrentSection