import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'

firebase.initializeApp({
	apiKey: 'AIzaSyB3gcZPqkYxR3IE7crfstv8JSntkvQO97k',
	authDomain: 'platypus-in-a-teacup.firebaseapp.com',
	projectId: 'platypus-in-a-teacup',
	storageBucket: 'platypus-in-a-teacup.appspot.com',
	messagingSenderId: '498212359535',
	appId: '1:498212359535:web:c70e1e677d88977759ec9a',
	measurementId: 'G-VKXRR3QLSY',
})

firebase.analytics()

export default firebase
