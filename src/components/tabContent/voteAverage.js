import { Average } from "../../icons/average"

export const VoteAverage = ({ data, formatNumber }) => {
    return (
        <div>
            <div className={styles.vote}>
                <div className={styles.score}>
                    <Average average={data.vote_average} />
                </div>
                <div className={styles.averageInfo}>
                    <div className='flex items-center text-white'>
                        <p className={styles.voteText}>Votes</p>
                        <p className='text-center'>{formatNumber(data.vote_count).slice(1)}</p>
                    </div>
                    <div className='flex items-center text-white'>
                        <p className={styles.voteText}>Popularity</p>
                        <p className='text-center'>{formatNumber(data.popularity).slice(1)}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

const styles = {
    vote: 'flex',
    score: 'm-2 h-20 w-20 text-2xl',
    averageInfo: 'flex flex-col justify-center',
    voteText: 'm-2',
}