import React, {useCallback, useState} from "react";
import Button from "./button";
import Input from "./input";
import {enums} from "../../configs/consts";

const DisplayListAsGrid = props => {
    const {data, searchVal, onselect, onedit, ondelete, curPageIndex, numpages, header} = props

    const foundAMatch = (row, valueToBeMatched) => {
        let val = valueToBeMatched.toLowerCase()
        return row.name.toLowerCase().indexOf(val) !== -1
            || row.email.toLowerCase().indexOf(val) !== -1
            || row.role.toLowerCase().indexOf(val) !== -1
    }

    const displayHeader = () => {
        return header.map((row, index) => {
            let {id, name, email, role, checked} = row
            return <div key={'grid-row' + index} className={'line header'}>
                <span style={{minWidth: '30px'}}>
                    <Input classname='checkbox' type='checkbox' onchange={(e) => onselect(e, id)} isChecked={checked}/>
                </span>
                <span>{name}</span>
                <span style={{minWidth: '250px'}}>{email}</span>
                <span style={{minWidth: '100px'}}>{role}</span>
                <span>{checked}</span>
            </div>
        })
    }
    const displayList = () => {
        // console.log(data,searchVal)
        let itemsPerPage = enums.numberOfItemsPerPage
        let startPageIndex = (curPageIndex - 1) * itemsPerPage
        let endPageIndex = curPageIndex * itemsPerPage + 1
        // console.log(startPageIndex, endPageIndex)

        return data.slice(startPageIndex, endPageIndex).map((row, index) => {
            let {id, name, email, role, checked} = row
            let lineHeaderRow = id === -1
            if (searchVal !== '' && foundAMatch(row, searchVal) === false) return
            let selClass = checked ? 'gray' : ''
            return <div key={'grid-row' + index} className={lineHeaderRow ? 'line header' : 'line size12 ' + selClass}>
                <span style={{minWidth: '30px'}}>
                    <Input classname='checkbox' type='checkbox' onchange={(e) => onselect(e, id)} isChecked={checked}/>
                </span>
                <span>{name}</span>
                <span style={{minWidth: '250px'}}>{email}</span>
                <span style={{minWidth: '100px'}}>{role}</span>
                {lineHeaderRow === false && <span className='pad'>
                        <Button val='edit' onclick={() => onedit(id)}/>
                        <Button classname='red' val='delete' onclick={() => ondelete(id)}/>
                </span>}
                {lineHeaderRow && <span>{checked}</span>}
            </div>
        })
    }

    return <div className='height450 table'>
        <div className='right xymargin hwmargin bl'>{'found: ' + data.length} | page: {curPageIndex}</div>
        {displayHeader()}
        {displayList()}
    </div>
}
export default React.memo(DisplayListAsGrid)
