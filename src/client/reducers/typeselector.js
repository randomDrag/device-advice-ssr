import {SELECTED_OPTION} from '../../actions/const';



export default function(state = {}, action) {
    switch(action.type) {
    case SELECTED_OPTION :
      return  action.payload;
    default:
      return state;
    }
  }