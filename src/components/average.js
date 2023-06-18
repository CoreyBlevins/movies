
export const Average = ({ average }) => {
    const score = Math.floor(average)

    function getColoredScore() {
        console.log(score)
        if (score >= 8) {
            return (
                <div className={`border border-green-500 text-green-500 rounded p-1 ml-2`}>
                    <p>{String(average).slice(0, 3)}</p>
                </div>
            )
        }
        else if (score < 8 && score >= 5) {
            return (
                <div className={`border border-yellow-500 text-yellow-500 rounded p-1 ml-2`}>
                    <p>{String(average).slice(0, 3)}</p>
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
                <p>{String(average).slice(0, 3)}</p>
            </div>
        )
    }

    return (
        <div>
            {getColoredScore()}
        </div>
    )
}
