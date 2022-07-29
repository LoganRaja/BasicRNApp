// import {Alert} from 'react-native';
// import {
//   check,
//   request,
//   openSettings,
//   PERMISSIONS,
//   RESULTS,
//   checkMultiple,
// } from 'react-native-permissions';

// // In case you want to check a single permission
// export async function checkPermission(permission) {
//   var isPermissionGranted = false;
//   const result = await check(permission);
//   switch (result) {
//     case RESULTS.GRANTED:
//       isPermissionGranted = true;
//       break;
//     case RESULTS.DENIED:
//       let req_result = await request(permission);
//       req_result == RESULTS.GRANTED
//         ? (isPermissionGranted = true)
//         : (isPermissionGranted = false);
//       break;
//     case RESULTS.BLOCKED:
//       Alert.alert(
//         'Access Required',
//         'Please allow us to access this permission so that we can better serve you.',
//         [
//           {
//             text: 'Go to Settings',
//             onPress: () => openSettings(),
//           },
//         ],
//       );

//       isPermissionGranted = false;
//       break;
//     case RESULTS.UNAVAILABLE:
//       isPermissionGranted = false;
//       break;
//   }
//   return isPermissionGranted;
// }

// This function can be used anywhere as it supports multiple permissions.
// It checks for permissions and then requests for it.
// export async function checkMultiplePermissions(permissions) {
//     let isPermissionGranted = false;
//     const statuses = await requestMultiple(permissions);
//     for (var index in permissions) {
//         if (statuses[permissions[index]] === RESULTS.GRANTED) {
//             isPermissionGranted = true;
//         } else {
//             isPermissionGranted = false;
//             break;
//         }
//     }
//     return isPermissionGranted;
// }
