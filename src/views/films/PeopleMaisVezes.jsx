import React from 'react'

import Default from '../../components/layouts/Default';
import { usePeopleMaisVezes } from '../../hooks/usePeopleMaisVezes';

const PeopleMaisVezes = props => {
    
    const [peoples, loading] = usePeopleMaisVezes()

    const listMaisVezes = (listPeoples) => {

        let groupPeoples = []
        let peoples = listPeoples.results

        for(var i = 0; i < peoples.length; i++){
            const key = peoples[i].films.length
            if(!groupPeoples[ key ]){
                groupPeoples[ key ] = {
                    peoples: [ peoples[i] ],
                    totalFilms: key
                }
            }else{
                groupPeoples[ key ].peoples.push( peoples[i] )
            }
        }
        
        groupPeoples = groupPeoples.sort( (a,b) => {
            if(a.totalFilms > b.totalFilms){
                return -1;
            }
            if(a.totalFilms < b.totalFilms){
                return 1;
            }
            return 0;
        } )

        const list = groupPeoples ? groupPeoples[0].peoples.map( people => (
            <div>{people.name} - ({people.films.length}) filmes [{people.url}]</div>
        )) : null
        
        return list
    }

    return (
        <Default>
            { !loading ? listMaisVezes(peoples) : false }
        </Default>
    );

}

export default PeopleMaisVezes;