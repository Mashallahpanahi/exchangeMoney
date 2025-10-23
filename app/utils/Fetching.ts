


import axios from "axios";



export default async function Fetching(urlName: string) {

    try {
        const res = await axios.get(`http://localhost:8000/api/${urlName}`)
        const data = await res.data
        if (!res) {
            throw new Error(`fail to fetch ${urlName}`)
        }
        const result = data
        return result;
    } catch (error) {
        console.error(error)
    }



}