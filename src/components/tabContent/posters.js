
export const Posters = ({ posters, title, selectedTab }) => {
    return (
        <div>
            <div className={selectedTab === 1 ? `${styles.posterBox}` : 'hidden'}>
                {posters?.slice(0, 32).map((image, id) =>
                    <img src={`https://image.tmdb.org/t/p/original${image.file_path}`} alt={`${title} poster`}
                        className={styles.poster} key={id} />
                )}
            </div>
        </div>
    )
}

const styles = {
    posterBox: 'flex flex-wrap justify-evenly',
    poster: 'w-[46vw] sm:w-[22vw] xl:w-[11vw] mx-[0.1vw] mt-4',
}