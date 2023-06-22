import { useState, useEffect } from "react"
import { getCredits, getDetails, getImages, getRecommendations, getVideos } from "./requests"
import { DetailsContent } from "./detailsContent"


export const MovieDetail = ({ movieId, setMovieId }) => {
    const [data, setData] = useState([])
    const [images, setImages] = useState([])
    const [videos, setVideos] = useState([])
    const [credits, setCredits] = useState([])
    const [recommended, setRecommended] = useState([])
    const [selectedTab, setSelectedTab] = useState(0)
    const content = ['info', 'posters', 'backdrops', 'videos', 'cast', 'similar']

    useEffect(() => {
        getDetails(movieId).then(res => setData(res.data))
        getImages(movieId).then(res => setImages(res.data))
        getVideos(movieId).then(res => setVideos(res.data.results))
        getCredits(movieId).then(res => setCredits(res.data))
        getRecommendations(movieId).then(res => setRecommended(res.data.results))
    }, [movieId])

    console.log('d', data, 'i', images, 'v', videos, 'c', credits, 'r', recommended)

    return (
        <div>
            <div className={styles.container}>
                <img src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} className={styles.img} alt={data.title} />
                <div className={styles.text}>
                    <p className={styles.title}>{data.title}</p>
                    <p className={styles.tag}>{data.tagline}</p>
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
            <DetailsContent
                data={data}
                images={images}
                videos={videos}
                credits={credits}
                recommended={recommended}
                selectedTab={selectedTab}
                setMovieId={setMovieId}
            />
        </div>
    )
}

const styles = {
    container: 'relative',
    img: 'opacity-70 h-[80vh] w-full object-cover object-top',
    text: 'absolute top-20 left-4 text-white z-10 drop-shadow-lg',
    title: 'text-5xl',
    tag: 'text-2xl mt-2',
    tabs: 'flex absolute bottom-0 w-screen sm:w-fit overflow-scroll sm:overflow-hidden',
    tab: 'flex sm:first:ml-4 rounded-t-lg h-12 p-2 w-24 bg-zinc-800 opacity-50 hover:opacity-90 border-r-2 border-zinc-900 text-white justify-center items-center cursor-pointer',
    selectedTab: 'flex sm:first:ml-4 rounded-t-lg h-12 p-2 w-24 bg-zinc-800 opacity-100 hover:opacity-90 border-r-2 border-zinc-900 text-white justify-center items-center cursor-pointer',
}
