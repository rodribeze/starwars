import { useEffect, useState } from "react";
import { fetchFilmById, fetchPeopleById } from '../helpers/api'

export const usePeople = (id) => {

    const [films,setFilms] = useState()
    const [people,setPeople] = useState()
    const [loading,setLoading] = useState(true)

    useEffect(function(){

        const fetch = async () => {

            setLoading(true)

            const response = await fetchPeopleById(id)
            setPeople(response)

            let films = []

            const filmIdRegex = /http:\/\/swapi\.dev\/api\/films\/([0-9]{1,})\//;

            for(var i =0; i < response.films.length; i++){

                const filmId = filmIdRegex.exec(response.films[i])[1]
                const film = await fetchFilmById(filmId)

                films.push(film)

            }

            setFilms(films)
            setLoading(false)

        }

        fetch()

    },[id])

    return [
        films,
        people,
        loading
    ];

}