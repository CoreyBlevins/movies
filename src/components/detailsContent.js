import { Collection } from "./tabContent/collection"
import { InfoText } from "./tabContent/infoText"
import { VoteAverage } from "./tabContent/voteAverage"
import { Budget } from "./tabContent/budget"
import { Posters } from "./tabContent/posters"
import { Backdrops } from "./tabContent/backdrops"
import { Videos } from "./tabContent/videos"
import { Cast } from "./tabContent/cast"
import { Results } from "./results"

export const DetailsContent = ({ data, images, videos, credits, recommended, selectedTab, setMovieId }) => {

    function formatNumber(numberString) {
        const formatted = Number(numberString).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        })
        return formatted.slice(0, -3)
    }


    return (
        <div>
            <div className={styles.box}>
                <div className={selectedTab === 0 ? `${styles.infoBox}` : 'hidden'}>
                    <Collection collection={data.belongs_to_collection} />
                    <div className={styles.info}>
                    <InfoText data={data} credits={credits}/>
                    <VoteAverage data={data} formatNumber={formatNumber} />

                    </div>
                    {/* <Budget data={data} formatNumber={formatNumber} /> */}

                    {/* <div className={styles.producers}>
                        {data.production_companies?.map((co, id) =>
                            <div className={styles.company} key={id}>
                                {co.logo_path !== null ?
                                    <img src={`https://image.tmdb.org/t/p/original${co.logo_path}`}
                                        alt={`${co.name} logo`} className={styles.logo} key={id} />
                                    :
                                    <div className={styles.background}>
                                        <img src={`https://image.tmdb.org/t/p/original/h0rjX5vjW5r8yEnUBStFarjcLT4.png`}
                                            alt={`${co.name} logo`} className={styles.logoPlaceholder} key={id} />
                                    </div>}
                                <p>{co.name}</p>
                            </div>
                        )}
                    </div> */}
                </div>

                <Posters posters={images.posters} title={data.title} selectedTab={selectedTab} />
                <Backdrops backdrops={images.backdrops} title={data.title} selectedTab={selectedTab} />
                <Videos videos={videos} selectedTab={selectedTab} />
                <Cast credits={credits} selectedTab={selectedTab} />

                <div className={selectedTab === 5 ? `${styles.similarBox}` : 'hidden'}>
                    <Results data={recommended.slice(0, 20)} setMovieId={setMovieId} />
                </div>

            </div>
        </div>
    )
}
const styles = {
    box: 'w-full bg-zinc-800 pt-4',
    infoBox: 'flex pb-10 px-4',
    info: 'p-2 w-[60vw]',
    // Production styles
    producers: 'flex flex-col items-center bg-gradient-to-br from-zinc-700 to-zinc-800 rounded p-2',
    company: 'flex flex-col text-white justify-center items-center',
    logo: 'w-[8vw] m-4 ',
    logoPlaceholder: 'w-[8vw] m-2 opacity-0',
    //Placeholder background
    background: 'bg-gradient-to-br from-zinc-800 to-zinc-900 rounded',

}