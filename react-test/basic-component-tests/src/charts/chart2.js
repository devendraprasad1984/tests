import React, {useState, useEffect, useRef} from 'react'

const d3 = window.d3

const Chart2 = props => {
    const {name, color, height, width, linesArray} = props
    const [showLabel, setShowLabel] = useState(true)
    const [changedPoint, setChangedPoint] = useState({})
    const [lineData, setLineData] = useState(linesArray)
    const [updateCounter, setUpdateCounter] = useState(0)
    const svgRef = useRef()

    const getX = width => d3.scaleLinear().rangeRound([0, width])
    const getY = height => d3.scaleLinear().rangeRound([height, 0])
    const Tooltip = d3.select(".tooltip_" + name)
    const mouseover = d => Tooltip.style("opacity", 1)
    const mousemove = (d) => {
        let curPos = d3.event
        let val = 'X=' + Math.round(d[0], 0) + ', Y=' + Math.round(d[1], 0)
        let x = curPos.pageX + 10
        let y = curPos.pageY + 10
        Tooltip.style("left", x + "px").style("top", y + "px").html("value: " + val)
    }
    const mouseleave = d => {
        Tooltip.style("opacity", 0)
    }
    const cleanup = focus => {
        focus.selectAll('g').remove()
        focus.selectAll('.xtrag').remove()
        focus.selectAll('.axis').remove()
        focus.selectAll('.line').remove()
        focus.selectAll('.domain').remove()
        focus.selectAll('.tick').remove()
        focus.selectAll('.points').remove()
        focus.selectAll('.labels').remove()
    }

    const drawlines = (focus, fnObj) => {
        // console.log('object', fnObj)
        const {lineFn, multilines} = fnObj
        for (let i = 0; i < multilines.length; i++) {
            let {points} = multilines[i]
            // console.log('data line', points)
            focus.append("path")
                .datum(points).attr('class', 'line xline' + i)
                .attr("fill", 'none')
                .attr("stroke", color[i])
                .attr("stroke-width", 1.5)
                .attr("d", lineFn);
        }
    }
    const drawcircle = (focus, fnObj) => {
        focus.selectAll('.points').remove()
        const {xScaleFn, yScaleFn, dragFn, multilines} = fnObj
        for (let i = 0; i < multilines.length; i++) {
            let {candrag, points} = multilines[i]
            if (candrag !== true) continue
            focus.selectAll('.dots' + i)
                .data(points)
                .enter()
                .append('circle').attr('class', 'points dots' + i)
                .attr('r', 6.0)
                .attr('cx', d => xScaleFn(d[0]))
                .attr('cy', d => yScaleFn(d[1]))
                .style('cursor', 'pointer')
                .style('fill', color[i])
                .on("mouseover", mouseover)
                .on("mousemove", mousemove)
                .on("mousedown", mousemove)
                .on("mouseleave", mouseleave)
                .on("mouseout", mouseleave)
                .call(dragFn)
        }
        if (showLabel === true) drawtextonpoints(focus, fnObj)
    }
    const drawtextonpoints = (focus, fnObj) => {
        focus.selectAll('.xtrag').remove()
        focus.selectAll('.labels').remove()
        const {xScaleFn, yScaleFn, multilines} = fnObj
        for (let i = 0; i < multilines.length; i++) {
            let {candrag, points} = multilines[i]
            if (candrag !== true) continue
            focus.selectAll(".labels" + i)
                .data(points)
                .enter()
                .append('g').attr("class", 'xtrag')
                .append("text").attr("class", 'labels')
                .attr("x", d => xScaleFn(d[0]) - 10)
                .attr("y", d => yScaleFn(d[1]) - 10)
                .text(d => Math.round(d[1], 0))
                .style("fill", color[i])
                .style("font-size", 11)
        }
    }


    const dragstarted = (d) => {
        d3.select(this).raise().classed('active', true);
    }
    const dragged = (d, focus, fnObj) => {
        let {multilines, lineFn, xScaleFn, yScaleFn} = fnObj
        d[0] = xScaleFn.invert(d3.event.x);
        d[1] = yScaleFn.invert(d3.event.y);
        d3.select(this).attr('cx', xScaleFn(d[0])).attr('cy', yScaleFn(d[1]))
        for (let i = 0; i < multilines.length; i++) {
            let {candrag, data, copy} = multilines[i]
            let lineName = multilines[i].name
            if (candrag === true) {
                let xval = Math.round(d[0], 0)
                let yval = Math.round(d[1], 0)
                data[xval] = yval
                let oldVal = copy[xval]
                let newVal = yval
                let selected = {name, lineName, data, copy, oldVal, newVal, "index": xval}
                focus.select('path.xline' + i).attr('d', lineFn);
                //console.log(selected)
                setChangedPoint(() => {
                    return {...selected}
                })
            }
        }
        drawcircle(focus, fnObj)
    }
    const dragended = (d) => {
        d3.select(this).classed('active', false);
        console.log('dragended', changedPoint, lineData)
    }
    const drawaxes = (focus, fnObj) => {
        let axisBottomObj = d3.axisBottom(fnObj.xScaleFn)//.ticks(lineData.length)
        focus.append('g').attr('class', 'axis axis--x' + name).attr('transform', 'translate(0,' + fnObj.ht + ')').call(axisBottomObj)
        focus.append('g').attr('class', 'axis axis--y' + name).call(d3.axisLeft(fnObj.yScaleFn))
    }

    const lineChartHandler = () => {
        const svg = d3.select(svgRef.current)
        const margin = {top: 20, right: 20, bottom: 30, left: 50},
            wid = +svg.attr("width") - margin.left - margin.right,
            ht = +svg.attr("height") - margin.top - margin.bottom;
        let multilines = lineData.map((x, i) => {
            return {...x, points: x.data.map((v, i) => [i, v])}
        })
        const xScaleFn = getX(wid);
        const yScaleFn = getY(ht)
        let line0 = multilines[0].points
        xScaleFn.domain(d3.extent(line0, d => d[0]));
        yScaleFn.domain(d3.extent(line0, d => d[1]));

        const lineFn = d3.line().x(d => xScaleFn(d[0])).y(d => yScaleFn(d[1])).curve(d3.curveMonotoneX);
        const focus = svg.select('.chart' + name).attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        const fnObj = {multilines, lineFn, xScaleFn, yScaleFn, ht, wid, margin}
        const dragFn = d3.drag().on('start', dragstarted).on('drag', d => dragged(d, focus, fnObj)).on('end', dragended);
        fnObj['dragFn'] = dragFn
        cleanup(focus)
        drawlines(focus, fnObj)
        drawcircle(focus, fnObj)
        drawaxes(focus, fnObj)
    }

    const updateLineData = () => {
        let updateData = lineData.map((x, i) => {
            return {...x, data: x.data.map(x => Math.round(Math.random() * 100, 0))}
        })
        setLineData(updateData)
        console.log('update', updateData, lineData)
        setUpdateCounter(() => updateCounter + 1)
    }

    useEffect(() => {
        lineChartHandler()
    }, [updateCounter, showLabel])

    const handleTextMode = () => {
        setShowLabel(!showLabel)
    }

    return (
        <div id={'chartMainDiv' + name} className='chartwrapper'>
            <div className={"tooltip tooltip_" + name}></div>
            <svg ref={svgRef} height={height} width={width} preserveAspectRatio={'xMinYMid'}>
                <g className={"chart" + name}></g>
            </svg>
            <br/>
            <button onClick={updateLineData}>update</button>
            <button onClick={handleTextMode}>show/hide label</button>
        </div>
    )
}

export default Chart2
