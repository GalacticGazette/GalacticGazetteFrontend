import { ReactNode } from 'react';
import { ButtonStyle, ButtonSize, ButtonType } from './Types';

export interface ButtonProps {
    classes?: string;
    children?: any;
    styl?: ButtonStyle;
    size?: ButtonSize;
    type?: ButtonType;
    onClick?: () => void;
}

export interface CardProps extends MagazineProps {
    id: string;
}

export interface CardsProps {
    cardsPerPage: number;
}

export interface CrossfadeProps {
    children: ReactNode;
}

export interface LazyImageProps {
    className: string;
    src: string;
    alt: string;
}

export interface MagazineProps {
    title: string;
    imagePath: string;
    date: string;
    category: string;
    price: number;
}

export interface PathButtonProps extends ButtonProps {
    to: string;
}