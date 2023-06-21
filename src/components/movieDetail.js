import { useState, useEffect } from "react"
import { getDetails, getImages, getVideos } from "./requests"
import { DetailsContent } from "./detailsContent"

export const MovieDetail = ({movieId}) => {
    const [data, setData] = useState([])
    const [images, setImages] = useState([])
    const [videos, setVideos] = useState([])
    const [selectedTab, setSelectedTab] = useState(0)
    const content = ['info', 'posters', 'backdrops', 'videos', 'cast', 'similar']
    
    useEffect(() => {
        getDetails(movieId).then(res => setData(res.data))
        getImages(movieId).then(res => setImages(res.data))
        getVideos(movieId).then(res => setVideos(res.data.results))
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

console.log('d', data, 'i', images, 'v', videos)
    return (
        <div>
        <div className={styles.container}>
            <img src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} className={styles.img} alt={data.title}/>
            <div className={styles.text}>
                <p className={styles.title}>{data.title}</p>
                <p className={styles.tag}>{data.tagline}</p>
                <div className={styles.info}>
                    <p>{formatRelease()}</p>
                    <p className={styles.average}>{String(data.vote_average).slice(0, 3)}/10</p>
                    <p>{formatRun()}</p>
                </div>
                <div className={styles.genres}>
                    {data.genres && data.genres.map((genre, id) => 
                        <p className={styles.genre} key={id}>{genre.name}</p>
                    )}
                </div>
                <div className={styles.page}><a href={data.homepage} target="_blank" rel="noreferrer">{data.homepage}</a></div>
                <p className={styles.overview}>{data.overview}</p>
            </div>
            <div className={styles.tabs}>
                {content.map((tab, id) => 
                    <div className={selectedTab === id ? `${styles.selectedTab}` : `${styles.tab}`} key={id} 
                    onClick={() => setSelectedTab(id)}>
                        {tab}
                    </div>
                )}
            </div>
        </div>
            <DetailsContent data={data} images={images} videos={videos} selectedTab={selectedTab}/>
        </div>
    )
}

const styles = {
    container: 'relative',
    img: 'opacity-70 h-[80vh] w-full object-cover object-top',
    text: 'absolute top-20 left-4 text-white z-10 drop-shadow-lg',
    title: 'text-5xl',
    tag: 'text-2xl mt-2',
    info: 'flex mt-2 text-md',
    average: 'mx-4',
    genres: 'flex',
    genre: 'mr-2 mt-2',
    page: 'mt-2 text-blue-200',
    overview: 'mt-2 w-4/5 md:w-1/3',
    tabs: 'flex absolute bottom-0',
    tab: 'flex first:ml-4 rounded-t-lg h-12 w-24 bg-zinc-800 opacity-50 hover:opacity-90 border-r-2 border-zinc-900 text-white justify-center items-center cursor-pointer',
    selectedTab: 'flex first:ml-4 rounded-t-lg h-12 w-24 bg-zinc-800 opacity-100 hover:opacity-90 border-r-2 border-zinc-900 text-white justify-center items-center cursor-pointer',
}
