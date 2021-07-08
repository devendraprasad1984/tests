import category from '../data/bmi_cat.js'
import risks from '../data/bmi_health_risks.js'
import bmi_range from '../data/bmi_range.js'


export const calculateBMI = person => {
    let bmiVal = -1
    let bmiRangeIndex = -1
    let height = (person.HeightCm === undefined || person.HeightCm <= 0) ? -1 : person.HeightCm
    let weight = (person.WeightKg === undefined || person.WeightKg <= 0) ? -1 : person.WeightKg

    if (height !== -1 && weight !== -1) {
        let heightM2 = (height * height) / (100 * 100)
        bmiVal = Math.round((weight / heightM2), 2)
        if (bmiVal <= 0) bmiVal = -1
        if (bmiVal !== -1) {
            //calculate bmi range index from ranges so that risk/category can be found based on this

        }
        return {bmiVal, bmiUnit: 'kg/m2', bmiRangeIndex}
    }
}

export const calculateRisk = bmiRangeIndex => {
    let riskVal = bmiRangeIndex
    if (bmiRangeIndex !== -1) {
        riskVal = risks[bmiRangeIndex]
    }
    return riskVal
}


export const calculateCategory = bmiRangeIndex => {
    let catVal = bmiRangeIndex
    if (bmiRangeIndex !== -1) {
        catVal = category[bmiRangeIndex]
    }
    return catVal
}

export const raw_objects = () => {
    return {category, risks, bmi_range}
}
