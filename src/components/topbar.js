import { useState } from "react"
import { getTop20, getQuery } from "./requests"
import { Results } from "./results"

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
        <div>
        <div class={styles.container}>
        <div class={styles.search}>
            <input class={styles.input} type='text' autocomplete='off' onChange={e => setSearch(e.target.value)}></input>
            <button class={styles.searchBtn} onClick={() => handleSearch(search)}>🔎</button>
        </div>
            <button class={styles.btn} onClick={handleTop20}>top 20</button>
        </div>
            <Results data={data}/>
        </div>
    )
}

const styles = {
    container: 'flex justify-end text-center bg-teal-900',
    header: 'text-xl',
    search: 'flex items-center m-6',
    input: 'pl-1 rounded !outline-none',
    btn: 'rounded w-24 m-5 bg-teal-600',
    searchBtn: 'rounded w-12 bg-teal-600',
}