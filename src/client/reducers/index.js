import { combineReducers } from "redux";
import typeselector from "./typeselector";

import {reducer as formReducer} from 'redux-form'


export default combineReducers({

   typeselector,
   form : formReducer

});