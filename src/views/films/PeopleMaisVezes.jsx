import React from 'react'
import { useParams } from 'react-router-dom'

import Default from '../../components/layouts/Default';
import { usePeopleMaisVezes } from '../../hooks/usePeopleMaisVezes';

const PeopleMaisVezes = props => {
    
    const [peoples, loading] = usePeopleMaisVezes()

    const listOrdened = peoples ? peoples.results.sort( 
        function(a,b){
            if(a.films.length > b.films.length){
                return -1;
            }
            if(a.films.length < b.films.length){
                return 1;
            }
            return 0;
        }
    ).filter( people => people.films.length > 1 ) : false;

    // let listMaisVezes = []
    // if(listOrdened) for( var i = 0; listOrdened.length < 4; i++){
    //     listMaisVezes[i] = listOrdened[i]
    // }


    const listLimited = (peoples) => {
        let peoplesLimited = []
        for(var i = 0; i < 3; i++){
            peoplesLimited.push(peoples[i])
        }

        const list = peoplesLimited ? peoplesLimited.map( people => (
            <div>{people.name} - ({people.films.length}) filmes [{people.url}]</div>
        )) : null
        
        return list
    }



    return (
        <Default>
            { !loading ? listLimited(listOrdened) : false }
        </Default>
    );

}

export default PeopleMaisVezes;