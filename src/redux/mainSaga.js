import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView103887Saga from '../features/CalendarView103887/redux/sagas';
import EmailAuth103871Saga from '../features/EmailAuth103871/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView103887Saga,
EmailAuth103871Saga,
    
  ]);
}