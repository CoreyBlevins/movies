import { Average } from "./average"

export const DetailsContent = ({ data, images, videos, selectedTab }) => {

    function formatNumber(numberString) {
        const formatted = Number(numberString).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        })
        return formatted.slice(0, -3)
    }

    function budgetPercent() {
        if (data) {
            const perc = (Number(data.budget) / Number(data.revenue)) * 100
            const percObj = {
                width: `${perc}%`,
                backgroundColor: 'rgb(3 105 161)',
                maxWidth: '100%',
                text: `${Math.floor(100 - perc)}% profit`
            }
            if (perc > 100) {
                percObj.backgroundColor = 'rgb(239 68 68)'
                percObj.text = `${Math.floor(perc)}% deficit`
            }
            if (isNaN(perc)) {
                percObj.backgroundColor = 'rgb(51 65 85)'
                percObj.text = 'Profits unavailable'
            }
            return percObj
        }
    }

    return (
        <div>
            <div className={styles.box}>
                <div className={selectedTab === 0 ? `${styles.infoBox}` : 'hidden'}>

                    <div className={styles.info}>
                        <div className={styles.metrics}>
                            <div className={styles.money}>
                                <div className={styles.budget}>
                                    <p className={styles.moneyText}>Budget</p>
                                    <p>{formatNumber(data.budget)}</p>
                                </div>
                                <div className={styles.revenue}>
                                    <p className={styles.moneyText}>Revenue</p>
                                    <p>{formatNumber(data.revenue)}</p>
                                </div>
                            </div>
                            <p>{budgetPercent().text}</p>
                            <div className={styles.progressBackground}>
                                <div className={styles.progress} style={budgetPercent()}></div>
                            </div>
                        </div>

                        <div className={styles.vote}>
                            <Average average={data.vote_average} />
                            <div className={styles.averageInfo}>
                                <div>
                                    <p className={styles.voteText}>Votes</p>
                                    <p className='text-center'>{formatNumber(data.vote_count).slice(1)}</p>
                                </div>
                                <div>
                                    <p className={styles.voteText}>Popularity</p>
                                    <p className='text-center'>{Math.floor(data.popularity)}</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className={styles.producers}>
                        {data.production_companies?.map((co, id) =>
                            <div className={styles.company} key={id}>
                                {co.logo_path !== null ?
                                    <img src={`https://image.tmdb.org/t/p/original${co.logo_path}`}
                                        alt={`${co.name} logo`} className={styles.logo} key={id} />
                                    :
                                    <div className={styles.background}>
                                        <img src={`https://image.tmdb.org/t/p/original/h0rjX5vjW5r8yEnUBStFarjcLT4.png`}
                                            alt={`${co.name} logo`} className={styles.logoPlaceholder} key={id} />
                                    </div>}
                                <p>{co.name}</p>
                            </div>
                        )}
                    </div>

                    {data.belongs_to_collection &&
                        <div className={styles.collection}>
                            {data.belongs_to_collection.poster_path !== null ?
                                <img src={`https://image.tmdb.org/t/p/original${data?.belongs_to_collection?.poster_path}`}
                                    alt={`${data.belongs_to_collection.name} poster`} className={styles.collectionPoster} />
                                :
                                <div className={styles.background}>
                                    <img src={`https://image.tmdb.org/t/p/original/gC3tW9a45RGOzzSh6wv91pFnmFr.jpg`}
                                        alt={`${data.belongs_to_collection.name} poster`} className={styles.collectionPosterPlaceholder} />
                                </div>
                            }
                            <p>{data.belongs_to_collection.name}</p>
                        </div>
                    }
                </div>

                <div className={selectedTab === 1 ? `${styles.posterBox}` : 'hidden'}>
                    {images?.posters?.slice(0, 24).map((image, id) =>
                        <img src={`https://image.tmdb.org/t/p/original${image.file_path}`} alt={`${data.title} poster`}
                            className={styles.poster} key={id} />
                    )}
                </div>

                <div className={selectedTab === 2 ? `${styles.backdropBox}` : 'hidden'}>
                    {images?.backdrops?.slice(0, 16).map((image, id) =>
                        <img src={`https://image.tmdb.org/t/p/original${image.file_path}`} alt={`${data.title} backdrop`}
                            className={styles.backdrop} key={id} />
                    )}
                </div>

                <div className={selectedTab === 3 ? `${styles.videoBox}` : 'hidden'}>
                    {videos?.slice(0, 8).map((video, id) =>

                        <iframe src={`https://www.youtube.com/embed/${video.key}`} title={video.name}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className={styles.video} key={id} />

                    )}
                </div>

            </div>
        </div>
    )
}
const styles = {
    box: 'w-full bg-zinc-800 pt-4',
    infoBox: 'flex justify-between pb-10 px-4',
    info: 'flex flex-col w-2/6 justify-evenly mx-4 text-white',
    //Budget styles
    metrics: 'flex flex-col w-full h-full justify-center items-center bg-gradient-to-br from-zinc-700 to-zinc-800 mb-2',
    money: 'flex items-center justify-center',
    moneyText: 'text-center',
    budget: 'm-2',
    revenue: 'm-2',
    progressBackground: 'mt-4 w-1/2 bg-green-500 rounded-full h-2.5',
    progress: 'h-2.5 rounded-full',
    //vote styles
    vote: 'flex flex-col items-center justify-center w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800',
    averageInfo: 'flex',
    voteText: 'm-2 text-center',
    // Production styles
    producers: 'grid grid-cols-2 gap-4 items-center bg-gradient-to-br from-zinc-700 to-zinc-800 rounded p-2',
    company: 'flex flex-col text-white justify-center items-center',
    logo: 'w-[8vw] m-4 ',
    logoPlaceholder: 'w-[8vw] m-2 opacity-0',
    //Placeholder background
    background: 'bg-gradient-to-br from-zinc-800 to-zinc-900 rounded',
    //Collection styles
    collection: 'flex flex-col w-fit text-center mx-4 text-white bg-gradient-to-br from-zinc-700 to-zinc-800 pb-3',
    collectionPoster: 'w-[25vw] mb-3',
    collectionPosterPlaceholder: 'w-[25vw] mb-3 opacity-0',
    //Poster styles
    posterBox: 'flex flex-wrap justify-evenly',
    poster: 'w-[46vw] sm:w-[22vw] xl:w-[11vw] mx-[0.1vw] mt-4',
    //Backdrop styles
    backdropBox: 'flex flex-wrap justify-evenly',
    backdrop: 'w-[48vw] my-2',
    //Video styles
    videoBox: 'flex flex-wrap justify-evenly',
    video: ' w-[98vw] md:w-[48vw] h-[400px] my-2 ',
}