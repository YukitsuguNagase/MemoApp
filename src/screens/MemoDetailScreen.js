import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CircleButton from '../elements/CircleButton';


class MemoDetailScreen extends React.Component {
  render() {
    return(
      <View style={styles.container}>

      <View>
        <View style={styles.memoHeader}>

          <View>
              <Text style={styles.memoHeaderTitle}>講座のアイディア</Text>
              <Text style={styles.memoHeaderDate}>2020/01/01</Text>
          </View>

        </View>

      </View>

        <View style={styles.memoContent}>
          <Text>講座のアイディアです</Text>
        </View>

        <CircleButton name="pencil"color='white' style={styles.editButton} onPress={() => { this.props.navigation.navigate('MemoEdit')}} />
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
    backgroundColor: '#fff',
  },

  editButton: {
    top: 38,
  },

});

export default MemoDetailScreen;
