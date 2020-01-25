import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAlUmsqdp42OQYZ2kDuoCzR3WvgprT6QOw',
  authDomain: 'superkassa-test.firebaseapp.com',
  databaseURL: 'https://superkassa-test.firebaseio.com',
  projectId: 'superkassa-test',
  storageBucket: 'superkassa-test.appspot.com',
  messagingSenderId: '476625479224',
  appId: '1:476625479224:web:ba6b423099f92413b068cd'
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
