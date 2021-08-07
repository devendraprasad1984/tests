import React, {useCallback, useState} from "react";
import Button from "./button";
import Input from "./input";

const DisplayListAsGrid = props => {
    const {data, searchVal, onselect, onedit, ondelete} = props

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
                    <Input classname='checkbox' type='checkbox' onchange={(e) => onselect(e, id)} isChecked={checked}/>
                </span>
                <span>{name}</span>
                <span style={{minWidth: '250px'}}>{email}</span>
                <span style={{minWidth: '100px'}}>{role}</span>
                <span className='pad'>
                        <Button val='edit' onclick={() => onedit(id)}/>
                        <Button classname='red' val='delete' onclick={() => ondelete(id)}/>
                    </span>
            </div>
        })
    }

    return <div className='height450 table'>
        <div className='right xymargin hwmargin bl'>{'found: '+data.length}</div>
        {displayList()}
    </div>
}
export default React.memo(DisplayListAsGrid)
