// import React, {useState, useEffect, useRef} from 'react'
// // import * as d3 from 'd3'
// // const d3=window.d3
// // window.d3=require('d3')
//
// const Chart1 = props => {
//     const d3=window.d3
//     const {name} = props
//     const [lineData, setLineData] = useState([10, 15, 45, 60, 30, 20, 33])
//     const svgRef = useRef()
//
//     const lineChartHandler = () => {
//         const svg = d3.select(svgRef.current)
//         const svgContent = svg.select(".chart" + name);
//         const lineSel = svgContent.selectAll(".line")
//         const dots = svgContent.selectAll(".dot")
//         const margin = {top: 20, right: 20, bottom: 30, left: 50}
//         const width = svg.attr("width") - margin.left - margin.right
//         const height = svg.attr("height") - margin.top - margin.bottom
//         const numElem = lineData.length
//         const maxVal = Math.max(...lineData)
//         const xScaleFn = d3.scaleLinear().domain([0, numElem - 1]).range([10, width]);
//         const yScaleFn = d3.scaleLinear().domain([0, maxVal]).range([height, 10]);
//         let myLine = d3.line().x((v, i) => xScaleFn(i)).y(v => yScaleFn(v)).curve(d3.curveMonotoneX)
//
//
//         const dragstarted = (d) => {
//             d3.select(this).raise().classed('active', true);
//         }
//
//         const dragged = (d) => {
//             let x = xScaleFn.invert(d.sourceEvent.x)
//             let y = yScaleFn.invert(d.sourceEvent.y)
//             console.log('X=', x, 'Y=', y,'event')
//             let _this = d3.select(this)
//             _this.attr('cx', xScaleFn(x)).attr('cy', yScaleFn(y))
//             lineSel.attr("d", d => myLine(d));
//         }
//
//         const dragended = (d) => {
//             d3.select(this).classed('active', false);
//         }
//         const Tooltip = d3.select('#chartMainDiv')
//             .append('div')
//             .attr("class", "tooltip")
//             .style("opacity", 0)
//             .style("position", "absolute")
//             .style("background-color", "white")
//
//         const mouseover = d => Tooltip.style("opacity", 1)
//         const mousemove = (d) => {
//             let val = d.srcElement['__data__']
//             let x = d.x + 10
//             let y = d.y + 10
//             console.log('data', d.currentValue, d.originalValue)
//             Tooltip.html("value: " + val).style("left", x + "px").style("top", y + "px")
//         }
//         const mouseleave = d => Tooltip.style("opacity", 0)
//
//         let drag = d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended)
//         lineSel.data([lineData])
//             .join("path")
//             .attr("class", "line")
//             .attr('fill', 'none')
//             .attr('pointer-events', 'all')
//             .attr("stroke", "tomato")
//             .attr("stroke-width", 1.5)
//             .attr("d", myLine);
//
//         dots.data(lineData)
//             .join("circle")
//             .attr("class", "dot")
//             .attr("r", 5)
//             .attr("fill", "orange")
//             .style('cursor', 'pointer')
//             .attr("cx", (v, i) => xScaleFn(i))
//             .attr("cy", yScaleFn)
//             .on("mouseover", mouseover)
//             .on("mousemove", mousemove)
//             .on("mouseleave", mouseleave)
//             .call(drag)
//
//         svg.select(".x-axis" + name).attr("transform", `translate(0, ${height})`).call(d3.axisBottom(xScaleFn));
//         svg.select(".y-axis" + name).call(d3.axisLeft(yScaleFn));
//     }
//
//     const updateLineData = () => {
//         let updateData = lineData.map(x => x + 5)
//         setLineData(updateData)
//     }
//
//     useEffect(() => {
//         lineChartHandler()
//     }, [lineData])
//
//     return (
//         <div id='chartMainDiv'>
//             <svg ref={svgRef} height={350} width={750}>
//                 <g className={"chart" + name}></g>
//                 <g className={"x-axis" + name}/>
//                 <g className={"y-axis" + name}/>
//             </svg>
//             <br/>
//             <button onClick={updateLineData}>update</button>
//         </div>
//     )
// }
//
// export default Chart1
