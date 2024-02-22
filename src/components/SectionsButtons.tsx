import { Button } from "@mui/material";
import './SectionsButtons.css'

function SectionButton(props: { text: string, onClick: () => void }) {
    return (
        <>
            <Button onClick={props.onClick}>{props.text}</Button>
        </>
    )
}

function SectionsButtons(props: { onAboutClick: () => void, onPortfolioClick: () => void }) {
    return (
        <>
            <div className="sections-btns">
                <SectionButton text="About" onClick={props.onAboutClick} />
                <SectionButton text="Portfolio" onClick={props.onPortfolioClick} />
            </div>
        </>
    )
}

export default SectionsButtons