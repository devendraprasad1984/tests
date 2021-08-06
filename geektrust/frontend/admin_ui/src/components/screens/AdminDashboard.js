import React, {useEffect, useState} from 'react'
import Input from "../common/input";
import useInAppAPI from "../../customhooks/api_hooks";
import {config, enums} from "../../configs/consts";
import PlzWait from "../common/plzwait";
import DisplayListAsGrid from "../common/displayListAsGrid";
import Button from "../common/button";

const AdminDashboard = props => {
    const [selectedRow, setSelectedRows] = useState([])
    const {data, loading} = useInAppAPI({url: config.apis.users})
    const [filteredUsers, setFilteredUsers] = useState([])

    useEffect(() => {
        setFilteredUsers(data.map(x => ({...x, checked: false})))
    }, [data])

    const handleSearchOnChange = (e) => {
        let val = e.target.value
        if (data.length === 0) return
        let filter = data.filter(row => row.name.toLowerCase().indexOf(val.toLowerCase()) !== -1
            || row.email.toLowerCase().indexOf(val.toLowerCase()) !== -1
            || row.role.toLowerCase().indexOf(val.toLowerCase()) !== -1)
        setFilteredUsers(filter)
    }
    const updateCallbackDataUpdate = (updateData) => {
        // console.log('update data', updateData)
        let selected = updateData.filter(row => row.checked === true)
        setSelectedRows([...selected])
    }

    const handleDeleteAll = () => {
        console.log('selected rows', selectedRow)
    }

    if (loading) return <PlzWait/>
    return <div>
        <div><Input classname='wid100p' placeholder={enums.placeholders.adminSearch} onchange={handleSearchOnChange}/></div>
        <div className=''>
            <DisplayListAsGrid data={filteredUsers} updateBack={(d) => updateCallbackDataUpdate(d)} selected={selectedRow}/>
        </div>
        <div className=''>
            <div className='row'><Button val='delete all' onclick={handleDeleteAll}/></div>
        </div>
    </div>
}

export default React.memo(AdminDashboard)
