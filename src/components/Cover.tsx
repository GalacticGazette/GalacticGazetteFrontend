import { useState } from 'react';
import Button from './Button';
import './Cover.css'
import '../App.css'

const Cover = () => {
    const [showLink, setShowLink] = useState(false);

    return (
        <div className='big-container' onMouseEnter={() => setShowLink(true)} onMouseLeave={() => setShowLink(false)}>
            <video src='/videos/floating-in-space.mp4' autoPlay loop muted />
            <a className='video-link' style={{ opacity: showLink ? 1 : 0 }} href='https://www.youtube.com/watch?v=cWuzJBboQyE' target='_blank' rel='noreferrer'>
            <i className='fa-brands fa-youtube'></i> 'Floating In Space'
            </a>
            <h1>EXPLORE SPACE</h1>
            <p>What are you waiting for?</p>
            <div className='big-buttons'>
                <Button classes='button'
                    styl='outlined'
                    size='large'>
                    GET STARTED
                </Button>
                <Button classes='button'
                    styl='solid'
                    size='large'>
                    SEE DISCOVERIES! <i className='fa-solid fa-play-circle'></i>
                </Button>
            </div>
        </div>
    )
}

export default Cover;