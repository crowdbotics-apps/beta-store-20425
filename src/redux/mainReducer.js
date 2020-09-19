import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView103887Reducer from '../features/CalendarView103887/redux/reducers';
import Dashboard1103875Reducer from '../features/Dashboard1103875/redux/reducers'
import EmailAuth103871Reducer from '../features/EmailAuth103871/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView103887: CalendarView103887Reducer,
Dashboard1103875: Dashboard1103875Reducer,
EmailAuth103871: EmailAuth103871Reducer,

});