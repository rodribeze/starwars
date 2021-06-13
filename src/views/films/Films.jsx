import React, { useState } from 'react'
import Default from '../../components/layouts/Default';
import CardFilm from '../../components/layouts/CardFilm'
import { useFilms } from '../../hooks/useFilms';
import '../../components/layouts/Films.css'

const Films = props => {

    const [search, setSearch] = useState()
    const [films,loading] = useFilms(search)

    const list = films ? films.results.map( (film,i) => {
        return <CardFilm key={i} {...film} />
    }) : false

    return (
        <Default>
            <div className="Films">
                <input className="search" type="text" onChange={e => setSearch(e.target.value)} placeholder="Digite o nome do filme aqui" />
                {  !loading ? list : false }
            </div>
        </Default>
    )
}

export default Films;