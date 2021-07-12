
export const getMarks = (x, i) => ({
    value: x,
    label: <span key={'label-' + x + i} className='markLabel markLabel90'>{x}</span>
})

export const getYrs = (start, end) => {
    let yrsArr = []
    for (let i = start; i <= end; i++) {
        yrsArr.push(i)
    }
    return yrsArr
}
