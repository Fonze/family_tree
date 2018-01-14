import * as types from './types';

function makeActionCreator(type, ...argNames) {
  return function (...args) {
    let action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    return action
  }
}

export const setResultMember = makeActionCreator(types.SET_RESULT_MEMBER, 'resultMember');

export const getFamilyTree = () => {
  return {
    url: 'http://it-hekuma.protacon.fi/family_tree.json',
    types: [
      types.FETCH_FAMILY_TREE_REQUEST,
      types.FETCH_FAMILY_TREE_SUCCESS,
      types.FETCH_FAMILY_TREE_FAILURE
    ]
  }
};
