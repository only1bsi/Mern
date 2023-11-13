import { FETCH_NOTES_FAILURE, FETCH_NOTES_REQUEST, FETCH_NOTES_SUCCESS } from "./noteTypes"


const initialState = {
    loading: false,
    notes: [],
    error: ''
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NOTES_REQUEST: return {
            ...state,
            loading: true
        }

        case FETCH_NOTES_SUCCESS: return {
            ...state,
            notes: action.payload,
            error: ''
        }

        case FETCH_NOTES_FAILURE: return {
            ...state,
            loading: false,
            notes: [],
            error: action.payload
        }

        default: return state
    }
}

export default reducer