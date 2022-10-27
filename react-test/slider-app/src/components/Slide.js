import React from 'react'

const Slide = props => {
    const {page} = props

    return <React.Fragment>
        <div>Hello Slide - {page}</div>
    </React.Fragment>
}

export default Slide