import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';
//this.props.navigation.navigate('MemoEdit');
class MemoListScreen extends React.Component {
  state = {
    memoList: [],
  }

  componentDidMount(){
    const { currentUser } = firebase.auth();
    firebase.firestore().collection(`users/${ currentUser.uid }/memos`)
    .get()
    .then((dbMemolist) => {
      const memoList = [];
      dbMemolist.forEach((doc) => {
        //console.log(doc.data());
        memoList.push(doc.data());
      });
      this.setState({ memoList : memoList});
    })
    .catch((error) => {
      console.log(error);
    });

  }
  handlePress() {
    this.props.navigation.navigate('MemoCreate');
  }

  render() {
    return (
      <View style={styles.container}>
        <MemoList memoList= {this.state.memoList} navigation={this.props.navigation} />
        <CircleButton name="plus" onPress={this.handlePress.bind(this)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fffde6',
  },

});

export default MemoListScreen;
