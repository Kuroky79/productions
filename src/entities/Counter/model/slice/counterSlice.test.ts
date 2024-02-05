import { counterActions, counterReducer } from './counterSlice';
import { CounterSchema } from '../types/CounterSchema';

describe('counterSlice.test', () => {
    test('decrement', () => {
        const state: CounterSchema = { value: 10 };
        const action = counterActions.decrement(); // Invoke the action creator
        expect(counterReducer(state, action)).toEqual({ value: 9 });
    });

    test('increment', () => {
        const state: CounterSchema = { value: 10 };
        const action = counterActions.increment(); // Invoke the action creator
        expect(counterReducer(state, action)).toEqual({ value: 11 });
    });
});
