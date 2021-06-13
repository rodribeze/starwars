import { useEffect, useState } from "react"
import { fetchFilms } from '../helpers/api'

export const useFilms = (search) => {

    const [films, setFilms] = useState() 
    const [loading, setLoading] = useState(false) 

    useEffect(() => {

        setLoading(true)

        const fetchData = async () => {
            const response = await fetchFilms(search)
            setFilms(response)
            setLoading(false)
        }

        fetchData()

    }, [search])
    
    return [
        films,
        loading
    ]

}
