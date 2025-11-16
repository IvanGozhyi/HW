import {increment, decrement} from "./actions.js";



export const counterStore = {
    count: 0
};

export function counterReducer(state = counterStore, action) {
    switch (action.type) {
        case increment:
            return {
                ...state,
                count: state.count + 1
            }

        case decrement:
            return {
                ...state,
                count: state.count - 1
            }
    }
    return state;
}