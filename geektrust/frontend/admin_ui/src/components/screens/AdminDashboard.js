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
    const [dataCopy, setDataCopy] = useState([])

    const [updatedDataSet, setUpdatedDataSet] = useState([])
    const [txtSearchVal, setTxtSearchVal] = useState('')
    const [gridPageIndex, setGridPageIndex] = useState(1)
    const [pageCount, setPageCount] = useState(-1)

    const calculateUpdatePageCount = (arr) => {
        let numpages = Math.round(arr.length / enums.numberOfItemsPerPage)
        // console.log('calc pages', arr.length, numpages)
        setPageCount(numpages)
    }
    useEffect(() => {
        let updates = data.map(x => ({...x, checked: false}))
        setDataCopy(config.utils.deepCopy([...updates]))
        setUpdatedDataSet([...updates])
        calculateUpdatePageCount([...updates])
    }, [data])

    const foundAMatch = (row, valueToBeMatched) => {
        let val = valueToBeMatched.toLowerCase()
        return row.name.toLowerCase().indexOf(val) !== -1
            || row.email.toLowerCase().indexOf(val) !== -1
            || row.role.toLowerCase().indexOf(val) !== -1
    }
    const handleSearchOnChange = (e) => {
        let val = e.target.value
        // console.log('val',val)
        let filter = dataCopy.filter((x, i) => val === '' || foundAMatch(x, val) === true)
        // console.log(filter, updatedDataSet, dataCopy)
        setUpdatedDataSet([...filter])
        calculateUpdatePageCount([...filter])
    }
    const onSelectAll = (id) => {
        let {_start, _end} = config.utils.getPageIndex(gridPageIndex)
        let tmp = [...updatedDataSet]
        if (id === -1) {
            tmp.slice(_start, _end).forEach(x => x.checked = !x.checked)
        }
        setUpdatedDataSet([...tmp])
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
        calculateUpdatePageCount([...nondeleted])
    }

    const handleDeleteAllSelected = () => {
        let tmp = [...updatedDataSet]
        let nondeleted = tmp.filter(x => x.checked === false)
        setUpdatedDataSet([...nondeleted])
        calculateUpdatePageCount([...nondeleted])
    }
    const pageSearchKeyDown = (e) => {
        let isEnterPressed = e.keyCode === 13
        if (!isEnterPressed) return
        let keyval = e.target.value
        if (isNaN(keyval) === true) return;
        keyval = parseInt(keyval)
        if (keyval <= 0 || keyval > pageCount) return;
        setGridPageIndex(keyval)
    }

    const displayGridSet = useCallback(() => {
        const headerline = [{id: -1, name: 'Name', email: 'Email', role: 'Role', checked: 'Actions'}]
        return <DisplayListAsGrid
            data={updatedDataSet}
            onselect={(e, id) => onselect(e, id)}
            onedit={(id) => onedit(id)}
            ondelete={(id) => ondelete(id)}
            // searchVal={txtSearchVal}
            curPageIndex={gridPageIndex}
            numpages={pageCount}
            header={headerline}
            onSelectAll={onSelectAll}
            pageSearchKeyDown={pageSearchKeyDown}
        />
    }, [updatedDataSet, txtSearchVal, gridPageIndex, pageCount])

    const updatePageIndex = idx => {
        if (idx <= 0 || idx > pageCount) return
        setGridPageIndex(idx)
    }

    if (loading) return <PlzWait/>
    return <div>
        <div><Input classname='wid100p txtpad' placeholder={enums.placeholders.adminSearch} onchange={handleSearchOnChange}/></div>
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
