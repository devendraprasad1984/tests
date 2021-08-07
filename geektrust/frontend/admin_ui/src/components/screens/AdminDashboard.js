import React, {useCallback, useEffect, useState} from 'react'
import Input from "../common/input";
import useInAppAPI from "../../customhooks/api_hooks";
import {config, enums} from "../../configs/consts";
import PlzWait from "../common/plzwait";
import DisplayListAsGrid from "../common/displayListAsGrid";
import Button from "../common/button";
import Pagination from "./pagination";

const AdminDashboard = props => {
    const {data, loading} = useInAppAPI({url: config.apis.users})

    const [updatedDataSet, setUpdatedDataSet] = useState([])
    const [txtSearchVal, setTxtSearchVal] = useState('')
    const [gridPageIndex, setGridPageIndex] = useState(1)
    const [pageCount, setPageCount] = useState(-1)

    const calculateUpdatePageCount = (arr) => {
        let numpages = Math.round(arr.length / enums.numberOfItemsPerPage)
        console.log('calc pages',arr.length, numpages)
        setPageCount(numpages)
    }
    useEffect(() => {
        let updates = data.map(x => ({...x, checked: false}))
        setUpdatedDataSet([...updates])
        calculateUpdatePageCount([...updates])
    }, [data])

    const handleSearchOnChange = (e) => {
        if (updatedDataSet.length === 0) return
        let val = e.target.value
        setTxtSearchVal(val)
    }
    const onselect = (e, id) => {
        if (id === -1) {
            alert('header check is clicked')
            return
        }
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
        calculateUpdatePageCount([...nondeleted])
    }

    const handleDeleteAllSelected = () => {
        let tmp = [...updatedDataSet]
        let nondeleted = tmp.filter(x => x.checked === false)
        setUpdatedDataSet([...nondeleted])
        calculateUpdatePageCount([...nondeleted])
    }

    const displayGridSet = useCallback(() => {
        const headerline = [{id: -1, name: 'Name', email: 'Email', role: 'Role', checked: 'Actions'}]
        return <DisplayListAsGrid
            data={updatedDataSet}
            onselect={(e, id) => onselect(e, id)}
            onedit={(id) => onedit(id)}
            ondelete={(id) => ondelete(id)}
            searchVal={txtSearchVal}
            curPageIndex={gridPageIndex}
            numpages={pageCount}
            header={headerline}
        />
    }, [updatedDataSet, txtSearchVal, gridPageIndex, pageCount])

    const updatePageIndex = idx => {
        if (idx <= 0 || idx > pageCount) return
        setGridPageIndex(idx)
    }

    if (loading) return <PlzWait/>
    return <div>
        <div><Input classname='wid100p' placeholder={enums.placeholders.adminSearch} onchange={handleSearchOnChange}/></div>
        {displayGridSet()}
        <div className='row pad'>
            <Button val='Delete All Selected' classname='red' onclick={handleDeleteAllSelected}/>
            <Pagination
                numpages={pageCount}
                curPageIndex={gridPageIndex}
                updatePageIndex={updatePageIndex}
            />
        </div>
    </div>
}

export default React.memo(AdminDashboard)
