import React, { Component } from 'react';
import { ActivityIndicator, Alert, Modal, Text, View } from 'react-native';

import SearchStack from './SearchStack';

import colors from '../../constants/colors';
import strings from '../../constants/strings';
import styles from './styles';

class SearchStackWrapper extends Component {
  constructor(props) {
    super(props);
  }

  //this happens before even the first view is mounted
  componentDidMount() {
    this.props.getFamilyTree();
  }

  //creates an error message if http-request fails
  componentWillReceiveProps(nextProps) {
    if(this.props.isFetching && !nextProps.isFetching && nextProps.error !== null) {
      Alert.alert(
        strings.errors.connection.title,
        strings.errors.connection.title
      );
    }
  }

  render() {
    return (
      <View style={styles.flexOne}>
        {/*a loading modal to show up during http-requests*/}
        <Modal
          style={styles.flexOne}
          visible={this.props.isFetching}
          transparent={true}
          onRequestClose={() => {}}>
          <View style={styles.modalBackDrop}>
            <View style={styles.loadingArea}>
              <ActivityIndicator size={'large'} color={colors.lapisLazuli}/>
              <Text style={styles.loadingText}>{strings.loading}</Text>
            </View>
          </View>
        </Modal>
        
        <SearchStack style={styles.flexOne} />
      </View>
    )
  }
}

export default SearchStackWrapper;
