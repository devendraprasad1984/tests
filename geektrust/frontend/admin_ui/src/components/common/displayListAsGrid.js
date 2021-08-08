import React, {useState} from "react";
import Button from "./button";
import Input from "./input";
import {config} from "../../configs/consts";

const editLabels = {
    name: 'name',
    email: 'email',
    role: 'role'
}

const DisplayListAsGrid = props => {
    const {data, onselect, onedit, ondelete, numpages, curPageIndex, header, onSelectAll, pageSearchKeyDown, onItemChange} = props

    const displayHeader = () => {
        return header.map((row, index) => {
            let {id, name, email, role, checked} = row
            return <div key={'grid-row' + index} className={'line header'}>
                <span style={{minWidth: '30px'}}><Button val='' classname='green' onclick={() => onSelectAll(id)}/></span>
                <span>{name}</span>
                <span style={{minWidth: '250px'}}>{email}</span>
                <span style={{minWidth: '100px'}}>{role}</span>
                <span>{checked}</span>
            </div>
        })
    }

    const showItems = (flagEdit, label, row) => {
        let {id} = row
        let val = row[label]
        // editMeta[editLabels[label]]
        let editItem = <Input value={val} onchange={() => onItemChange(id, label, val)}/>
        return flagEdit === false ? row[label] : editItem
    }

    const displayList = () => {
        let {_start, _end} = config.utils.getPageIndex(curPageIndex)
        return data.slice(_start, _end).map((row, index) => {
            let {id, name, email, role, checked, edit} = row
            let selRowClass = checked === true ? ' gray ' : ' '
            let editRowClass = edit === true ? ' purple ' : ' '
            return <div key={'grid-row' + index} className={'line size12 ' + editRowClass + selRowClass}>
                <span style={{minWidth: '30px'}}>
                    <Input classname='checkbox' type='checkbox' onchange={(e) => onselect(e, id)} checked={checked}/>
                </span>
                <span>{showItems(edit, editLabels.name, row)}</span>
                <span style={{minWidth: '250px'}}>{showItems(edit, editLabels.email, row)}</span>
                <span style={{minWidth: '100px'}}>{showItems(edit, editLabels.role, row)}</span>
                <span className='pad'>
                        <Button classname={edit === true ? 'green' : ''} val={edit === true ? 'save' : 'edit'} onclick={() => onedit(id)}/>
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
