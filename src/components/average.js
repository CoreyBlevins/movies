
export const Average = ({ average }) => {
    const score = Math.floor(average)
    const value = String(average).length === 1 ? `${average}.0` : String(average).slice(0, 3)

    function getColoredScore() {
        if (score >= 8) {
            return (
                <div className={`border border-green-500 text-green-500 rounded p-1 ml-2`}>
                    <p>{value}</p>
                </div>
            )
        }
        else if (score < 8 && score >= 5) {
            return (
                <div className={`border border-yellow-500 text-yellow-500 rounded p-1 ml-2`}>
                    <p>{value}</p>
                </div>
            )
        }
        else if (score === 0) {
            return (
                <div className={`border border-slate-500 text-slate-500 rounded p-1 ml-2`}>
                    <p>N/A</p>
                </div>
            )
        }
        else return (
            <div className={`border border-red-500 text-red-500 rounded p-1 ml-2`}>
                <p>{value}</p>
            </div>
        )
    }

    return (
        <div>
            {getColoredScore()}
        </div>
    )
}
