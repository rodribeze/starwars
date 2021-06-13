import React from 'react'
import Default from '../../components/layouts/Default';
import { useFilm } from '../../hooks/useFilm';
import { useParams } from 'react-router-dom'
import '../../components/layouts/Film.css'
import Button from '../../components/layouts/Button';

const Film = props => {

    const { id } = useParams()

    const [film,loading] = useFilm(id)

    return (
        <Default>
            {
                !loading && film ? (
                    <div className="Film">
                        <h2>{film.title}</h2>
                        <p>{film.opening_crawl}</p>
                        <br/>
                        <Button to="/">Ver Outros Filmes</Button>
                    </div>
                ) : 'Carregando...'
            }
        </Default>
    )
}

export default Film;