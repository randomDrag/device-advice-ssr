import {SELECTED_OPTION} from "./const";


// this action is for selecting between catogry

export function selected(option){

    return {

        type : SELECTED_OPTION,
        payload : option
    };

}


