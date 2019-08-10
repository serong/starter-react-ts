import * as React from "react";
import {useEffect, useReducer} from "react";
import {IMainState} from "../_states/MainState";
import MainReducer from "../_reducers/MainReducer";
import {triggerCountDecrease, triggerCountIncrease} from "../_actions/MainAction";
import "./styles/Main.css";
import Another from "./Another";

function initializeMainState(): IMainState  {
    return {
        count: 0,
    };
}

export default function Main() {

    const [state, dispatcher] = useReducer(MainReducer, initializeMainState());

    useEffect(() => {
        console.log(">>> Mounted");
    });

    function handlePlusButton() {
        const action = triggerCountIncrease();
        dispatcher(action);
    }

    function handleMinusButton() {
        const action = triggerCountDecrease();
        dispatcher(action);
    }

    return (
        <div>
            <p className={"bordered"}>Count: {state.count}</p>
            <button onClick={handlePlusButton}> + </button> <span> </span>
            <button onClick={handleMinusButton}> - </button> <span> </span>
            <Another message={"Hello!"}/>
        </div>
    );
}
