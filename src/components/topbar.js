
import { Link } from "react-router-dom"
import { getQuery } from "./requests"


export const Topbar = ({search, setSearch, setData}) => {


    function handleSearch(query) {
        getQuery(query).then(res => setData(res.data.results))
    }

    return (
        <div>
        <div class={styles.container}>
        <div class={styles.search}>
            <input class={styles.input} type='text' autocomplete='off' onChange={e => setSearch(e.target.value)}></input>
        <Link to={`/results/${search}`}>
            <button class={styles.searchBtn} onClick={() => handleSearch(search)}>🔎</button>
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