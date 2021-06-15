import React from 'react'

import './CardFilm.css'

import { Link } from 'react-router-dom';

const CardFilm = props => {

    let date = new Date(props.release_date);
    let dateBr = ((date.getDate() )) + "/" + ((date.getMonth() + 1)) + "/" + date.getFullYear(); 

    const filmIdRegex = /http:\/\/swapi\.dev\/api\/films\/([0-9]{1,})\//;
    const filmId = filmIdRegex.exec(props.url)[1]

    const option = {
        dateStyle: 'full'
    }
    const locale = 'pt-br'
    const dateEdited = new Date(props.edited).toLocaleDateString( locale, option)

    return (
        <Link className="CardFilm" to={`/films/${filmId}`}>
            <h3>{props.title}</h3>
            <div className="desc">
                <span className="episod">Ep. {props.episode_id}</span>
                <span className="release_date">{dateBr}</span>
            </div>
            <p><strong>Última edição:</strong> {dateEdited}</p>
        </Link>
    );
}

export default CardFilm