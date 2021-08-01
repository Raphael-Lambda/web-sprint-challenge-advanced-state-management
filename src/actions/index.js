import axios from 'axios';

export const SMURF_FETCH_SUCCESS = "SMURF_FETCH_SUCCESS"
export const SMURF_FETCH_START = "SMURF_FETCH_START"
export const SMURF_FETCH_FAIL = "SMURF_FETCH_FAIL"
export const SMURF_ADD = "SMURF_ADD"
export const ERROR_ADD = "ERROR_ADD"


export const fetchSmurfs = () => {
    return dispatch => {
        dispatch(smurfFetchStart())
        axios.get('http://localhost:3333/smurfs')
            .then(res => {
                dispatch(smurfFetchSuccess(res.data))
            })
            .catch(err => {
                console.log("err", err)
                dispatch(smurfFetchFail("An error occured"))
            })
    }
}


const smurfFetchStart = () => {
    console.log("let's start!")
    return({
        type: SMURF_FETCH_START
    })
}

const smurfFetchSuccess = value => {
    return({
        type: SMURF_FETCH_SUCCESS,
        payload: value
    })
}

const smurfFetchFail = value => {
    return({
        type: SMURF_FETCH_FAIL,
        payload: value
    })
}

export const smurfsAdd = value => {
    return({
        type: SMURF_ADD,
        payload: value
    })
}

 export const errorAdd = value => {
    return({
        type: ERROR_ADD,
        payload: value
    })
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.