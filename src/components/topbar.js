import { useState } from "react"
import { getTop20, getQuery } from "./requests"

export const Topbar = () => {
    const [search, setSearch] = useState('')
    const [data, setData] = useState([])

    console.log(data)

    function handleTop20() {
        getTop20().then(res => setData(res.data.results))
    }
    function handleSearch(query) {
        getQuery(query).then(res => setData(res.data.results))
    }

    return (
        <div style={styles.container}>

            <label for='searchInput'>Movie search</label>
            <input id='searchInput' type='text' autocomplete='off' onChange={e => setSearch(e.target.value)}>
            </input>
            <button style={styles.btn} onClick={() => handleSearch(search)}>search</button>

            <button style={styles.btn} onClick={handleTop20}>top 20</button>

            {data &&
            
            <div style={styles.box}>
                {data.map((movie) => 
                <div style={styles.movies}>
                    <strong><p>{movie.title}</p></strong>
                    <p>{movie.vote_average}</p>
                    <p>{movie.overview}</p>
                </div>
                )}
            </div>
            }

        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    btn: {
        width: '100px',
        margin: '10px'
    },
    box: {
        width: '80%',
        margin: '10px' 
    },
    movies: {
        margin: '10px',
        textAlign: 'center'
    }
}