import Axios from 'axios';

export const fetchSmurfs = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_SMURFS_START'});
        Axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                console.log("Axios Reponse", res)
                dispatch({ type: 'FETCH_SMURFS_SUCCESS', payload: res.data})
            })
            .catch(err => {console.log('Axios error', err)})
    }
}