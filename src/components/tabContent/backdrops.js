
export const Backdrops = ({backdrops, title, selectedTab}) => {
    return (
        <div>
                <div className={selectedTab === 2 ? `${styles.backdropBox}` : 'hidden'}>
                    {backdrops?.slice(0, 16).map((image, id) =>
                        <img src={`https://image.tmdb.org/t/p/original${image.file_path}`} alt={`${title} backdrop`}
                            className={styles.backdrop} key={id} />
                    )}
                </div>
        </div>
    )
}
const styles = {
    backdropBox: 'flex flex-wrap justify-evenly',
    backdrop: 'w-[98vw] md:w-[48vw] my-2',
}