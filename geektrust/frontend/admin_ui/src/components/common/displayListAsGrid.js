import React, {useState} from "react";
import Button from "./button";
import Input from "./input";
import {config} from "../../configs/consts";

const editLabels = {
    name: 'name',
    email: 'email',
    role: 'role'
}
const editMetaInit = {
    [editLabels.name]: '',
    [editLabels.email]: '',
    [editLabels.role]: ''
}
const DisplayListAsGrid = props => {
    const {data, onselect, onedit, ondelete, numpages, curPageIndex, header, onSelectAll, pageSearchKeyDown} = props
    const [editMeta, setEditMeta] = useState({...editMetaInit})

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

    const handleEditChange = (e) => {
        let val = e.target.value
        let name = e.target.name
        let tmp = {}
        tmp[name] = val
        setEditMeta({...editMeta, ...tmp})
    }
    const showItems = (flagEdit, label, val) => {
        let editItem = <Input name={label} value={editMeta[editLabels[label]]} onchange={handleEditChange}/>
        return flagEdit === false ? val : editItem
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
                <span>{showItems(edit, editLabels.name, name)}</span>
                <span style={{minWidth: '250px'}}>{showItems(edit, editLabels.email, email)}</span>
                    <span style={{minWidth: '100px'}}>{showItems(edit, editLabels.role, role)}</span>
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
