import { createStore } from 'redux';


const initialState = {
  age:10
}

const myreducer = (state=initialState, action) =>{
  const newstate = {...state};

  if(action.type === "ADD"){
    newstate.age += action.val;
  }
  if(action.type === 'SUBTRACT'){
    newstate.age -= action.val;
  }

  return newstate;

}

const store = createStore(myreducer);
store.subscribe(() =>{
  document.write(JSON.stringify(store.getState()));
})

store.dispatch({type:"ADD", val:5});
store.dispatch({type:"ADD", val:5});
store.dispatch({type:"ADD", val:5});
store.dispatch({type:"ADD", val:5});
store.dispatch({type:"ADD", val:5});
store.dispatch({type:"SUBTRACT", val:10});
