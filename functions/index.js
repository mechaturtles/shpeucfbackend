const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// function getCurrentDate() {
// 	let today = new Date();
// 	let minute = today.getMinutes();
// 	let minuteS = minute;
// 	let second = today.getSeconds();
// 	let secondS = second

// 	if (minute < 10)
// 		minuteS = "0" + minute;

// 	if(second < 10)
// 		secondS = "0" + minute;

// 	return today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate() + "|" + today.getHours() + ":" + minuteS + ":" + secondS;
// }

// getISODate = () => new Date().toISOString();



// logEvent = () => {
// 	return (eventSnapshot, context) => {
// 	event = eventSnapshot.val();
// 	console.log("Event id is" + eventSnapshot.key);
// 	userID = context.auth.token.user_id;
// 	return admin.database().ref(`users/${userID}`).once("value", userSnapshot => {
// 		const { firstName, lastName } = userSnapshot.val();

// 		admin.database().ref(`logs/events/${eventSnapshot.key}/${getCurrentDate()}`).set({
// 			author: firstName + " " + lastName,
// 			timestamp: getCurrentDate(),
// 			payload: event
// 		})
// 	});
// 	};
// }

// logEvent = (message) => {
// 	return (eventSnapshot, context) => {
// 	event = eventSnapshot.val();
// 	userID = context.auth.token.user_id;
	
// 	admin.database().ref(`users/${userID}`).once("value", userSnapshot => {
// 		const { firstName, lastName } = userSnapshot.val();

// 		admin.database().ref(`logs/events/${eventSnapshot.key}/${getCurrentDate()}`).set({
// 			author: firstName + " " + lastName,
// 			timestamp: getCurrentDate(),
// 			payload: message || event //message is undefined?
// 		})
// 	})}
// };

//message is undefined and does not get passed in
//on edit, id is different
//change to event key detect?

// let eventRef = functions.database.ref(`/events/{eventID}/`);
// exports.createEvent = eventRef.onCreate(logEvent());
// exports.updateEvent = eventRef.onUpdate(logEvent());
// exports.deleteEvent = eventRef.onDelete(logEvent({ message: "DELETED" }));
