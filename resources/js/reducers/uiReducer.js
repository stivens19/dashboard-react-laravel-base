import {types} from './../types/types';
const initialState = {
    isOpen: true,
    isOpenModal: false,
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiMenuToggle:
            return {
                ...state,
                isOpen: !state.isOpen
            }
        case types.uiModalToggle:
            return {
                ...state,
                isOpenModal: !state.isOpenModal
            }
        default:
            return state;
    }
}
