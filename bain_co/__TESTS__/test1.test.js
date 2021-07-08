import {print} from "../utils/print.js";

test('quick test', () => {
    expect((1 + 2)).toBe(3)
})

test('print test -- hello', () => {
    let param = 'hello'
    let mock = jest.fn().mockImplementation((p) => print(p))
    print(param)
    expect(mock).toHaveBeenCalledWith(param)
})


