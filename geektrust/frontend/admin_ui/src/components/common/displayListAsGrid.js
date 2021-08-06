import React, {useCallback, useState} from "react";
import Button from "./button";
import Input from "./input";

const DisplayListAsGrid = props => {
    const {data} = props
    const [list, setList]=useState([...data])

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
        setList([...data])
        console.log('selected item', found)
    }

    const displayList = useCallback(() => {
        return list.map((row, index) => {
            let {id, name, email, role} = row
            let selClass = row.checked === true ? 'gray' : ''
            return <div key={'grid-row' + index} id={'div-grid-row-' + index} className={'line ' + selClass}>
                <span style={{minWidth: '30px'}}><Input type='checkbox' onchange={(e) => handleRowSelect(e, id)}/></span>
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

    return <div className='table height450'>{displayList()}</div>
}
export default React.memo(DisplayListAsGrid)
