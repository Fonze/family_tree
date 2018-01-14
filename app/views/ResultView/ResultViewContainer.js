import { connect } from 'react-redux';

import ResultView from './ResultView';

const mapStateToProps = (state) => {
  return {
    familytree: state.familytree.tree,
    resultMember: state.familytree.resultMember
  };
};

const ResultViewContainer = connect(
  mapStateToProps
)(ResultView);

export default ResultViewContainer;
