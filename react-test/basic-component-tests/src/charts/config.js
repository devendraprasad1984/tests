export const getMarks = (x, i) => ({
    ival: i,
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

export const getQtrs = (start, end) => {
    let yrsArr = []
    let qtrs = ['Q1', 'Q2', 'Q3', 'Q4']
    for (let i = start; i <= end; i++) {
        for (let j of qtrs)
            yrsArr.push(i.toString() + j.toString())
    }
    return yrsArr
}
