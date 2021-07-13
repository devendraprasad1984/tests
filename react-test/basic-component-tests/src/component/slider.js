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

const getMarkIndex = (marks, val) => {
    let found = -1
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] === val) {
            found = i
            break
        }
    }
    return found
}

export default function RangeSlider(props) {
    const {onchange, tickmarks, defaultRange} = props

    const [marks, setMarks] = useState([...tickmarks.map(x => x.ival)])
    const [marksVal, setMarksVal] = useState([...tickmarks.map(x => x.value)])
    // console.log('tickmarks', marks, marksVal)
    const classes = useStyles();
    const defaultValStart = getMarkIndex(marksVal, defaultRange[0])
    const defaultValEnd = getMarkIndex(marksVal, defaultRange[1])

    return (
        <div className={classes.root}>
            <MySlider
                track={'normal'}
                defaultValue={[defaultValStart, defaultValEnd]}
                onChangeCommitted={onchange}
                marks={marksVal}
                valueLabelDisplay="on"
                aria-labelledby="discrete-slider-always"
                getArriaLabel={i => {
                    //console.log('LABEL',i, marksVal[i])
                    return `${marksVal[i]}`
                }}
                getAriaValueText={i => {
                    //console.log('selected',i, marksVal[i])
                    return `${i}`
                }}
                min={marks[0]}
                max={marks[marks.length]}
                valueLabelFormat={i => {
                    // console.log('value label', marksVal[i])
                    return <span className='sliderLabel'>{marksVal[i]}</span>
                }}
                step={1}
            />
        </div>
    );
}
