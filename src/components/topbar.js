import { useState, useEffect } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { toast } from "react-hot-toast"
import { getQuery } from "../api/getRequests"
import { HouseIcon } from "../icons/house"
import { TMDBLogo } from "../icons/logo"
import { MagnifyingIcon } from "../icons/magnifyingGlass"

export const Topbar = ({ search, setSearch, setData }) => {
    const [input, setInput] = useState('')
    const [lastSearch, setLastSearch] = useState('')
    const navigate = useNavigate()
    let location = useLocation()

    useEffect(() => {
        if (search) {
            getQuery(search).then(res => res.data.results.length > 0 ?
                (setData(res.data.results), navigate(`/results/${search}`), setLastSearch(search)) :
                (location.pathname.includes('/results') ?
                    (setSearch(lastSearch), toast.error('No results found.')) :
                    (toast.error('No results found.'))))
        }
    }, [search])

    function handleSearch(e) {
        e.preventDefault()
        setSearch(input)
    }
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.tmdb}>
                    <a href='https://www.themoviedb.org/?language=en-US' target="_blank" rel="noopener noreferrer">
                        <TMDBLogo />
                    </a>
                </div>
                <Link to='/'>
                    <HouseIcon />
                </Link>

                <form className={styles.form}>
                    <div className={styles.search}>
                        <input type='text' className={styles.input} autoComplete='off' placeholder='Search'
                            onChange={e => setInput(e.target.value)} />
                        <button className={styles.searchBtn}
                            onClick={(e) => handleSearch(e)}>
                            <MagnifyingIcon />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const styles = {
    container: 'flex justify-end items-center bg-black drop-shadow-lg',
    tmdb: 'absolute left-4 top-2',
    header: 'text-xl',
    form: 'flex items-center mr-4',
    search: 'relative pr-4',
    input: 'flex w-full m-4 rounded outline-none sm:pr-8 p-1 focus:outline-2 focus:outline-sky-500',
    searchBtn: 'px-2 p-1 absolute right-0 top-4',
}