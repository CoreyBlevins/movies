import { Link } from "react-router-dom"
import { Average } from "./average"

export const Results =({data, setMovieId}) => {


    return (
        <div>
            {data &&
            
            <div class={styles.grid}>
                {data.map((movie, id) => 
                <div class={styles.movie} key={id} onClick={() => setMovieId(movie.id)}>
                    <Link to={`/movie/${movie.id}`}>
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} className={styles.img}/>
                    <div class={styles.text}>
                        <p class={styles.title}>{movie.title}</p>
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
    grid: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-0 m-4',
    movie: 'flex flex-col items-center text-center rounded cursor-pointer',
    img: '',
    text: 'flex items-center justify-between text-white w-full p-2',
    title: 'font-medium text-left',
}