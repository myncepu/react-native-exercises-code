import React, { Component } from 'react'
import {
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import {
  List,
  ListItem,
} from 'react-native-elements'

const styles = StyleSheet.create({
  list: {
    // ios 11.3 List自动会空出StatusBar高度
    // ios 10.3.3 不会空出StatusBar高度，需要marginTop
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: '#bbb',
    backgroundColor: '#fff',
  },
  listItem: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
    // borderColor: '#bbb',
  },
  listItemTouch: {
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#bbb',
  }
})

class Challenge3 extends Component {
  state = {
    people: [],
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people')
      .then(response => response.json())
      .then(response => this.setState({ people: response.results }))
      .catch(error => alert(error))
  }

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <View style={ styles.listItemTouch }>
          <ListItem
            containerStyle={ styles.listItem }
            title={item.name}
            subtitle={`Birth Year: ${item.birth_year}`}
            hideChevron
          />
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <List containerStyle={ styles.list }>
          <FlatList
            data={this.state.people}
            renderItem={this.renderItem}
            keyExtractor={item => item.created}
          />
        </List>
      </SafeAreaView>
    )
  }
}

export default Challenge3
