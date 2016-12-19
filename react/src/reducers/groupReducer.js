import * as ActionType from '../actions/actionTypes';


export default function groupReducer(state = [], action){
  switch(action.type){
    case ActionType.CREATE_GROUP:
      return [...state, Object.assign({}, action.group)];
    case ActionType.LOAD_ALL_GROUP:
      return action.groups;

    default:
      return state;
  }

}
