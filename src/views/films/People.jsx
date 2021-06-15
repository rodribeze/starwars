import React from 'react'
import { useParams } from 'react-router-dom'

import Default from '../../components/layouts/Default';
import CardFilm from '../../components/layouts/CardFilm'
import { usePeople } from '../../hooks/usePeople';

const People = props => {
    
    const { id } = useParams();
    const [films,people,loading] = usePeople(id)
    
    const list = films ? films.map( (film,i) => {
        return <CardFilm key={i} {...film} />
    }) : false

    return (
        <Default>
            { !loading ? (
                <>
                    <h2>{people.name}</h2>
                    <div className="Films">
                        {  list }
                    </div>
                </>
            ) : false }
            
        </Default>
    );

}

export default People;