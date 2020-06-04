//cada reducers tiene su propio state

//State inicial
const initialState={
    nombre:'',
    identificacion:''
}

//el reducer será una función que recibira un state y un action
export default function(state=initialState,action){
    switch(action.type){
        default:
            return state
    }
}