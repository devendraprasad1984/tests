export const printRecords=(dataset)=>{
    let foundRecords = dataset.length
    console.log('printing BMI calculation results for ' + foundRecords + ' patients')
    for (let row = 0; row < foundRecords; row++) {
        let {Gender, HeightCm, WeightKg, bmi, bmi_unit, category, risk} = dataset[row]
        let printMsg = ''
        if (bmi === -1 || Gender === undefined || HeightCm === undefined || WeightKg === undefined) {
            printMsg = `ROW-${row + 1} - insufficient data`
        } else {
            printMsg = `ROW-${row + 1} - `
            printMsg += Gender.toLowerCase() === 'male' ? 'He is ' : 'She is '
            printMsg += '"' + category + '"'
            printMsg += ' having bmi at "' + bmi + bmi_unit + '"'
            printMsg += ' and has "' + risk + '".'
            printMsg += ' [height=' + HeightCm + 'cm, weight=' + WeightKg + 'kg]'
        }
        console.log(printMsg)
    }
}

export const print=msg=>{
    console.log(msg)
}
