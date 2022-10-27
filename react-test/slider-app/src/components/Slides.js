import React, {useState, useEffect} from 'react'
import SlidesData from '../data/slides'
import '../styles/Slides.css'

const Slides = props => {
    const {children} = props
    let ourSlides = SlidesData
    const [slidesData, setSlidesData] = useState([])

    useEffect(()=>{
        setSlidesData(ourSlides)
    },[ourSlides])

    return <React.Fragment>
        <div>Total Slides - {slidesData.length}</div>
        <div className='slides'>
            <div className='container'>
                {children}
            </div>
        </div>
        <div className='slides'>
            <div className='buttons'>
                <button>First</button>
                <button>Prev</button>
                <button>Next</button>
                <button>Last</button>
            </div>
        </div>

        <div>slides data: {JSON.stringify(SlidesData)}</div>
    </React.Fragment>
}

export default Slides