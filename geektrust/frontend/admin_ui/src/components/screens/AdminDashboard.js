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
    const onselect = (e, id) => {
        //shallow copy magic here, changes reflect in main data and then we update parent and rerender
        let tmp = [...updatedDataSet]
        let found = tmp.filter(x => parseInt(x.id) === parseInt(id))[0]
        found.checked = e.target.checked
        setUpdatedDataSet([...tmp])
    }
    const onedit = (id) => {
        console.log('edited', id)
    }
    const ondelete = (id) => {
        let tmp = [...updatedDataSet]
        let nondeleted = tmp.filter(x => parseInt(x.id) !== parseInt(id))
        // console.log('on single delete',id, nondeleted)
        setUpdatedDataSet([...nondeleted])
    }

    const handleDeleteAllSelected = () => {
        let tmp = [...updatedDataSet]
        let nondeleted = tmp.filter(x => x.checked === false)
        setUpdatedDataSet([...nondeleted])
    }

    const displayGridSet = useCallback(() => {
        return <DisplayListAsGrid
            data={updatedDataSet}
            onselect={(e, id) => onselect(e, id)}
            onedit={(id) => onedit(id)}
            ondelete={(id) => ondelete(id)}
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
