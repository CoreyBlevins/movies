
export const Videos = ({videos, selectedTab}) => {
    return (
        <div>
                <div className={selectedTab === 3 ? `${styles.videoBox}` : 'hidden'}>
                    {videos?.slice(0, 8).map((video, id) =>

                        <iframe src={`https://www.youtube.com/embed/${video.key}`} title={video.name}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className={styles.video} key={id} />
                    )}
                </div>
        </div>
    )
}
const styles = {
    videoBox: 'flex flex-wrap justify-evenly',
    video: ' w-[98vw] lg:w-[48vw] h-[400px] my-2 ',
}