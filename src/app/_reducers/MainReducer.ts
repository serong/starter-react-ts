import {IMainState} from "../_states/MainState";
import {IMainAction} from "../_actions/MainAction";
import {MainActions} from "../_actions/constants/ActionTypes";

export default function TabataReducer(state: IMainState, action: IMainAction) {

    switch (action.type) {
        case MainActions.INCREASE:
            return {
                ...state,
                count: state.count + 1,
            };

        case MainActions.DECREASE:
            return {
                ...state,
                count: state.count - 1,
            };

        default:
            return state;

    }

}
