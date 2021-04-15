import {TYPE_SEC} from '../../actions/const';



export default function(state = {}, action) {
    switch(action.type) {
    case TYPE_SEC:
      return  action.payload;
    default:
      return state;
    }
  }