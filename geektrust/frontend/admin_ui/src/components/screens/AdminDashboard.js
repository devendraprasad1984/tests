import React, {useCallback, useEffect, useState} from 'react'
import Input from "../common/input";
import useInAppAPI from "../../customhooks/api_hooks";
import {config, enums} from "../../configs/consts";
import PlzWait from "../common/plzwait";
import DisplayListAsGrid from "../common/displayListAsGrid";
import Button from "../common/button";

const AdminDashboard = props => {
    const {data, loading} = useInAppAPI({url: config.apis.users})
    const [updatedDataSet, setUpdatedDataSet] = useState([])
    const [txtSearchVal, setTxtSearchVal] = useState('')

    useEffect(() => {
        let updates = data.map(x => ({...x, checked: false}))
        setUpdatedDataSet([...updates])
    }, [data])

    const handleSearchOnChange = (e) => {
        if (updatedDataSet.length === 0) return
        let val = e.target.value
        setTxtSearchVal(val)
    }
    const updateCallbackDataUpdate = (updateData) => {
        setUpdatedDataSet([...updateData])
    }

    const handleDeleteAllSelected = () => {
        let selectedRows = updatedDataSet.filter(x => x.checked === true)
        console.log('selected rows', selectedRows)
    }

    const displayGridSet = useCallback(() => {
        return <DisplayListAsGrid
            data={updatedDataSet}
            updateBack={(d) => updateCallbackDataUpdate(d)}
            searchVal={txtSearchVal}
        />
    }, [updatedDataSet, txtSearchVal])

    if (loading) return <PlzWait/>
    return <div>
        <div><Input classname='wid100p' placeholder={enums.placeholders.adminSearch} onchange={handleSearchOnChange}/></div>
        {displayGridSet()}
        <div className=''>
            <div className='row'>
                <Button val='Delete All Selected' onclick={handleDeleteAllSelected}/>
            </div>
        </div>
    </div>
}

export default React.memo(AdminDashboard)
