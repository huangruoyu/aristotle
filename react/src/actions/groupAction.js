import * as ActionType from './actionTypes';
import GroupApi from '../api/mockGroupApi.js';

export function createGroup(group){
  return {type:ActionType.CREATE_GROUP, group};
}

export function loadAllGroup(groups){
  return {type:ActionType.LOAD_ALL_GROUP, groups};
}

export function loadAllGroupFromApi(dispatch){

  return (dispath) => {
    GroupApi.getAllGroups().then(groups => {
      dispath(loadAllGroup(groups));
    }).catch(error => {
      throw error;
    });
  };

}
