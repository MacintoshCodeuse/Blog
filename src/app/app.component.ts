import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor() {
		// Initialize Firebase
		var config = {
			apiKey: "AIzaSyB8iuK9yLlvXraMMpv1KwNMq4Rf_tH_sCE",
			authDomain: "blog-911fd.firebaseapp.com",
			databaseURL: "https://blog-911fd.firebaseio.com",
			projectId: "blog-911fd",
			storageBucket: "",
			messagingSenderId: "279989502477"
		};
		firebase.initializeApp(config);
	}
}
