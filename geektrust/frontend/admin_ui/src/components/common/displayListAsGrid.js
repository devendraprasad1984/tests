import React, {useCallback, useState} from "react";
import Button from "./button";
import Input from "./input";

const DisplayListAsGrid = props => {
    const {data, updateBack} = props

    const handleEditClick = id => {
        console.log('clicked edit', id)
    }
    const handleDeleteClick = id => {
        console.log('clicked delete', id)
    }
    const handleRowSelect = (e, id) => {
        let isChecked = e.target.checked === true
        let found = data.filter(x => x.id === id)[0]
        found.checked = isChecked
        updateBack(data)
    }

    const displayList = useCallback(() => {
        // console.log('data', data)
        return data.map((row, index) => {
            let {id, name, email, role} = row
            let isRowChecked=row.checked === true
            let selClass = isRowChecked ? 'gray' : ''
            return <div key={'grid-row' + index} id={'div-grid-row-' + index} className={'line ' + selClass}>
                <span style={{minWidth: '30px'}}>
                    <Input classname='checkbox' type='checkbox' onchange={(e) => handleRowSelect(e, id)} isChecked={isRowChecked}/>
                </span>
                <span>{name}</span>
                <span style={{minWidth: '250px'}}>{email}</span>
                <span style={{minWidth: '100px'}}>{role}</span>
                <span className='pad'>
                        <Button val='edit' onclick={() => handleEditClick(id)}/>
                        <Button classname='red' val='delete' onclick={() => handleDeleteClick(id)}/>
                    </span>
            </div>
        })
    }, [data])

    return <div className='height450 table'>{displayList()}</div>
}
export default React.memo(DisplayListAsGrid)
