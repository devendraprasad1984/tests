import React, {useState, useEffect, useRef} from 'react'
import data from "../black_hawk/data.json";

const d3 = window.d3

const Chart2 = props => {
    const {name, color} = props
    const [lineData, setLineData] = useState([10, 15, 45, 60, 30, 20, 33, 10])
    const [lineData2, setLineData2] = useState([5, 12, 43, 67, 38, 17, 23, 18])
    const svgRef = useRef()

    const getX = width => d3.scaleLinear().rangeRound([0, width])
    const getY = height => d3.scaleLinear().rangeRound([height, 0])
    const Tooltip = d3.select('#chartMainDiv').append('div').attr("class", "tooltip")
    const mouseover = d => Tooltip.style("opacity", 1)
    const mousemove = (d) => {
        let curPos = d3.event
        let val = 'X=' + Math.round(d[0], 0) + ', Y=' + Math.round(d[1], 0)
        let x = curPos.pageX + 10
        let y = curPos.pageY + 10
        Tooltip.style("left", x + "px").style("top", y + "px").html("value: " + val)
    }
    const mouseleave = d => Tooltip.style("opacity", 0)
    const cleanup = focus => {
        focus.selectAll('.line').remove()
        focus.selectAll('.domain').remove()
        focus.selectAll('.tick').remove()
        focus.selectAll('.points').remove()
    }

    const drawlines = (focus, fnObj) => {
        let dataset = fnObj.multilines
        let lineNames = dataset.map(x => x.name)
        // const myColor = d3.scaleOrdinal().domain([lineNames]).range(d3.schemeSet2);
        // console.log(dataset,lineNames, myColor)
        for (let i = 0; i < dataset.length; i++) {
            focus.append("path")
                .datum(dataset[i].data)
                .attr("fill", 'none')
                .attr('class', 'line xline' + i)
                .attr("stroke", color[i])
                .attr("stroke-width", 1.5)
                .attr("d", fnObj.lineFn);
        }
    }
    const drawcircle = (focus, fnObj) => {
        let dataset = fnObj.multilines
        for (let i = 0; i < dataset.length; i++) {
            let {candrag, data} = dataset[i]
            focus.selectAll('.dots' + i).data(data)
                .enter()
                .append('circle')
                .attr('r', 6.0)
                .attr('class', 'points dots' + i)
                .attr('cx', d => fnObj.xScaleFn(d[0]))
                .attr('cy', d => fnObj.yScaleFn(d[1]))
                .style('cursor', 'pointer')
                .style('fill', color[i])
                .on("mouseover", mouseover)
                .on("mousemove", mousemove)
                .on("mousedown", mousemove)
                .on("mouseleave", mouseleave)
                .on("mouseout", mouseleave)
                .call(candrag ? fnObj.dragFn : () => {
                })
        }
    }


    const dragstarted = (d) => {
        d3.select(this).raise().classed('active', true);
    }

    const dragged = (d, focus, fnObj) => {
        let dataset = fnObj.multilines
        d[0] = fnObj.xScaleFn.invert(d3.event.x);
        d[1] = fnObj.yScaleFn.invert(d3.event.y);
        d3.select(this).attr('cx', fnObj.xScaleFn(d[0])).attr('cy', fnObj.yScaleFn(d[1]))
        for (let i = 0; i < dataset.length; i++) {
            let {candrag} = dataset[i]
            if (candrag === true) {
                console.log('X', d[0], 'Y', d[1])
                focus.select('path.xline' + i).attr('d', fnObj.lineFn);
            }
        }
    }

    const dragended = (d) => {
        d3.select(this).classed('active', false);
    }

    const drawaxes = (focus, fnObj) => {
        focus.append('g').attr('class', 'axis axis--x' + name).attr('transform', 'translate(0,' + fnObj.height + ')').call(d3.axisBottom(fnObj.xScaleFn))
        focus.append('g').attr('class', 'axis axis--y' + name).call(d3.axisLeft(fnObj.yScaleFn))
    }

    const lineChartHandler = () => {
        const svg = d3.select(svgRef.current)
        const margin = {top: 20, right: 20, bottom: 30, left: 50},
            width = +svg.attr("width") - margin.left - margin.right,
            height = +svg.attr("height") - margin.top - margin.bottom;

        let points = lineData.map((v, i) => [i, v])
        let points2 = lineData2.map((v, i) => [i, v])
        let multilines = [
            {name: 'line1', candrag: true, data: points},
            {name: 'line2', candrag: false, data: points2}
        ]

        const xScaleFn = getX(width);
        const yScaleFn = getY(height)
        xScaleFn.domain(d3.extent(points, d => d[0]));
        yScaleFn.domain(d3.extent(points, d => d[1]));

        const lineFn = d3.line().x(d => xScaleFn(d[0])).y(d => yScaleFn(d[1])).curve(d3.curveMonotoneX);
        const focus = svg.select('.chart' + name).attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        const fnObj = {multilines, lineFn, xScaleFn, yScaleFn, height, width, margin}
        const dragFn = d3.drag().on('start', dragstarted).on('drag', d => dragged(d, focus, fnObj)).on('end', dragended);
        fnObj['dragFn'] = dragFn
        cleanup(focus)
        drawlines(focus, fnObj)
        drawcircle(focus, fnObj)
        drawaxes(focus, fnObj)
    }

    const updateLineData = () => {
        let updateData = lineData.map(x => x + Math.random() * 5)
        let updateData2 = lineData.map(x => x + Math.random() * 10)
        setLineData(updateData)
        setLineData2(updateData2)
    }
    useEffect(() => {
        lineChartHandler()
    }, [lineData])

    return (
        <div id='chartMainDiv'>
            <svg ref={svgRef} height={350} width={750} preserveAspectRatio={'xMinYMid'}>
                <g className={"chart" + name}></g>
            </svg>
            <br/>
            <button onClick={updateLineData}>update</button>
        </div>
    )
}

export default Chart2
