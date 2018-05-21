import React from 'react'
import {
  StatusBar,
  View,
  Button as DefaultButton,
} from 'react-native'
import {
  Button,
  Text,
} from 'react-native-elements'
import {
  StackNavigator,
  DrawerNavigator,
  TabNavigator,
  TabBarBottom,
} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

import GenericScreen from './GenericScreen'

class ModalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StatusBar
          backgroundColor="blue"
          barStyle="dark-content"
        />
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack(null)}
          title="Dismiss"
        />
      </View>
    )
  }
}

const stack = ({ name }) => (StackNavigator({
  [`${name}`]: {
    screen: (props) => <GenericScreen {...props} title={`${name}`} Name={`${name}`} />,
    navigationOptions: ({ navigation }) => ({
      title: `${name}`,
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('DrawerToggle')}
          icon={{
            name: 'menu',
            size: 15,
            color: 'white'
          }}
          buttonStyle={{ backgroundColor: 'transparent' }}
        />
      ),
    }),
  },
  [`${name}+1`]: {
    screen: View,
    navigationOptions: {
      title: `${name}+1`,
    },
  },
}, {
  initialRouteName: `${name}`,
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
}))

export default StackNavigator(
  {
    Drawer: {
      screen: DrawerNavigator({
        Home: {
          screen: TabNavigator({
            Home: { screen: stack({ name: 'Home' }) },
            Browser: { screen: stack({ name: 'Browser' }) },
            Search: { screen: stack({ name: 'Search' }) },
            Radio: { screen: stack({ name: 'Radio' }) },
          },{
            navigationOptions: ({ navigation }) => ({
              tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state
                let iconName
                switch (routeName) {
                  case 'Home':
                    iconName = `ios-home${focused ? '' : '-outline'}`
                    break
                  case 'Browser':
                    iconName = `ios-browsers${focused ? '' : '-outline'}`
                    break
                  case 'Search':
                    iconName = `ios-search${focused ? '' : '-outline'}`
                    break
                  case 'Radio':
                    iconName = `ios-radio${focused ? '' : '-outline'}`
                    break
                }
                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />
              },
            }),
            tabBarOptions: {
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            },
            tabBarComponent: TabBarBottom,
            tabBarPosition: 'bottom',
            animationEnabled: false,
            swipeEnabled: true,
          })
        },
        DailyMix: {
          screen: stack({ name: 'DailyMix' }),
          navigationOptions: {
            drawerLabel: 'Daily Mix'
          },
        },
        RecentlyPlayed: {
          screen: stack({ name: 'RecentlyPlayed' })
        },
        Albums: {
          screen: stack({ name: 'Albums' })
        },
        Artists: {
          screen: stack({ name: 'Artists' })
        },
      })
    },
    Settings: {
      screen: StackNavigator({
        Setting: {
          screen: ModalScreen,
          navigationOptions: ({ navigation }) => ({
            headerTitle: 'Setting',
            headerRight: (
              <DefaultButton
                title="close"
                onPress={() => navigation.goBack(null)}
              />
            )
          }),
        }
      })
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
)
