// import './App.css';
import './style.css';
import Chart2 from "./charts/chart2";
import { useState } from "react";
import { getMarks, getQtrs, getYrs } from "./charts/config";
// import QuickForm from './component/quickForm';
// import Combine from "./black_hawk/combine";
// import Chart1 from "./charts/chart1";
// import SelectBox from "./component/selectBox";
// import InputTag from "./component/inputTag";
// import TreeExample1 from "./component/treeExample1";
// import TreeExample2 from "./component/treeExample2";

function App() {
    // const data = [
    //     {value: 'one', label: 'one', color: 'red'},
    //     {value: 'two', label: 'two', color: 'green'},
    //     {value: 'three', label: 'three', color: 'blue'},
    //     {value: 'four', label: 'four', color: 'silver'},
    //     {value: 'five', label: 'five', color: 'black'},
    // ]
    // const handleChange = (selected) => {
    //     let isSingle = selected.length === undefined
    //     console.log(isSingle ? selected : selected.map(x => x.value))
    // }
    // const handleTagsCallBack=values=>{
    //     console.log('tags', values)
    // }
    const deepCopy = d => Object.values(d)
    const yrs = getQtrs(2010, 2028)
    const data = yrs.map(x => Math.round(Math.random() * 1000, 2))
    const data2 = yrs.map(x => Math.round(Math.random() * 1000, 2))
    const marks = yrs.map((x, i) => getMarks(x, i))
    const defaultRange = ['2015Q1', '2020Q3']

    let dataset = [
        { name: 'line1', candrag: true, copy: deepCopy(data), data: deepCopy(data) },
        { name: 'line2', candrag: false, copy: deepCopy(data2), data: deepCopy(data2) }
    ]
    let dataset2 = JSON.parse(JSON.stringify(dataset))
    let dataset3 = JSON.parse(JSON.stringify(dataset))
    let dataset4 = JSON.parse(JSON.stringify(dataset))
    let dataset5 = JSON.parse(JSON.stringify(dataset))
    let dataset6 = JSON.parse(JSON.stringify(dataset))

    return <div className='center'>
        {/*<SelectBox multi={true} data={data} change={handleChange}/>*/}
        {/*<InputTag defaultTags={['devendra']} getValues={handleTagsCallBack}/>*/}
        {/*<TreeExample1/>*/}
        {/*<TreeExample2/>*/}

        {/*<h1>Black Hawk Test</h1>*/}
        {/*<span>put * to see all</span>*/}
        {/*<Combine/>*/}

        <Chart2 name='chart1' linesArray={dataset} tickmarks={marks} color={['tomato', 'gray']} height={250} width={1000} defaultRange={defaultRange} />
        <Chart2 name='chart2' linesArray={dataset2} tickmarks={marks} color={['red', 'black']} height={250} width={1000} defaultRange={defaultRange} />
        <Chart2 name='chart3' linesArray={dataset3} tickmarks={marks} color={['blue', 'purple']} height={250} width={1000} defaultRange={defaultRange} />
        <Chart2 name='chart4' linesArray={dataset4} tickmarks={marks} color={['magenta', 'cyan']} height={250} width={1000} defaultRange={defaultRange} />
        <Chart2 name='chart5' linesArray={dataset5} tickmarks={marks} color={['magenta', 'cyan']} height={250} width={1000} defaultRange={defaultRange} />
        <Chart2 name='chart6' linesArray={dataset6} tickmarks={marks} color={['black', 'blue']} height={250} width={1000} defaultRange={defaultRange} />
        {/* <QuickForm /> */}

    </div>
}

export default App;
