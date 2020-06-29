const initialState = {
    smurf: '',
    isFetching: false,
    error: '',
}

export const smurfReducer = (state = initialState, action) => {
    switch(action.type){
        case "FETCH_SMURFS_START":
            return{
                ...state,
                isFetching: true,
            }
        case "FETCH_SMURFS_SUCCESS":
            return{
                ...state,
                smurf: action.payload,
                isFetching: false,
                error: '',
            }
        default: 
            return state;
    }
}