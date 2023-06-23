
export const Budget = ({ data, formatNumber }) => {

    function formatBudget() {
        if (data) {
            const perc = (Number(data.budget) / Number(data.revenue)) * 100
            const deficit = (Number(data.revenue) / Number(data.budget)) * 100
            const earnings = Number(data.revenue) - Number(data.budget)
            const percObj = {
                width: `${perc}%`,
                backgroundColor: 'rgb(3 105 161)',
                maxWidth: '100%',
                text: `${formatNumber(earnings)} profit`,
                bg: 'rgb(34 197 94)',
                bullet: 'rgb(34 197 94)'
            }
            if (perc > 100) {
                percObj.width = `${deficit}%`
                percObj.backgroundColor = 'rgb(239 68 68)'
                percObj.text = `${formatNumber(earnings)} deficit`
                percObj.bg = 'rgb(3 105 161)'
                percObj.bullet = 'rgb(239 68 68)'
            }
            if (isNaN(perc) || data.revenue === 0) {
                percObj.backgroundColor = 'rgb(51 65 85)'
                percObj.text = 'Profits unavailable'
                percObj.bg = 'rgb(51 65 85)'
                percObj.bullet = 'rgb(51 65 85)'
            }
            return percObj
        }
    }
    const format = formatBudget()

    return (
        <div>
            <div className={styles.metrics}>
                
                <div className={styles.progressBackground} style={{backgroundColor: format.bg}}>
                    <div className={styles.progress} style={format}></div>
                </div>

                <div className={styles.money}>

                    <div className={styles.budget}>
                        <div className={styles.legend}>
                            <div className={styles.bullet} style={{ backgroundColor: 'rgb(3 105 161)' }}></div>
                            <p>Budget</p>

                        </div>
                        <p>{formatNumber(data.budget)}</p>
                    </div>

                    <div className={styles.revenue}>
                        <div>
                            <div className={styles.legend}>
                                <div className={styles.bullet} style={{ backgroundColor: format.bullet }}></div>
                                <p>Revenue</p>
                            </div>
                        </div>
                        <p>{formatNumber(data.revenue)}</p>
                    </div>

                </div>
                <p>{format.text}</p>
            </div>
        </div>
    )
}
const styles = {
    metrics: 'flex w-full flex-col md:items-center text-white ml-4',
    money: 'flex md:items-center md:justify-center',
    budget: 'mt-2',
    revenue: 'my-2 ml-4',
    legend: 'flex items-center gap-2',
    bullet: 'h-3 w-3 rounded-full ml-2',
    progressBackground: 'mt-4 w-5/6 rounded-full h-2.5',
    progress: 'h-2.5 rounded-full',
}