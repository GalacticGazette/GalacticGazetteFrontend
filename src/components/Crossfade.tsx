import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CrossfadeProps } from '../Props';
import './Crossfade.css';

const Crossfade: React.FC<CrossfadeProps> = ({ children } : CrossfadeProps) => {
    const [redirect, setRedirect] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setRedirect(true);
    }, [location.pathname]);

    return (
        <>
            <div className={`crossfade ${redirect ? 'fade-in' : ''}`}>
                {children}
            </div>
        </>
    );
};

export default Crossfade;