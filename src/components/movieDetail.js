import { useState, useEffect } from "react"
import { getDetails } from "./requests"

export const MovieDetail = ({movieId}) => {
    const [data, setData] = useState([])

    useEffect(() => {
        getDetails(movieId).then(res => setData(res.data))
    }, [movieId])

console.log(data)
    return (
        <div className={styles.container}>
            <img src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} className={styles.img} alt={data.title}/>
            <p className={styles.title}>{data.title}</p>
            <p className={styles.tag}>{data.tagline}</p>
        </div>
    )
}
const styles = {
    container: '',
    img: 'absolute z-0',
    title: 'absolute top-40 left-4 text-white text-5xl z-10',
    tag: 'absolute top-60 left-4 text-white text-2xl z-10',
}