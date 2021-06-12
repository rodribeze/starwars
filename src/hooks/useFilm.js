import { useEffect, useState } from "react"
import { fetchFilmById } from '../helpers/api'

export const useFilm = (id) => {

    const [film, setFilm] = useState() 
    const [loading, setLoading] = useState(false) 

    useEffect(() => {

        setLoading(true)

        const fetchData = async () => {
            const response = await fetchFilmById(id)
            setFilm(response)
            setLoading(false)
        }

        fetchData()

    }, [id])
    
    return [
        film,
        loading
    ]

}
