

export const Results =({data}) => {
    return (
        <div>
            {data &&
            
            <div class={styles.grid}>
                {data.map((movie) => 
                <div class={styles.movie}>
                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title}/>
                    <div class={styles.text}>
                        <p class={styles.title}>{movie.title}</p>
                        <p class={styles.vote}>{movie.vote_average}</p>
                    </div>
                </div>
                )}
            </div>
            }
        </div>
    )
}

const styles = {
    grid: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-4',
    movie: 'flex flex-col items-center text-center rounded bg-neutral-400 cursor-pointer',
    text: 'flex items-center space-x-2 p-2',
    title: 'font-medium',
    vote: 'border border-neutral-500 rounded p-1',
}