import React, {useEffect, useState} from 'react'
import Input from "../common/input";
import useInAppAPI from "../../customhooks/api_hooks";
import {config, enums} from "../../configs/consts";
import PlzWait from "../common/plzwait";
import DisplayListAsGrid from "../common/displayListAsGrid";

const AdminDashboard = props => {
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

    if (loading) return <PlzWait/>
    return <div>
        <div><Input classname='wid100p' placeholder={enums.placeholders.adminSearch} onchange={handleSearchOnChange}/></div>
        <div>
            <DisplayListAsGrid data={filteredUsers}/>
        </div>
    </div>
}

export default React.memo(AdminDashboard)
