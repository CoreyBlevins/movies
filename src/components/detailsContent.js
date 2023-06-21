
export const DetailsContent = ({data, images, selectedTab}) => {
    console.log('d', data)

    return (
        <div>
            <div className={styles.box}>
                <div className={selectedTab === 0 ? `${styles.infoBox}` : 'hidden'}> 
                <div className={styles.producers}>
                {data.production_companies?.map((co, id) => 
                <div className={styles.company} key={id}>
                    {co.logo_path !== null ? 
                    <img src={`https://image.tmdb.org/t/p/original${co.logo_path}`} 
                    alt={`${co.name} logo`} className={styles.logo} key={id}/>
                    : 
                    <div className={styles.background}>
                    <img src={`https://image.tmdb.org/t/p/original/h0rjX5vjW5r8yEnUBStFarjcLT4.png`} 
                    alt={`${co.name} logo`} className={styles.logoPlaceholder} key={id}/>
                    </div>}
                    <p>{co.name}</p>
                </div>
                )}
                </div>

                {data.belongs_to_collection &&
                <div className={styles.collection}>
                    <img src={`https://image.tmdb.org/t/p/original${data?.belongs_to_collection?.poster_path}`} 
                    alt={`${data.belongs_to_collection.name} poster`} className={styles.collectionPoster}/>
                    <p>{data.belongs_to_collection.name}</p>
                </div>
                }
                </div>

                <div className={selectedTab === 1 ? `${styles.posterBox}` : 'hidden'}>
                {images?.posters?.slice(0, 24).map((image, id) => 
                    <img src={`https://image.tmdb.org/t/p/original${image.file_path}`} alt={`${data.title} poster`} 
                    className={styles.poster} key={id}/>
                )}
                </div>

                <div className={selectedTab === 2 ? `${styles.backdropBox}` : 'hidden'}>
                {images?.backdrops?.slice(0, 14).map((image, id) => 
                    <img src={`https://image.tmdb.org/t/p/original${image.file_path}`} alt={`${data.title} backdrop`} 
                    className={styles.backdrop} key={id}/>
                )}
                </div>

            </div>
        </div>
    )
}
const styles = {
    box: 'w-full bg-zinc-800 pt-4',
    infoBox: 'flex justify-evenly pb-10',
    producers: 'grid grid-cols-2 gap-4 items-center bg-gradient-to-br from-zinc-700 to-zinc-800 rounded p-2',
    company: 'text-center text-white',
    logo: 'w-[15vw] m-2',
    logoPlaceholder: 'w-[15vw] m-2 opacity-0',
    background: 'bg-gradient-to-br from-zinc-800 to-zinc-900 rounded',
    metrics: 'text-white',
    collection: 'flex flex-col w-fit text-center mx-4 text-white bg-gradient-to-br from-zinc-700 to-zinc-800',
    collectionPoster: 'w-[25vw] mb-3',
    posterBox: 'flex flex-wrap justify-evenly',
    poster: 'w-[46vw] sm:w-[22vw] xl:w-[11vw] mx-[0.1vw] mt-4',
    backdropBox: 'flex flex-wrap justify-evenly',
    backdrop: 'w-[48vw] my-2',
}