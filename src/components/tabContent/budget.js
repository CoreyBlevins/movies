
export const Budget = ({ data, formatNumber }) => {

    function budgetPercent() {
        if (data) {
            const perc = (Number(data.budget) / Number(data.revenue)) * 100
            const earnings = Number(data.revenue) - Number(data.budget)
            const percObj = {
                width: `${perc}%`,
                backgroundColor: 'rgb(3 105 161)',
                maxWidth: '100%',
                text: `${formatNumber(earnings)} profit`
            }
            if (perc > 100) {
                percObj.backgroundColor = 'rgb(239 68 68)'
                percObj.text = `${formatNumber(earnings)} deficit`
            }
            if (isNaN(perc) || data.revenue === 0) {
                percObj.backgroundColor = 'rgb(51 65 85)'
                percObj.text = 'Profits unavailable'
            }
            return percObj
        }
    }

    return (
        <div>
            <div className={styles.metrics}>
                <div className={styles.money}>
                    <div className={styles.budget}>
                        <p className={styles.moneyText}>Budget</p>
                        <p>{formatNumber(data.budget)}</p>
                    </div>
                    <div className={styles.revenue}>
                        <p className={styles.moneyText}>Revenue</p>
                        <p>{formatNumber(data.revenue)}</p>
                    </div>
                </div>
                <p>{budgetPercent().text}</p>
                <div className={styles.progressBackground}>
                    <div className={styles.progress} style={budgetPercent()}></div>
                </div>
            </div>
        </div>
    )
}
const styles = {
    metrics: 'flex flex-col w-full h-full justify-center items-center bg-gradient-to-br from-zinc-700 to-zinc-800 mb-2',
    money: 'flex items-center justify-center',
    moneyText: 'text-center',
    budget: 'm-2',
    revenue: 'm-2',
    progressBackground: 'mt-4 w-1/2 bg-green-500 rounded-full h-2.5',
    progress: 'h-2.5 rounded-full',
}