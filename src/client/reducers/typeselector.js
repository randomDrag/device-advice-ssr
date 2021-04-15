import {selectType} from '../../actions';



export default function(state = {}, action) {
    switch(action.type) {
    case selectType:
      return action.payload;
    default:
      return state;
    }
  }