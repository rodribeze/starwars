import { useEffect, useState } from "react";
import { fetchPeoples } from '../helpers/api'

export const usePeopleMaisVezes = () => {

    const [peoples,setPeoples] = useState()
    const [loading,setLoading] = useState(true)

    useEffect(function(){

        const fetch = async () => {

            setLoading(true)

            const response = await fetchPeoples()
            setPeoples(response)

            setLoading(false)

        }

        fetch()

    },[])

    return [
        peoples,
        loading
    ];

}