import axios from "axios"
import { 
    FETCH_NOTES_FAILURE, 
    FETCH_NOTES_REQUEST, 
    FETCH_NOTES_SUCCESS 
} from "./noteTypes"


export const fetchNotesRequest = () => {
    return {
        type: FETCH_NOTES_REQUEST
    }
}

export const fetchNotesSuccsess = notes => {
    return {
        type: FETCH_NOTES_SUCCESS,
        payload: notes
    }
}

export const fetchNotesFailure = error => {
    return {
        type: FETCH_NOTES_FAILURE,
        payload: error
    }
}


export const fetchNotes = () => {
    return (dispatch) => {
        dispatch(fetchNotesRequest)
        axios.get('http://localhost:5000/notes')
        .then(response => {
            const notes = response.data
            dispatch(fetchNotesSuccsess(notes))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchNotesFailure(errorMsg))
        })
    }
}


