import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import fonts from '../theme/fonts';
import {TodoScreen} from '../app/todo/TodoScreen';
import {Constant, Color} from '../res/ResRoot';
import {MoviesScreen} from '../app/todo/MoviesScreen';
import {FavMoviesScreen} from '../app/todo/FavMoviesScreen';

const Stack = createNativeStackNavigator();
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: Color.PRIMARY},
          headerTitleStyle: {textAlign: 'center', fontSize: fonts.size.font16},
          headerTitleAlign: 'center',
          headerTintColor: Color.WHITE,
          headerBackTitle: 'Back',
          headerBackTitleStyle: {fontSize: fonts.size.font16},
        }}>
        <Stack.Screen name={Constant.TODO_SCREEN} component={TodoScreen} />
        <Stack.Screen name={Constant.MOVIES_SCREEN} component={MoviesScreen} />
        <Stack.Screen
          name={Constant.FAV_MOVIES_SCREEN}
          component={FavMoviesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
