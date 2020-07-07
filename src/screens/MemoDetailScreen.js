import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CircleButton from '../elements/CircleButton';

const dateString = (date) => {
  if (date == null) { return ''; }//並列処理時のぬるぽエラー回避目的
  const str = date.toDate().toISOString();
  return str.split('T')[0];
};


class MemoDetailScreen extends React.Component {
  state = {
    memo: {},
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    this.setState({ memo: params.memo});
    //console.log(params.memo);
  }

  returnMemo(memo) {
    this.setState({ memo })
  }


  render() {
    const { memo } = this.state;
    if (memo == null) { return null; }
    console.log({memo});
    return(
      <View style={styles.container}>

      <View>
        <View style={styles.memoHeader}>

          <View>
              <Text style={styles.memoHeaderTitle}>{memo.body ? memo.body.substring(0, 10) : ''}</Text>
              <Text style={styles.memoHeaderDate}>{dateString(memo.createdOn)}</Text>
          </View>

        </View>

      </View>

        <View style={styles.memoContent}>
          <Text　style={styles.memoBody}>
            {memo.body}
          </Text>
        </View>

        <CircleButton
         name="pencil"
         color='white'
         style={styles.editButton}
         onPress={() => { this.props.navigation.navigate('MemoEdit', { memo,returnMemo: this.returnMemo.bind(this) });}}
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: '100%',
  },

  memoHeader: {
    height: 100,
    backgroundColor: '#17313c',
    justifyContent: 'center',
    padding: 10,
  },

  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },

  memoHeaderDate: {
    fontSize: 12,
    color: '#fff',
  },

  memoContent: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#fffde6',
  },

  editButton: {
    top: 38,
  },

  memoBody: {
    lineHeight: 22,
    fontSize: 15,
  },

});

export default MemoDetailScreen;
