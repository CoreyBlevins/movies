
export const Cast = ({ selectedTab, credits }) => {

    return (
        <div>
            <div className={selectedTab === 4 ? `${styles.castBox}` : 'hidden'}>
                {credits?.cast?.slice(0, 21).map((person, id) =>
                    <div className={styles.person} key={id}>
                        {person.profile_path ?
                            <img src={`https://image.tmdb.org/t/p/original${person.profile_path}`} alt={person.name}
                                className={styles.headshot} />
                            :
                            <div className={styles.placeholderBackground}>
                                <img src={`https://image.tmdb.org/t/p/original/4MVApMiARrecuVjTCPfi6Z7biLW.jpg`} alt={person.name}
                                    className={styles.placeholder} />
                            </div>
                        }
                        <div className={styles.personInfo}>
                            <p>{person.name}</p>
                            <p>{person.character}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

const styles = {
    castBox: 'flex flex-wrap justify-evenly',
    person: 'flex text-white m-4 w-[98vw] sm:w-[30vw] bg-gradient-to-br from-zinc-700 to-zinc-800 rounded',
    headshot: 'h-52',
    placeholderBackground: 'bg-gradient-to-br from-zinc-800 to-zinc-900',
    placeholder: 'h-52 opacity-0',
    personInfo: 'mx-4 mt-4',
}