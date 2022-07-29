import {Platform} from 'react-native';

const Utils = {
  dialCall: function (phoneNumber) {
    if (Platform.OS === 'android') {
      phoneNumber = 'tel:' + phoneNumber;
    } else {
      phoneNumber = 'telprompt:' + phoneNumber;
    }
    Linking.openURL(phoneNumber);
  },
};
export default Utils;
