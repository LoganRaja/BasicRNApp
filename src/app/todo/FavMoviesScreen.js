import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Color} from '../../res/ResRoot';
import adjust from '../../theme/adjust';
import {addOrRemoveFavMovies} from '../../redux/slice/ThunkSlice';
import Icon from 'react-native-vector-icons/AntDesign';

export const FavMoviesScreen = () => {
  const dispatch = useDispatch();
  const thunkdata = useSelector(state => state.thunkdata);
  const favMovies = thunkdata.favMovies;

  renderItem = item => {
    return (
      <View style={styles.itemRoot}>
        <View style={{flex: 1}}>
          <Text style={{color: Color.BLACK, fontWeight: 'bold'}}>
            {item.title}
          </Text>
          <Text style={{color: Color.BLACK}}>
            {'release Year: ' + item.releaseYear}
          </Text>
        </View>
        {item.favourite ? (
          <Icon.Button
            size={adjust(18)}
            color={'red'}
            name={'heart'}
            style={{marginRight: -adjust(10), backgroundColor: null}}
            backgroundColor={null}
            onPress={() => dispatch(addOrRemoveFavMovies(item.id))}
          />
        ) : (
          <Icon.Button
            size={adjust(18)}
            color={'red'}
            name={'hearto'}
            style={{marginRight: -adjust(10), backgroundColor: null}}
            backgroundColor={null}
            onPress={() => dispatch(addOrRemoveFavMovies(item.id))}
          />
        )}
      </View>
    );
  };
  return (
    <View style={styles.rootView}>
      <FlatList data={favMovies} renderItem={({item}) => renderItem(item)} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: adjust(24),
    fontWeight: 'bold',
    marginBottom: adjust(12),
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.WHITE,
  },
  rootView: {
    flex: 1,
    backgroundColor: Color.WHITE,
  },
  getMovieTxt: {
    backgroundColor: 'blue',
    color: Color.WHITE,
    fontSize: adjust(20),
    alignSelf: 'center',
    marginTop: 20,
  },
  itemRoot: {
    margin: 10,
    backgroundColor: 'skyblue',
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  showFavMovTxt: {
    padding: 10,
    textAlign: 'right',
    fontSize: adjust(12),
    fontWeight: 'bold',
  },
});
