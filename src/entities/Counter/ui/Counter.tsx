import {classNames} from "shared/lib/classNames/classNames";
import Button from "shared/ui/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../model/slice/CounterSlice";
import {StateSchema} from "app/providers/StoreProvider/config/StateSchema";
import React from "react";
import {getCounterValue} from "../model/selectors/getCounterValue/GetCounterValue";

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue)
    const increment = () => {
        dispatch(counterActions.increment())
    }

    const decrement = () => {
        dispatch(counterActions.decrement())
    }
    return (
        <div>
          <h1>value={counterValue}</h1>
            <Button onClick={increment}>increment</Button>
            <Button onClick={decrement}>decrement</Button>
        </div>
    );
};

export default Counter;