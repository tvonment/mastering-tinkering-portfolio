import { Divider } from '@mui/material'
import './Introduction.css'

function Introduction() {
    return (
        <>
            <div className="introduction-container">
                <div className='introduction-text'>
                    <div className="introduction">
                        Hey there,<br />I'm Gianluca Romeo
                    </div>
                    <div className="introduction-hashtags">
                        <div className="introduction-hashtag">
                            #Developer
                        </div>
                        <div className="introduction-hashtag">
                            #EIT Digital Master's Student
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <Divider color='#ededed' />

        </>
    )
}

export default Introduction