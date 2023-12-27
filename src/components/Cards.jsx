import React from 'react'
import Card from './Card'
import cards from '../data/cards.json'

const Cards = () => {

    const data = cards;

    return (
        <>
            {data.map(({ lang, url, fcolor, scolor }) => {
                return <Card key={lang} lang={lang} img={url} fcolor={fcolor} scolor={scolor}/>
            })}
        </>
    )
}

export default Cards
