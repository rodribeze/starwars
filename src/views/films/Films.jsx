import React from 'react'
import Default from '../../components/layouts/Default';
import CardFilm from '../../components/layouts/CardFilm'
import { useFilms } from '../../hooks/useFilms';

const Films = props => {

    const [films,loading] = useFilms()

    const list = films ? films.results.map( film => {
        return <CardFilm {...film} />
    }) : false

    return (
        <Default>
            {  !loading ? list : false }
        </Default>
    )
}

export default Films;