
export const Cast = ({ selectedTab, credits }) => {
    return (
        <div>
            <div className={selectedTab === 4 ? `${styles.castBox}` : 'hidden'}>
                {credits?.cast?.slice(0, 21).map((person, id) =>
                    <div className={styles.person} key={id}>
                        <img src={`https://image.tmdb.org/t/p/original${person.profile_path}`} alt={person.name}
                            className={styles.headshot} />
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
    personInfo: 'mx-4 mt-4',
}