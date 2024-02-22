import { useState } from 'react'
import './App.css'
import SectionsButtons from './components/SectionsButtons'
import TopBar from './components/TopBar'
import CurrentSection from './components/Sections';

function App() {
  const [currentSection, setCurrentSection] = useState("about");

  function onAboutClick() {
    setCurrentSection("about")
  }

  function onPortoflioClick() {
    setCurrentSection("portfolio")
  }

  return (
    <>
      <TopBar />
      <SectionsButtons onAboutClick={onAboutClick} onPortfolioClick={onPortoflioClick} />
      <CurrentSection currentSection={currentSection} />
    </>
  )
}

export default App
