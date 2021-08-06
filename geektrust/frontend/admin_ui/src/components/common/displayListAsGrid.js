import React, {useCallback, useState} from "react";
import Button from "./button";
import Input from "./input";

const DisplayListAsGrid = props => {
    const {data, updateBack, selected} = props
    const [list, setList] = useState([...data])

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
        updateBack([...data])
        setList([...data])
        // console.log('selected item', data)
    }

    const displayList = useCallback(() => {
        return list.map((row, index) => {
            let {id, name, email, role} = row
            let isSelRow = selected.filter(x => x.id === id)
            let isInSel = isSelRow.length === 1
            let selClass = (row.checked === true || isInSel === true) ? 'gray' : ''
            return <div key={'grid-row' + index} id={'div-grid-row-' + index} className={'line ' + selClass}>
                <span style={{minWidth: '30px'}}>
                    <Input classname='checkbox' type='checkbox' onchange={(e) => handleRowSelect(e, id)}/>
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
