import React, {useCallback, useState} from "react";
import Button from "./button";
import Input from "./input";
import {config, enums} from "../../configs/consts";

const DisplayListAsGrid = props => {
    const {data, searchVal, onselect, onedit, ondelete, numpages, curPageIndex, header, onSelectAll, pageSearchKeyDown} = props

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
                <span style={{minWidth: '30px'}}><Button val='' onclick={() => onSelectAll(id)}/></span>
                <span>{name}</span>
                <span style={{minWidth: '250px'}}>{email}</span>
                <span style={{minWidth: '100px'}}>{role}</span>
                <span>{checked}</span>
            </div>
        })
    }
    const displayList = () => {
        // console.log(data,searchVal)
        let {_start, _end} = config.utils.getPageIndex(curPageIndex)
        return data.slice(_start, _end).map((row, index) => {
            let {id, name, email, role, checked} = row
            if (searchVal !== '' && foundAMatch(row, searchVal) === false) return
            let selClass = checked ? 'gray' : ''
            return <div key={'grid-row' + index} className={'line size12 ' + selClass}>
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
                <span>{checked}</span>
            </div>
        })
    }

    return <div className=''>
        <div className='atright bl row pad'>
            <span>found: {data.length}</span>
            <span>page: {curPageIndex} / {numpages}</span>
            <span>
                <Input placeholder='jump to page' style={{width: '100px'}} inputInOneLine={true} onkeydown={pageSearchKeyDown}/>
            </span>
        </div>
        {displayHeader()}
        <div className='height400 table'>
            {displayList()}
        </div>
    </div>
}
export default React.memo(DisplayListAsGrid)
