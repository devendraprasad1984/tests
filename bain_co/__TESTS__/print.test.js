import {print, printRecords} from "../utils/print.js";
import {sampledata} from "./sampledata.js";

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
    let printTop = 2
    const act = printRecords(sampledata, printTop)
    const exp = mock.printRecords(sampledata, printTop)
    expect(exp).toBe(act)
    // expect(exp).toHaveBeenCalledWith(dataset, printTop)
})
