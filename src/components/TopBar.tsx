import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import XIcon from '@mui/icons-material/X'
import './TopBar.css'
import { IconButton } from '@mui/material'
import profilePicture from '../assets/photo-gianluca-romeo.jpg'
import Introduction from './Introduction'


// TODO Add action to icons

function TopBar() {
    return (
        <>
            <div className="top-bar">
                <img className="introduction-image" src={profilePicture} alt="Gianluca Romeo" />
                <div className="top-bar-right-panel">
                    <div className="top-bar-social-media">
                        <IconButton><InstagramIcon /></IconButton>
                        <IconButton><LinkedInIcon /></IconButton>
                        <IconButton><EmailIcon /></IconButton>
                        <IconButton><XIcon /></IconButton>
                    </div>
                    <Introduction />
                </div>
            </div>
        </>
    )
}

export default TopBar