import { delay, takeLatest, put } from 'redux-saga/effects';

function* ageupasync(){
  yield put({type:'LOADING', loading:true});
  yield delay(4000);  
  yield put({type:'AGE_UP_ASYNC', value:1});
   yield put({type:'LOADING', loading:false});
}


export function* watchAgeUp(){
  yield takeLatest('AGE_UP', ageupasync)
}