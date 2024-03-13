
import {getCounterValue} from './getCounterValue'
import {StateSchema} from "app/providers/StoreProvider";
describe('GetCounterValue.test', () => {
    test('test value', () => {
        const state: StateSchema = {
            counter: {value: 10},user: { /* ваш пользовательский объект */ },
        }

        expect(getCounterValue(state as StateSchema)).toEqual(10);
    })
})