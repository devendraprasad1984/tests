import React, {useEffect, useState} from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: '100%'
    },
});


const MySlider = withStyles({
    root: {
        color: '#4d2784',
        height: 3,
        padding: '13px 0',
    },
    thumb: {
        height: 27,
        width: 27,
        backgroundColor: '#fff',
        border: '1px solid currentColor',
        marginTop: -12,
        marginLeft: -13,
        boxShadow: '#ebebeb 0 2px 2px',
        '&:focus, &:hover, &$active': {
            boxShadow: '#ccc 0 2px 3px 1px',
        },
        '& .bar': {
            // display: inline-block !important;
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
        },
    },
    active: {},
    track: {
        height: 3,
    },
    rail: {
        color: '#8e8d8d',
        opacity: 1,
        height: 3,
    },
})(Slider);

export default function RangeSlider(props) {
    const {onchange,tickmarks}=props

    const [marks, setMarks] = useState([])
    const [minmax, setMinmax] = useState({min: 0, max: 0, curYear: 0})
    const classes = useStyles();

    useEffect(() => {
        let yrs = tickmarks.map(x=>x.value)
        setMarks(tickmarks)
        setMinmax({min: Math.min(...yrs), max: Math.max(...yrs), curYear: new Date().getFullYear()})
    }, [])

    return (
        <div className={classes.root}>
            <MySlider
                track={'normal'}
                defaultValue={[minmax.curYear, minmax.curYear + 3]}
                onChangeCommitted={onchange}
                marks={marks}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={v => `${v}`}
                min={minmax.min}
                max={minmax.max}
                step={1}
            />
        </div>
    );
}
