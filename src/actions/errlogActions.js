import Axios from "axios"
import { API } from './support'

export const getErrlog = (collect) => {
    return async (dispatch) => {
        try {
            let get = await Axios.get(API + '/errlog/get/' + collect)
            console.log("getErrlog :", get.data)
            dispatch({
                type: "GET_ERRLOG",
                payload: get.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

// export const addProduct = (data) => {
//     return async (dispatch) => {
//         try {
//             let post = await Axios.post(API + '/products', { data })
//             console.log("addProduct :", post.data)
//         } catch (error) {
//             console.log(error)
//         }
//     }
// }