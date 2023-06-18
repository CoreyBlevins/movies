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
            <div className={styles.text}>
                <p className={styles.title}>{data.title}</p>
                <p className={styles.tag}>{data.tagline}</p>
                <p className={styles.overview}>{data.overview}</p>
            </div>
        </div>
    )
}
const styles = {
    container: '',
    img: 'absolute z-0',
    text: 'absolute top-40 left-4 text-white z-10',
    title: 'text-5xl',
    tag: 'text-2xl',
    overview: 'text-l mt-2 w-3/6'
}