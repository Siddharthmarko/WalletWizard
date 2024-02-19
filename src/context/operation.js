export default function reducer(state, action){
    // first toye ki type dena padega propety ke liye aur ywsb to do 
    if (action.type === 'datafilter'){
        return {...state, 'datafilter': action.obj}
    }
    if(action.type === 'update'){
        return {...state, 'update': action.id}
    }
    if(action.type === 'closeAll'){
        return {...state, 'isModal': false, 'isPay': false, 'isType': false}
    }
    // next calculation ka 

        return {...state, [action.type]: !(state[action.type])}
}