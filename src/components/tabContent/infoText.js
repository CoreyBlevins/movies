
export const InfoText = ({ data, credits }) => {

    function formatRelease() {
        if (data.release_date) {
            const dateArray = data.release_date.split('-')
            const year = dateArray[0]
            const month = dateArray[1]
            const day = dateArray[2]
            return `${month}/${day}/${year}`
        }
    }

    function formatRun() {
        if (data.runtime) {
            const hours = Math.floor(data.runtime / 60)
            const minutes = data.runtime % 60
            return `${hours}hrs ${minutes}mins`
        }
    }

    function findDirectors() {
        let directorArray = []
        for (let i = 0; i < credits.crew?.length; i++) {
            if (credits.crew[i].job === 'Director') {
                directorArray.push(credits.crew[i].name)
            }
        }
        return directorArray
    }

    function findWriters() {
        let writerArray = []
        for (let i = 0; i < credits.crew?.length; i++) {
            if (credits.crew[i].job === 'Writer') {
                writerArray.push(credits.crew[i].name)
            }
        }
        return writerArray
    }

    return (
        <div>
            <div className={styles.genres}>
                {data.genres && data.genres.map((genre, id) =>
                    <p className={styles.genre} key={id}>{genre.name}</p>
                )}
            </div>
            <div className={styles.time}>
                <p className={styles.release}>{formatRelease()}</p>
                <p>{formatRun()}</p>
            </div>
            <div className={styles.page}>
                <a href={data.homepage} target="_blank" rel="noreferrer">{data.homepage}</a>
            </div>
            <p className={styles.overview}>{data.overview}</p>
            <div className={styles.crew}>
                <p className={styles.job}>Directors</p>
                {findDirectors().map((director, id) =>
                    <p className={styles.title} key={id}>{director}</p>
                )}
            </div>
            <div className={styles.crew}>
                <p className={styles.job}>Writers</p>
                {findWriters().map((writer, id) =>
                    <p className={styles.title} key={id}>{writer}</p>
                )}
            </div>
            <div className={styles.crew}>
                <p className={styles.job}>Production</p>
                {data.production_companies?.map((company, id) =>
                    <p className={styles.title} key={id}>{company.name}</p>)}

            </div>
        </div>
    )
}

const styles = {
    genres: 'flex text-white flex-wrap',
    genre: 'm-2',
    time: 'flex ml-2 text-white',
    release: 'mr-4',
    page: 'm-2 text-sky-500',
    overview: 'text-white m-2 md:w-[50vw]',
    job: 'mr-2 text-green-500',
    crew: 'flex m-2 text-white flex-wrap',
    title: 'mx-2',
}