const initialState = {
  age:10  
}

const myreducer = (state=initialState, action) =>{
  const newstate = {...state};

if( action.type === 'AGE_UP_ASYNC'){
 return {
        ...state,
        age: state.age + action.value
      }
}
if( action.type === 'AGE_DOWN'){
 return {
        ...state,
        age: state.age - action.value
      }
}
if( action.type === 'LOADING'){
return {
        ...state,
        loading:true
      }
}
  return newstate;

}
export default myreducer;