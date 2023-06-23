import { Link } from "react-router-dom"
import { Average } from "../icons/average"

export const Results =({data, setMovieId}) => {

    return (
        <div>
            {data &&
            
            <div className={styles.grid}>
                {data.map((movie, id) => 
                <div className={styles.movie} key={id} onClick={() => setMovieId(movie.id)}>
                    <Link to={`/movie/${movie.id}`}>
                    {movie.poster_path ? 
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                    alt={movie.title}
                    />
                    : 
                    <div className={styles.background}>
                    <img src={`https://image.tmdb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg`} 
                    alt={movie.title} className={styles.placeholder} 
                    />
                    </div>
                    }
                    <div className={styles.text}>
                        <p className={styles.title}>{movie.title}</p>
                        <Average average={movie.vote_average}/>
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
    grid: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-2 m-4',
    movie: 'flex flex-col items-center text-center rounded cursor-pointer hover:bg-gradient-to-br from-zinc-700 to-zinc-800 h-fit',
    background: 'bg-gradient-to-br',
    placeholder: 'opacity-0',
    text: 'flex items-center justify-between text-white w-full p-2',
    title: 'font-medium text-left',
}