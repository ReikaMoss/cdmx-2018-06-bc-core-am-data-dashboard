// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDkgXywkxSErDd4HEpMmeA8r35-g5OuKnU',
  authDomain: 'login-dashboard-f3f56.firebaseapp.com',
  databaseURL: 'https://login-dashboard-f3f56.firebaseio.com',
  projectId: 'login-dashboard-f3f56',
  storageBucket: 'login-dashboard-f3f56.appspot.com',
  messagingSenderId: '180132226041'
};
firebase.initializeApp(config);
let boton = document.getElementById('buttonGoogle');

boton.addEventListener('click', e => {
  authGoogle();
});

authGoogle = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  authentication(provider);
};

authentication = (provider) => {
  firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
  })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      console.log(error);
    });
};
