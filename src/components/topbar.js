import { useState, useEffect } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { toast } from "react-hot-toast"
import { getQuery } from "./requests"


export const Topbar = ({ search, setSearch, setData }) => {
    const [input, setInput] = useState('')
    const [lastSearch, setLastSearch] = useState('')
    const navigate = useNavigate()
    let location = useLocation()

    useEffect(()=> {
        if (search) {
            getQuery(search).then(res => res.data.results.length > 0 ? 
                (setData(res.data.results), navigate(`/results/${search}`), setLastSearch(search)) : 
                (location.pathname.includes('/results') ? 
                (setSearch(lastSearch), toast('No results found.')) :
                (toast('No results found.'))))
        }
    }, [search])

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.search}>
                    <Link to='/'>
                        <button className='mr-10 bg-sky-600'>home</button>
                    </Link>
                    <input className={styles.input} type='text' autoComplete='off' onChange={e => setInput(e.target.value)}></input>
                    <button className={styles.searchBtn} onClick={() => setSearch(input)}>🔎</button>
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