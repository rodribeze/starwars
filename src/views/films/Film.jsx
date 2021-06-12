import React from 'react'
import Default from '../../components/layouts/Default';
import { useFilm } from '../../hooks/useFilm';
import { useParams } from 'react-router-dom'
import '../../components/layouts/Film.css'
import { Link } from 'react-router-dom';

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
                        <Link to="/" class="more_films">Ver Outros Filmes</Link>
                    </div>
                ) : 'Carregando...'
            }
        </Default>
    )
}

export default Film;