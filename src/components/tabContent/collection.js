
export const Collection = ({ collection }) => {
    return (
        <div>
            {collection &&
                <div className={styles.collection}>
                    {collection.poster_path !== null ?
                        <div>
                            <img src={`https://image.tmdb.org/t/p/original${collection?.poster_path}`}
                                alt={`${collection.name} poster`} className={styles.collectionPoster} />
                            <p>{collection.name}</p>
                        </div>
                        :
                        <div>

                        </div>
                    }
                </div>
            }
        </div>
    )
}

const styles = {
    collection: 'flex flex-col w-fit text-center mt-2 sm:mt-0 mx-4 text-white bg-gradient-to-br from-zinc-700 to-zinc-800 pb-3',
    collectionPoster: 'md:w-[30vw] xl:w-[20vw] mb-3',
}