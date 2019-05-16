import {
    REQUEST_POPULAR_PENDING,
    REQUEST_POPULAR_SUCCESS,
    REQUEST_POPULAR_FAILED
} from './constant';

import API from './api';

// const api_key = '779cb993a7038477d49a9deabe16ed77'; 



// // Get Popular movies fom api
// export const requestPopular = () =>  async dispatch => {
//     try {
//     dispatch({type: REQUEST_POPULAR_PENDING});
//     const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
//     const data = res.json()
//     console.log(data)
//     await dispatch({
//         type: REQUEST_POPULAR_SUCCESS,
//         payload: data
//     })
//     } catch (error) {
//         dispatch({
//             type: REQUEST_POPULAR_FAILED, 
//             payload: error.response
//         })
//     }
// }

console.log('Nothing');

// Get Popular movies fom api
export const requestPopular = () => async dispatch => {
   try {
       dispatch({type: REQUEST_POPULAR_PENDING});
       const response = await API.get('/genre/movie/list');
       dispatch({
           type: REQUEST_POPULAR_SUCCESS, 
           payload:response
        })            
        console.log(response.data)
   } catch (error) {
       dispatch({
           type: REQUEST_POPULAR_FAILED, 
           payload: error.response
        })
   }
}

// /genre/movie/list