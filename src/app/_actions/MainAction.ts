import {IAction} from "./Action";
import {MainActions} from "./constants/ActionTypes";

export interface IMainAction extends IAction {
    type: MainActions;
}

export const triggerCountIncrease = (): IMainAction => {
    return {
        type: MainActions.INCREASE,
    };
};

export const triggerCountDecrease = (): IMainAction => {
    return {
        type: MainActions.DECREASE,
    };
};
