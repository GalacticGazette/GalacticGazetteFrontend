import React, { useState } from 'react';
import { CardProps, CardsProps } from '../Props';
import { MAGAZINES } from '../Data';
import Button from './Button';
import Card from './Card';
import './Cards.css'
import './Stars.css'

function GetCard(cardData: CardProps) {
    return (
        <Card key={cardData.id} id={cardData.id} title={cardData.title} imagePath={cardData.imagePath} date={cardData.date} category={cardData.category} price={cardData.price} />
    );
}

function GetPage(currentPageNumber: number, pageNumber: number, cards: JSX.Element[]) {
    return (
        <React.Fragment key={pageNumber}>
            {
                currentPageNumber === pageNumber ? <ul className='card-page'>{cards}</ul> : null
            }
        </React.Fragment>
    );
}

function GetButton(setCurrentPageNumber: React.Dispatch<React.SetStateAction<number>>, pageNumber: number) {
    return (
        <li>
            <Button key={pageNumber} classes='button card-button' styl={'outlined'} size='small' onClick={() => setCurrentPageNumber(pageNumber)}>
                {pageNumber}
            </Button>
        </li>
    );
}

const Cards = ({ cardsPerPage }: CardsProps) => {

    console.time('time');

    const [currentPageNumber, setCurrentPageNumber] = useState(1);

    const keys: string[] = Object.keys(MAGAZINES);
    const totalCards: number = keys.length;

    const validCardsPerPage: number = Math.max(cardsPerPage, 1);

    const pages: JSX.Element[] = [];
    const buttons: JSX.Element[] = [];

    let cardIndex: number = 0;
    let pageNumber: number = 1;

    while (cardIndex < totalCards) {

        let cards: JSX.Element[] = [];

        while (cards.length < validCardsPerPage) {
            let key = keys[cardIndex];

            cardIndex++;

            if (key != null) {
                let card = GetCard({ id: key, ...MAGAZINES[key] });
                cards.push(card);
            } else {
                break;
            }
        }

        let page: JSX.Element = GetPage(currentPageNumber, pageNumber, cards);
        pages.push(page);

        let button = GetButton(setCurrentPageNumber, pageNumber);
        buttons.push(button);

        pageNumber++;
    }

    console.timeEnd('time');

    return (
        <div className='cards'>
            <h1>Check out this spatial magazines!</h1>
            <div className="stars">
                <div id="little-stars"></div>
                <div id="medium-stars"></div>
                <div id="big-stars"></div>
            </div>
            <div className='cards-frame'>
                <div className='cards-pages'>
                    {pages}
                </div>
                <ul className='cards-buttons'>
                    {buttons}
                </ul>
            </div>
        </div>
    );
}

export default Cards;