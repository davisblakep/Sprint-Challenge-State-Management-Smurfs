import Axios from 'axios';
import { BottomNavigationAction } from '@material-ui/core';

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


export const postSmurfs = (newSmurf) => {
    return dispatch => {
        Axios
            .post('http://localhost:3333/smurfs',
            {
                name: newSmurf.name,
                age: newSmurf.age,
                height: newSmurf.height, 
                id: Date.now(),
            }
            )
            .then(res => {
                console.log("Axios Reponse from POST", res)
                dispatch({ type: 'POST_SMURFS'})
            })
            .catch(err => {console.log('Axios error from POST', err)})
    }
}