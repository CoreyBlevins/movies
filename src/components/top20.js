import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getTop20 } from "./requests"

export const Top20 = ({setMovieId}) => {
    const [data, setData] = useState([])

    useEffect(() => {
        getTop20().then(res => setData(res.data.results))
    }, [])

    return (
        <div>
            {data &&
            
            <div class={styles.grid}>
                {data.map((movie, id) => 
                <div class={styles.movie} key={id} onClick={() => setMovieId(movie.id)}>
                    <Link to={`/movie/${movie.id}`}>
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title}/>
                    <div class={styles.text}>
                        <p class={styles.title}>{movie.title}</p>
                        <p class={styles.vote}>{movie.vote_average}</p>
                    </div>
                    </Link>
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
    text: 'flex items-center justify-between w-full p-2',
    title: 'font-medium pl-2',
    vote: 'border border-neutral-500 rounded p-1',
}