import React, {useCallback, useState} from "react";
import Button from "./button";
import Input from "./input";

const DisplayListAsGrid = props => {
    const {data, updateBack, searchVal} = props

    const handleEditClick = id => {
        console.log('clicked edit', id)
    }
    const handleDeleteClick = id => {
        console.log('clicked delete', id)
    }
    const handleRowSelect = (e, id) => {
        //shallow copy magic here, changes reflect in main data and then we update parent and rerender
        let found = data.filter(x => x.id === id)[0]
        found.checked = e.target.checked
        // console.log('update',data)
        updateBack(data)
    }
    const foundAMatch = (row, valueToBeMatched) => {
        let val = valueToBeMatched.toLowerCase()
        return row.name.toLowerCase().indexOf(val) !== -1
            || row.email.toLowerCase().indexOf(val) !== -1
            || row.role.toLowerCase().indexOf(val) !== -1
    }

    const displayList = () => {
        // console.log(data,searchVal)
        return data.map((row, index) => {
            let {id, name, email, role, checked} = row
            if (searchVal !== '' && foundAMatch(row, searchVal) === false) return
            let selClass = checked ? 'gray' : ''
            return <div key={'grid-row' + index} className={'line ' + selClass}>
                <span style={{minWidth: '30px'}}>
                    <Input type='checkbox' onchange={(e) => handleRowSelect(e, id)} isChecked={checked}/>
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
    }

    return <div className='height450 table'>{displayList()}</div>
}
export default React.memo(DisplayListAsGrid)
