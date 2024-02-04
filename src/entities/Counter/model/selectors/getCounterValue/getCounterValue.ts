import {createSelector} from "@reduxjs/toolkit";
import {getCounter} from "../getCounter/getCounter";
import counter from "entities/Counter/ui/Counter";
import {CounterSchema} from "../../types/CounterSchema";


export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value
)