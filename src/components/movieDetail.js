import { useState, useEffect } from "react"
import { getDetails } from "./requests"

export const MovieDetail = ({movieId}) => {
    const [data, setData] = useState([])
    
    useEffect(() => {
        getDetails(movieId).then(res => setData(res.data))
    }, [movieId])

    function formatRelease () {
        if (data.release_date) {
        const dateArray = data.release_date.split('-')
        const year = dateArray[0]
        const month = dateArray[1]
        const day = dateArray[2]
        return `${month}/${day}/${year}`
    }}

    function formatRun () {
        if (data.runtime) {
        const hours = Math.floor(data.runtime / 60)
        const minutes = data.runtime % 60
        return `${hours}hrs ${minutes}mins`
    }}

console.log(data)
    return (
        <div className={styles.container}>
            <img src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} className={styles.img} alt={data.title}/>
            <div className={styles.text}>
                <p className={styles.title}>{data.title}</p>
                <p className={styles.tag}>{data.tagline}</p>
                <div className={styles.info}>
                    <p className={styles.release}>{formatRelease()}</p>
                    <p className={styles.average}>{String(data.vote_average).slice(0, 3)}/10</p>
                    <p>{formatRun()}</p>
                </div>
                <div className={styles.genres}>
                {data.genres && data.genres.map((genre) => <p className={styles.genre}>{genre.name}</p>)}
                </div>
                <div className={styles.page}><a href={data.homepage}>{data.homepage}</a></div>
                <p className={styles.overview}>{data.overview}</p>
            </div>
            <div className={styles.tabBox}>
                <div className={styles.tabs}>
                <div className={styles.tab}>images</div>
                <div className={styles.tab}>video</div>
                <div className={styles.tab}>cast</div>
                <div className={styles.tab}>info</div>
                </div>
                <div className={styles.box}></div>
            </div>
        </div>
    )
}

const styles = {
    container: 'min-h-screen',
    img: 'opacity-70',
    text: 'absolute top-40 left-4 text-white z-10 drop-shadow-lg',
    title: 'text-5xl',
    tag: 'text-2xl mt-2',
    info: 'flex mt-2 text-md',
    average: 'mx-4',
    release: '',
    genres: 'flex',
    genre: 'mr-2 mt-2',
    page: 'mt-2 text-blue-200',
    overview: 'mt-2 w-1/3',
    tabBox: 'absolute bottom-0 left-0 w-full h-96 z-10 ',
    tabs: 'flex',
    tab: 'flex first:ml-4 rounded-t-lg h-12 w-24 bg-zinc-800 first:opacity-80 opacity-50 border-r-2 border-zinc-900 text-white justify-center items-center cursor-pointer',
    box: ' w-full h-full bg-zinc-800 opacity-80',
}