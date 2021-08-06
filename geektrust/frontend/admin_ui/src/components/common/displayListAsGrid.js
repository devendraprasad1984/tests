import React from "react";

const DisplayListAsGrid = props => {
    const {data} = props

    const displayList = () => {
        return data.map((row, index) => {
            return <div key={'grid-row' + index} id={'div-grid-row-' + index}>{JSON.stringify(row)}</div>
        })
    }
    return <div>{displayList()}</div>
}
export default React.memo(DisplayListAsGrid)
