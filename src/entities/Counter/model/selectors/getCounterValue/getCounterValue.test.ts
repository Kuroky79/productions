
import {getCounterValue} from './getCounterValue'
import {StateSchema} from "app/providers/StoreProvider";
describe('GetCounterValue.test', () => {
    test('test value', () => {
        const state: StateSchema = {
            counter: {value: 10},
        }

        expect(getCounterValue(state as StateSchema)).toEqual(10);
    })
})