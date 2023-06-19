
import { Link } from "react-router-dom"
import { getQuery } from "./requests"

export const Topbar = ({ search, setSearch, setData }) => {

    function handleSearch(query) {
        getQuery(query).then(res => res && setData(res.data.results))
    }

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.search}>
                    <Link to='/'>
                        <button className='mr-10 bg-sky-600'>home</button>
                    </Link>
                    <input className={styles.input} type='text' autoComplete='off' onChange={e => setSearch(e.target.value)}></input>
                    <Link to={`/results/${search}`}>
                        <button className={styles.searchBtn} onClick={() => handleSearch(search)}>🔎</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const styles = {
    container: 'flex justify-end text-center bg-sky-950',
    header: 'text-xl',
    search: 'flex items-center m-6',
    input: 'pl-1 rounded !outline-none',
    btn: 'rounded w-24 m-5 bg-teal-600',
    searchBtn: 'rounded w-12 bg-sky-600',
}