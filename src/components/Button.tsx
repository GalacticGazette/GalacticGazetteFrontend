import { Link } from 'react-router-dom';
import { ButtonProps, PathButtonProps } from '../Props';
import './Button.css';

const Button = ({ classes, styl = 'default', size = 'default', type = 'default', children, onClick }: ButtonProps) => {
    const buttonStyle = styl === 'default' ? 'solid' : styl;

    const buttonSize = size === 'default' ? 'medium' : size;
    
    const buttonType = type === 'default' ? 'button' : type;

    return (
        <button
            className={`button ${classes} button-${buttonStyle} button-${buttonSize}`}
            type={buttonType}
            onClick={onClick}
            >
            {children}
        </button>
    )
};

export const PathButton = ({ classes, styl: style = 'default', size = 'default', type = 'default', children, to }: PathButtonProps) => {
    return (
        <Link to={to}>
            <Button classes={classes} styl={style} size={size} type={type} children={children}></Button>
        </Link>
    )
};

export default Button;