import './App.css';
import './style.css';
import Chart2 from "./charts/chart2";
import {useState} from "react";
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
    const deepCopy=d=>Object.values(d)
    const data = [10, 15, 45, 60, 30, 20, 33, 10]
    const data2 = [5, 12, 43, 67, 38, 17, 23, 18]
    let dataset = [
        {name: 'line1', candrag: true, copy: deepCopy(data), data: deepCopy(data)},
        {name: 'line2', candrag: false, copy: deepCopy(data2), data: deepCopy(data2)}
    ]

    return <div className='center'>
        {/*<SelectBox multi={true} data={data} change={handleChange}/>*/}
        {/*<InputTag defaultTags={['devendra']} getValues={handleTagsCallBack}/>*/}
        {/*<TreeExample1/>*/}
        {/*<TreeExample2/>*/}

        {/*<h1>Black Hawk Test</h1>*/}
        {/*<span>put * to see all</span>*/}
        {/*<Combine/>*/}

        <Chart2 name='chart1' linesArray={dataset} color={['tomato', 'gray']} height={250} width={750}/>
        <Chart2 name='chart2' linesArray={dataset} color={['magenta', 'blue']} height={250} width={750}/>

    </div>
}

export default App;
