import React, {useEffect, useState} from 'react'
import Input from "../common/input";
import useInAppAPI from "../../customhooks/api_hooks";
import {config, enums} from "../../configs/consts";
import PlzWait from "../common/plzwait";
import DisplayListAsGrid from "../common/displayListAsGrid";
import Button from "../common/button";

const AdminDashboard = props => {
    const {data, loading} = useInAppAPI({url: config.apis.users})
    const [updatedDataSet, setUpdatedDataSet] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])

    useEffect(() => {
        let updates = data.map(x => ({...x, checked: false}))
        setUpdatedDataSet([...updates])
        setFilteredUsers([...updates])
    }, [data])

    const handleSearchOnChange = (e) => {
        let val = e.target.value
        if (data.length === 0) return
        let filter = updatedDataSet.filter(row => row.name.toLowerCase().indexOf(val.toLowerCase()) !== -1
            || row.email.toLowerCase().indexOf(val.toLowerCase()) !== -1
            || row.role.toLowerCase().indexOf(val.toLowerCase()) !== -1)
        setFilteredUsers(filter)
    }
    const updateCallbackDataUpdate = (updateData) => {
        setUpdatedDataSet([...updateData])
    }

    const handleDeleteAll = () => {
        let selectedRows = updatedDataSet.filter(x => x.checked === true)
        console.log('selected rows', selectedRows)
    }

    if (loading) return <PlzWait/>
    return <div>
        <div><Input classname='wid100p' placeholder={enums.placeholders.adminSearch} onchange={handleSearchOnChange}/></div>
        <div className=''>
            <DisplayListAsGrid data={filteredUsers} updateBack={(d) => updateCallbackDataUpdate(d)}/>
        </div>
        <div className=''>
            <div className='row'><Button val='delete all' onclick={handleDeleteAll}/></div>
        </div>
    </div>
}

export default React.memo(AdminDashboard)
