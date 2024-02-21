import axios from "axios";
import { message } from "antd";

const BASE_URL = process.env.BASE_URL;

export default function reducer(state, action){
    // first toye ki type dena padega propety ke liye aur ywsb to do 
    if(action.type === 'updateState'){
        return { ...state, updateState: !state.updateState};
    }
    if(action.type === 'detail'){
        return {...state, 'detail': action.data};
    }
    if(action.type === 'data'){
        return {...state, 'data': action.data};
    }
    if (action.type === 'datefilter'){
        return {...state, 'datefilter': action.obj}
    }
    if(action.type === 'update'){
        return {...state, 'update': action.id}
    }
    if(action.type === 'closeAll'){
        return {...state, 'isModal': false, 'isPay': false, 'isType': false}
    }
    if(action.type === 'typeData'){
        return {...state, 'typeData': action.getData};
    }
    if(action.type === 'profit' || action.type === 'expense'){
        return {...state, [action.type]: action.data}
    }
    // next calculation ka 

        return {...state, [action.type]: !(state[action.type])}
}
export async function getExpenseType(dispatcher){
    try {
        const res = await axios.get(`${BASE_URL}/expense-data-type`);
        dispatcher({type: 'typeData', getData: res.data});
    } catch (err){
        message.error("Network error");
    }

}
export function submitExpenseType(text){
    axios.post(`${BASE_URL}/expense-data-type`, { description: text })
        .then((res) => {
            // console.log(res.data);
            message.success("Type Added")
        })
        .catch((e) => {
            console.log("error");
            message.error("Network Error")
        })
}
export function deleteType(value){
    axios.delete(`${BASE_URL}/expense-data-type/${value}`)
        .then(() => {
            message.success("Deleted")
        })
        .catch(e => message.error("Network Error"))
}
export function submitExpensedata(formData){
    axios.post(`${BASE_URL}/expense-data`, formData)
        .then(() => {
            message.success("Data Added")
            })
        .catch(e => message.error("Network Error"))
}

export function deleteData(id){
    axios.delete(`${BASE_URL}/expense-data/delete/${id}`)
        .then(() => {
            message.success("Deleted")
        }).catch((error) => {
            console.log(error)
            message.error("Network Error")
        }) // it will deltefrom server
}
export function hardDelete(e, dispatcher){
    axios.delete(`${BASE_URL}/expense-data/hard-delete/${e._id}`)
        .then(() => {
            dispatcher({ type: 'updateState' });
            message.success("Deleted")
        }).catch((error) => {
            console.log(error)
            message.error("Network Error")
        })
}
export function Recycle(e, dispatcher){
    axios.delete(`${BASE_URL}/expense-data/recycle/${e._id}`)
        .then(() => {
            dispatcher({ type: 'updateState' })
            message.success("Deleted")
        }).catch((error) => {
            console.log(error)
            message.error("Network Error")
        })
}