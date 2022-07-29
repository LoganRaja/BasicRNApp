import AsyncStorage from '@react-native-async-storage/async-storage';
import {Constant} from '../res/ResRoot';

const CredentialsManager = {
  clearToken: async function () {
    try {
      await AsyncStorage.removeItem(Constant.REFRESH_TOKEN);
      return await AsyncStorage.removeItem(Constant.ACCESS_TOKEN);
    } catch (error) {}
  },
};

export default CredentialsManager;
