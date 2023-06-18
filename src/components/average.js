
export const Average = ({average}) => {
    const score = Math.floor(average)


  function getColor () {
    let color = 'rose'
    switch(true){
        case score >= 8:
            color = 'green'
            break
        case score < 8 && score >= 5:
            color = 'yellow'
            break
        case score === 0:
            color = 'slate'
            break
        default:
            break
          }
    return color
  }
  function getValue () {
    if (score === 0){
        return <p>N/A</p>
    }
    else{
        return <p>{String(average).slice(0, 3)}</p>
    }
  }

    return (
        <div className={`border border-${getColor()}-500 text-${getColor()}-500 rounded p-1 ml-2`}>
            <div>{getValue()}</div>
        </div>
    )
}
