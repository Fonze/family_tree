import { connect } from 'react-redux';

import { setResultMember } from '../../actions';

import SearchView from './SearchView';

const mapStateToProps = (state) => {
  return {
    familytree: state.familytree.tree
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setResultMember: (resultMember) => dispatch(setResultMember(resultMember))
  };
};

const SearchViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchView);

export default SearchViewContainer;
