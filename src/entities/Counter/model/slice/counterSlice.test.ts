import {counterActions, counterReducer} from "./counterSlice";
import {StateSchema} from "app/providers/StoreProvider";
import {CounterSchema} from "../types/CounterSchema";

describe('counterSlice.test', () => {
    test('decrement', () => {
        const state: CounterSchema = {value: 10}
        expect(counterReducer(state as CounterSchema, counterActions.decrement)).toEqual({value: 9});
    })
})

describe('counterSlice.test', () => {
    test('increment', () => {
        const state: CounterSchema = {value: 10}
        expect(counterReducer(state as CounterSchema, counterActions.increment)).toEqual({value: 11});
    })
})