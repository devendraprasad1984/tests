import {print, printRecords} from "../utils/print.js";
import {cat_enums, risks_enum} from "../utils/consts";

const mock = {
    print: jest.fn(),
    printRecords: jest.fn()
}

test('print test -- hello', () => {
    let param = 'hello'
    const act = print(param)
    const exp = mock.print(param)
    expect(exp).toBe(act)
})


test('printRecords with data', () => {
    let dataset = [
        {
            Gender: 'male',
            HeightCm: 180,
            WeightKg: 87,
            bmi: -1,
            bmi_unit: 'kg/m2',
            risk: risks_enum.LOW_HEALTH_RISK,
            category: cat_enums.OVERWEIGHT
        },
        {
            Gender: 'female',
            HeightCm: 165,
            WeightKg: 72,
            bmi: 35.8,
            bmi_unit: 'kg/m2',
            risk: risks_enum.VERY_HIGH_HEALTH_RISK,
            category: cat_enums.NORMAL_WEIGHT
        }
    ]
    let printTop = 2
    const act = printRecords(dataset, printTop)
    const exp = mock.printRecords(dataset, printTop)
    expect(exp).toBe(act)
    // expect(exp).toHaveBeenCalledWith(dataset, printTop)
})
