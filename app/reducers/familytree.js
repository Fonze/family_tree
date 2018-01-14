import * as types from '../actions/types';

const initialState = {
  isFetching: false,
  error: null,
  tree: [],
  resultMember: null
}

const familytree = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_FAMILY_TREE_REQUEST: {
      return { ...state, error: null, isFetching: true };
    }
    case types.FETCH_FAMILY_TREE_FAILURE: {
      return { ...state, error: action.error, isFetching: false };
    }
    case types.FETCH_FAMILY_TREE_SUCCESS: {
      return { ...state, isFetching: false, tree: action.response };
    }
    case types.SET_RESULT_MEMBER: {
      return { ...state, resultMember: action.resultMember };
    }
    default:
      return state;
  }
}

export default familytree;
