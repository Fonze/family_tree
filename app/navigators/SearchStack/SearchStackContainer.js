import { connect } from 'react-redux';

import { getFamilyTree } from '../../actions';

import SearchStackWrapper from './SearchStackWrapper';

const mapStateToProps = (state) => {
  return {
    error: state.familytree.error,
    isFetching: state.familytree.isFetching
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getFamilyTree: () => dispatch(getFamilyTree())
  };
}

const SearchStackContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchStackWrapper);

export default SearchStackContainer;
