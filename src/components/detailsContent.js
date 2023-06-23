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
                <div className={selectedTab === 0 ? `${styles.mobileInfoBox}` : 'hidden'}>
                    <div className={styles.mobileInfo}>
                        <InfoText data={data} credits={credits} />
                        <VoteAverage data={data} formatNumber={formatNumber} />
                        <Budget data={data} formatNumber={formatNumber} />
                    </div>
                    <Collection collection={data.belongs_to_collection} />
                </div>

                <div className={selectedTab === 0 ? `${styles.infoBox}` : 'hidden'}>
                    <Collection collection={data.belongs_to_collection} />
                    <div className={styles.info}>
                        <InfoText data={data} credits={credits} />
                        <div className='flex'>
                            <VoteAverage data={data} formatNumber={formatNumber} />
                            <Budget data={data} formatNumber={formatNumber} />
                        </div>
                    </div>
                </div>
            </div>

            <Posters posters={images.posters} title={data.title} selectedTab={selectedTab} />
            <Backdrops backdrops={images.backdrops} title={data.title} selectedTab={selectedTab} />
            <Videos videos={videos} selectedTab={selectedTab} />
            <Cast credits={credits} selectedTab={selectedTab} />

            <div className={selectedTab === 5 ? `${styles.similarBox}` : 'hidden'}>
                <Results data={recommended.slice(0, 20)} setMovieId={setMovieId} />
            </div>

        </div>

    )
}
const styles = {
    box: 'w-full bg-zinc-800 pt-4',
    infoBox: 'pb-10 px-4 hidden sm:flex',
    info: 'p-2 w-[60vw]',
    mobileInfoBox: 'pb-10 px-4 sm:hidden',
    mobileInfo: 'flex flex-col',
}